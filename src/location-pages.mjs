import {architecturalPhoto} from './architectural-imagery.mjs';
// City pages describe the Canada-wide service area confirmed by the owner.
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');

export const locationPath = slug => `/locations/${slug}/`;

export function locationMetadata(profile) {
  return {
    title: `Touchless & Automatic Door Services in ${profile.city}`,
    description: profile.description,
    parent: 'Locations',
    modified: profile.modified,
    service: true,
    areaServed: {
      '@type': 'City',
      name: profile.city,
      containedInPlace: {
        '@type': 'AdministrativeArea',
        name: profile.province,
        containedInPlace: {'@type': 'Country', name: 'Canada'},
      },
    },
  };
}

export function locationContent(profile, {services, guides, nearby = []}) {
  const serviceItems = profile.services.map(slug => services.find(service => service.slug === slug));
  const guideItems = profile.guides.map(slug => guides.find(guide => guide.slug === slug));
  if (serviceItems.some(item => !item) || guideItems.some(item => !item)) {
    throw new Error(`Unknown service or guide in location profile: ${profile.slug}`);
  }
  const enquiry = new URLSearchParams({city: profile.city});
  const quotePath = `/quote/?${enquiry}`;
  const button = (label, href = quotePath, outline = false) => `<a class="btn${outline ? ' outline' : ''}" href="${escape(href)}">${escape(label)} <span aria-hidden="true">↗</span></a>`;
  const textLink = (label, href) => `<a class="text-link" href="${escape(href)}">${escape(label)} <span aria-hidden="true">↗</span></a>`;

  return `<nav class="container crumbs" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/locations/">Locations</a><span aria-hidden="true">/</span><span>${escape(profile.city)}</span></nav>
<div class="container page-hero"><div><span class="eyebrow orange-dot">${escape(profile.city)} · ${escape(profile.province)}</span><h1>Touchless &amp; automatic<br>doors in ${escape(profile.city)}.</h1><p class="lead muted">${escape(profile.intro)}</p><div class="actions">${button(`Get a ${profile.city} quote`)}${button('Request door service', `${quotePath}&request=service&projectType=Repair&service=automatic-door-repair`, true)}</div></div></div>
<section class="section wash"><div class="container article-grid"><article class="prose">
${profile.sections.map(section => `<section><h2>${escape(section.heading)}</h2>${section.paragraphs.map(paragraph => `<p>${escape(paragraph)}</p>`).join('')}${section.checklist ? `<ul class="check-list">${section.checklist.map(item => `<li>${escape(item)}</li>`).join('')}</ul>` : ''}</section>`).join('')}
<section><h2>Door services for your property</h2><div class="link-grid">${serviceItems.map(service => `<a class="link-row" href="/services/${escape(service.slug)}/">${escape(service.name)} <span aria-hidden="true">↗</span></a>`).join('')}</div></section>
${profile.reference ? `<section><h2>${escape(profile.reference.heading)}</h2><p>${escape(profile.reference.context)}</p>${textLink(profile.reference.label, profile.reference.url)}</section>` : ''}
</article><aside>${architecturalPhoto('commercial-approach')}<div class="aside-box"><span class="eyebrow">Your ${escape(profile.city)} project</span><h2>${escape(profile.brief.heading)}</h2><p>${escape(profile.brief.intro)}</p><ul>${profile.brief.items.map(item => `<li>${escape(item)}</li>`).join('')}</ul>${button('Send project details')}<p class="small">${escape(profile.brief.qualification)}</p></div><nav class="aside-box" aria-label="Relevant planning guides"><h2>Prepare your next step</h2>${guideItems.map(guide => textLink(guide.label, `/guides/${guide.slug}/`)).join('')}</nav></aside></div></section>
${nearby.length ? `<nav class="container related-services" aria-label="Other service locations"><h2>Explore more Canadian cities</h2><div class="link-grid">${nearby.map(place => textLink(place.city, locationPath(place.slug))).join('')}</div></nav>` : ''}`;
}
