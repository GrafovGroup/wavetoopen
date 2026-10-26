import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {routeMap} from '../src/localization.mjs';
const routes=JSON.parse(await readFile('work/routes.json','utf8'));
const html=path=>readFile('dist'+path+'index.html','utf8');
const en=routes.filter(r=>r.lang==='en-CA'),fr=routes.filter(r=>r.lang==='fr-CA');
test('Every English route has one distinct French page with reciprocal search alternates',async()=>{
 assert.ok(routes.every(r=>!r.path.includes('//')));assert.equal(en.length,47);assert.equal(fr.length,en.length);
 for(const route of en){const a=await html(route.path);const alternate=a.match(/hreflang="fr-CA" href="https:\/\/wavetoopen.ca([^"]+)"/)[1];assert.ok(fr.some(r=>r.path===alternate));const b=await html(alternate);assert.ok(b.includes('lang="fr-CA"'));assert.ok(b.includes(`property="og:url" content="https://wavetoopen.ca${alternate}"`));assert.ok(b.includes(`rel="canonical" href="https://wavetoopen.ca${alternate}"`));assert.ok(b.includes(`hreflang="en-CA" href="https://wavetoopen.ca${route.path}"`));assert.ok(b.includes(`class="language-link" href="${route.path}"`));}
});
test('French content remains local across page links and quote routes',async()=>{
 for(const route of fr){const body=await html(route.path);for(const [tag,href] of body.matchAll(/<a\b[^>]*href="(\/[^"?#]*)(?:[^" ]*)"[^>]*>/g)){if(tag.includes('language-link')||href.startsWith('/assets/'))continue;assert.ok(href.startsWith('/fr/'),`${route.path}: ${href}`);}}
});
test('French intake retains integration enum values and includes language context',async()=>{
 const b=await html('/fr/soumission/');assert.ok(b.includes('action="https://formspree.io/f/xrpgdwzz"'));assert.ok(b.includes('name="language" value="fr-CA"'));assert.ok(b.includes('value="Repair">Réparation de portes')||b.includes('value="Repair">Réparation de porte')||b.includes('value="Repair">Réparation de portes'));assert.ok(b.includes('value="Washroom">Toilettes'));assert.ok(b.includes('value="Yes">Oui'));assert.ok(b.includes('/i18n-fr.js'));assert.ok(b.includes('Envoyer la demande'));
});
test('Sitemap contains every indexable route and both language alternatives',async()=>{
 const sitemap=await readFile('dist/sitemap.xml','utf8');assert.equal((sitemap.match(/<url>/g)||[]).length,92);assert.ok(!sitemap.includes('/404/'));for(const r of routes.filter(r=>!r.noindex))assert.ok(sitemap.includes(`<loc>https://wavetoopen.ca${r.path}</loc>`));
});
test('No client dictionary omission for explicit translated string literals',async()=>{
 const script=await readFile('public/app.js','utf8'),dict=JSON.parse(await readFile('src/runtime.fr.json','utf8'));
 for(const [,raw] of script.matchAll(/\bt\('((?:[^'\\]|\\.)*)'\)/g)){const key=raw.replace(/\\n/g,'\n').replace(/\\'/g,"'");assert.ok(key in dict,'Missing runtime translation: '+key);}
});
