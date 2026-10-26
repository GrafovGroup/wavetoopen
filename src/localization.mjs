import {readFile,writeFile,mkdir,readdir} from 'node:fs/promises';
const dictionary=JSON.parse(await readFile(new URL('./translations.fr.json',import.meta.url),'utf8'));
export const routeMap={
 '/':'/fr/', '/about/':'/fr/a-propos/', '/services/':'/fr/services/', '/buildings/':'/fr/batiments/',
 '/national-accounts/':'/fr/comptes-nationaux/', '/locations/':'/fr/regions/', '/resources/':'/fr/ressources/',
 '/guides/':'/fr/guides/', '/faqs/':'/fr/questions-frequentes/', '/how-it-works/':'/fr/notre-demarche/',
 '/quote/':'/fr/soumission/', '/privacy/':'/fr/confidentialite/', '/image-credits/':'/fr/credits-images/', '/404/':'/fr/404/',
 ...Object.fromEntries(Object.entries({
 'wave-to-open-installation':'installation-sans-contact','touchless-retrofits':'conversion-sans-contact',
 'automatic-door-operators':'operateurs-automatiques','accessible-door-openers':'ouvre-portes-accessibles',
 'universal-washrooms':'toilettes-universelles','wave-to-lock':'verrouillage-sans-contact',
 'push-to-wave-upgrades':'conversion-boutons-poussoirs','access-control-integration':'integration-controle-acces',
 'locking-integration':'integration-serrures','automatic-door-repair':'reparation-portes-automatiques',
 'multi-location-rollouts':'deploiement-multisite'
 }).map(([a,b])=>['/services/'+a+'/','/fr/services/'+b+'/'])),
 ...Object.fromEntries(Object.entries({'healthcare':'sante-soins','offices-managed-properties':'bureaux-immeubles-geres','public-commercial-buildings':'publics-commerciaux'}).map(([a,b])=>['/buildings/'+a+'/','/fr/batiments/'+b+'/']))
};
const decode=s=>s.replace(/&(?:amp|lt|gt|quot|apos|nbsp);|&#(?:x[0-9a-f]+|\d+);/gi,e=>{const names={'&amp;':'&','&lt;':'<','&gt;':'>','&quot;':'"','&apos;':"'",'&nbsp;':'\u00a0'};return names[e]??String.fromCodePoint(e[2].toLowerCase()==='x'?parseInt(e.slice(3,-1),16):parseInt(e.slice(2,-1),10))});
const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
export const missing=new Set();
function plain(s,strict=false){
 if(dictionary[s]!==undefined)return dictionary[s];
 for(const suffix of [' | WaveToOpen.ca',' | WaveToOpen'])if(dictionary[s+suffix])return dictionary[s+suffix].replace(suffix,'');
 if(strict&&/[a-z]/i.test(s))missing.add(s);
 return s;
}
function text(s){const decoded=decode(s),value=decoded.trim();if(!value)return s;return decoded.slice(0,decoded.indexOf(value))+esc(plain(value,true))+decoded.slice(decoded.indexOf(value)+value.length)}
function localURL(s,origin){const absolute=s.startsWith(origin);if(absolute)s=s.slice(origin.length);const match=s.match(/^([^?#]*)(.*)$/);if(!match)return s;return (absolute?origin:'')+(routeMap[match[1]]||match[1])+match[2]}
function schema(value,origin,key=''){
 if(Array.isArray(value))return value.map(v=>schema(v,origin,key));
 if(value&&typeof value==='object')return Object.fromEntries(Object.entries(value).map(([k,v])=>[k,schema(v,origin,k)]));
 if(typeof value!=='string')return value;
 if(key==='inLanguage')return 'fr-CA';
 if(key==='availableLanguage')return value; // Both languages are advertised separately below.
 if(value.startsWith(origin))return localURL(value,origin);
 if(['name','description','headline','serviceType'].includes(key))return plain(value,true);
 return value;
}
function alternateLinks(path,origin){return `<link rel="alternate" hreflang="en-CA" href="${origin+path}"><link rel="alternate" hreflang="fr-CA" href="${origin+routeMap[path]}"><link rel="alternate" hreflang="x-default" href="${origin+path}">`}
function switcher(path,fr){return `<nav class="language-switch" aria-label="${fr?'Langue du site':'Website language'}"><span lang="${fr?'fr':'en'}" aria-current="true">${fr?'FR':'EN'}</span><a class="language-link" href="${fr?path:routeMap[path]}" lang="${fr?'en':'fr'}" hreflang="${fr?'en-CA':'fr-CA'}" aria-label="${fr?'Read this page in English':'Lire cette page en français'}">${fr?'EN':'FR'}</a></nav>`}
function decorate(html,path,origin,fr){
 return html.replace('</head>',alternateLinks(path,origin)+'</head>').replace(/(<div class="utility"><div class="container">)([\s\S]*?)(<\/div><\/div><header>)/,(_,a,b,c)=>a+b+switcher(path,fr)+c);
}
export function localizePages(pages,origin){
 const guideSlugs={'automatic-door-not-opening':'porte-automatique-en-panne','push-button-to-touchless-retrofit':'conversion-bouton-sans-contact','sensor-vs-automatic-door-operator':'capteur-ou-operateur','touchless-door-opener-cost':'cout-installation-porte-sans-contact','universal-washroom-door-controls':'commandes-toilettes-universelles'};
 for(const p of pages){
  if(p.path.startsWith('/locations/')&&p.path!=='/locations/')routeMap[p.path]='/fr/regions/'+p.path.split('/')[2]+'/';
  if(p.path.startsWith('/guides/')&&p.path!=='/guides/')routeMap[p.path]='/fr/guides/'+(guideSlugs[p.path.split('/')[2]]||p.path.split('/')[2])+'/';
  if(!routeMap[p.path])throw Error('Missing French route: '+p.path);
 }
 const output=[];
 for(const p of pages){
  let original=p.html.replaceAll('"availableLanguage":["en"]','"availableLanguage":["en","fr"]');
  // Preserve option values, including those which formerly relied on their text as a value.
  original=original.replace(/<option(?![^>]*\bvalue=)([^>]*)>([^<]*)<\/option>/g,(_,attrs,label)=>`<option${attrs} value="${esc(decode(label))}">${label}</option>`);
  let scripts=[];
  let fr=original.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g,s=>{scripts.push(s);return `<!--WTO_SCRIPT_${scripts.length-1}-->`});
  fr=fr.split(/(<[^>]*>)/g).map(token=>{
   if(!token.startsWith('<'))return text(token);
   return token.replace(/\b(alt|aria-label|placeholder|title|content)="([^"]*)"/g,(m,key,value)=>{
    if(key==='content'&&/property="og:url"/.test(token))return `content="${localURL(value,origin)}"`;
    if(key==='content'&&!/(?:name="description"|property="og:(?:title|description)")/.test(token))return m;
    return `${key}="${esc(plain(decode(value),true))}"`;
   }).replace(/\bhref="([^"]*)"/g,(_,url)=>`href="${localURL(url,origin)}"`)
   .replace(/\bdata-search="([^"]*)"/g,(_,value)=>{let extra=value;for(const [en,tr] of Object.entries(dictionary))if(en.length<30&&value.includes(en))extra+=' '+tr;return `data-search="${esc(decode(extra))}"`})
   .replace(/src="\/assets\/([^"?]+\.svg)([^" ]*)"/g,(m,name,q)=>name==='mark.svg'?m:`src="/assets/fr/${name}${q}"`);
  }).join('');
  fr=fr.replace(/<!--WTO_SCRIPT_(\d+)-->/g,(_,i)=>{
   let s=scripts[Number(i)];
   if(s.includes('application/ld+json')){const data=JSON.parse(s.replace(/^.*?>/,'').replace(/<\/script>$/,''));return '<script type="application/ld+json">'+JSON.stringify(schema(data,origin)).replaceAll('<','\\u003c')+'</script>'}
   return s.includes('src="/app.js"')?'<script src="/i18n-fr.js" defer></script>'+s:s;
  }).replace('lang="en-CA"','lang="fr-CA"').replace('content="en_CA"','content="fr_CA"').replace('<td>Confidentialité</td>','<td>Intimité</td>');
  // Locale-aware subject and routing hints; enum values stay stable for existing intake integrations.
  const fields=lang=>`<input type="hidden" name="language" value="${lang}"><input type="hidden" name="originating_page" value="${lang==='fr-CA'?routeMap[p.path]:p.path}">`;
  original=original.replace('<input type="hidden" name="_subject"',fields('en-CA')+'<input type="hidden" name="_subject"');
  fr=fr.replace('<input type="hidden" name="_subject"',fields('fr-CA')+'<input type="hidden" name="_subject"').replace('value="WaveToOpen project enquiry"','value="Demande de projet WaveToOpen — français"');
  output.push({...p,lang:'en-CA',html:decorate(original,p.path,origin,false)});
  output.push({...p,path:routeMap[p.path],lang:'fr-CA',title:plain(p.title),description:plain(p.description),html:decorate(fr,p.path,origin,true)});
 }
 if(missing.size)throw Error('Untranslated text: '+JSON.stringify([...missing]));
 return output;
}
export async function writeFrenchSVGs(){
 await mkdir('dist/assets/fr',{recursive:true});
 for(const file of await readdir('public/assets'))if(file.endsWith('.svg')&&file!=='mark.svg'){
  let svg=await readFile('public/assets/'+file,'utf8');
  svg=svg.replace(/(<(?:text|title|desc)\b[^>]*>)([^<]*)(<\/\w+>)/g,(_,a,b,c)=>a+text(b)+c);
  await writeFile('dist/assets/fr/'+file,svg);
 }
 if(missing.size)throw Error('Untranslated SVG text: '+JSON.stringify([...missing]));
}
export function sitemap(pages,origin){return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${pages.filter(p=>!p.noindex).map(p=>{const en=p.lang==='fr-CA'?Object.keys(routeMap).find(k=>routeMap[k]===p.path):p.path;return `<url><loc>${origin+p.path}</loc><lastmod>2026-10-26</lastmod><xhtml:link rel="alternate" hreflang="en-CA" href="${origin+en}"/><xhtml:link rel="alternate" hreflang="fr-CA" href="${origin+routeMap[en]}"/><xhtml:link rel="alternate" hreflang="x-default" href="${origin+en}"/></url>`}).join('')}</urlset>`}
