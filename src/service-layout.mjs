import {architecturalPhoto} from './architectural-imagery.mjs';
export const servicePhotos={
 'wave-to-open-installation':'touchless-entry', 'touchless-retrofits':'project-doorway',
 'automatic-door-operators':'project-doorway', 'accessible-door-openers':'considered-access',
 'universal-washrooms':'washroom-entry', 'wave-to-lock':'washroom-entry',
 'push-to-wave-upgrades':'touchless-entry', 'access-control-integration':'tenant-lobby',
 'locking-integration':'project-doorway', 'automatic-door-repair':'door-assessment',
 'multi-location-rollouts':'portfolio-facilities'
};
// Service presentation changes without duplicating or discarding authored content.
export const serviceActions={
 'wave-to-open-installation':'Plan touchless installation',
 'touchless-retrofits':'Discuss a door upgrade',
 'automatic-door-operators':'Get an operator quote',
 'accessible-door-openers':'Plan accessible door work',
 'universal-washrooms':'Request a washroom quote',
 'wave-to-lock':'Discuss privacy controls',
 'push-to-wave-upgrades':'Assess a push-to-wave upgrade',
 'access-control-integration':'Discuss access integration',
 'locking-integration':'Assess locking requirements',
 'automatic-door-repair':'Request door repair',
 'multi-location-rollouts':'Plan a multi-site project'
};
export function servicePage(s,{crumbs,photo,serviceSearch,serviceAnswer,btn,link,url,guides,guidePath,faqlist,visualNote,relatedHTML}) {
 const quote='/quote/?'+new URLSearchParams({service:s.slug,...(s.slug==='automatic-door-repair'?{request:'service'}:{})});
 const disclosure=(id,title,content)=>`<details class="service-disclosure" id="${id}"><summary><h3>${title}</h3></summary><div class="disclosure-body">${content}</div></details>`;
 return crumbs(s.name,'Services')+`<div class="container page-hero has-image service-hero"><div><span class="eyebrow">${s.tag}</span><h1>${s.name}</h1><p class="lead muted">${serviceSearch[s.slug].intro}</p><div class="actions">${btn(serviceActions[s.slug],quote)}${link('Arrange a site assessment','/quote/?request=assessment&service='+s.slug)}</div></div>${architecturalPhoto(servicePhotos[s.slug],true)}</div>
 <nav class="container service-page-nav" aria-label="On this service page"><a href="#overview">Overview</a><a href="#service-details">Project details</a><a href="#door-review">Door review</a></nav>
 <section class="section wash service-content"><div class="container article-grid"><article class="prose">
 <section id="overview" class="service-overview"><h2>${s.lead}</h2><p>${s.body}</p></section>
 ${serviceAnswer(s.slug)}
 <section class="service-details" id="service-details"><span class="eyebrow">Your project, in detail</span><h2>Know what the work involves.</h2>
 ${disclosure('assessment','What we assess',`<ul class="check-list">${s.checks.map(x=>`<li>${x}</li>`).join('')}</ul>`)}
 ${disclosure('scope','Scope & coordination',`<p>${s.scope}</p>`)}
 ${disclosure('prepare','What to share with us',`<p>${s.prep}</p>`)}
 </section>
 ${faqlist([s.faq])}
 ${visualNote(s.slug)}
 </article><aside class="service-sidebar"><div class="service-next"><span class="eyebrow">Your next step</span><h2>Start with your opening.</h2>${btn(serviceActions[s.slug],quote)}${link('Check your service area','/locations/?service='+s.slug)}<div class="fine-rule"></div><a class="service-phone" href="tel:+18336969996">(833) 696-9996</a></div><div class="service-reading"><span class="eyebrow">Useful reading</span>${link(guides.find(g=>g.slug===serviceSearch[s.slug].guide).label,guidePath(serviceSearch[s.slug].guide))}${link('Technical references','/resources/#sources')}</div></aside></div></section>`+relatedHTML(s.related);
}
