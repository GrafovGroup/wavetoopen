# WaveToOpen search-content update

Reviewed and implemented September 12, 2026. This comparison examines the public implementation of the reference sites. Their Search Console traffic, rankings and conversions were not exported, so the findings identify transferable patterns rather than proving the cause of their performance.

## Reference patterns and changes

| Reference | Observed implementation | Applied to WaveToOpen |
| --- | --- | --- |
| [CommercialDoors.ca automatic doors](https://commercialdoors.ca/automatic-doors) | Dedicated product pages, technical detail, specification tables, related products and geographic links. | More explicit service titles and introductions; concise service summaries; links to relevant planning guides. |
| [Cobbler.ca shoe repair](https://cobbler.ca/shoe-repair) | Service-specific headings, included work, nearby service links and Service/Breadcrumb structured data. | Eleven service summaries and improved metadata; clearer connections between the service catalogue, guides and enquiries. |
| [Cobbler.ca Toronto](https://cobbler.ca/toronto) | Dedicated city title, local service content and links into the service catalogue. | Fourteen city pages provide original project guidance, municipal resources and city-prefilled quote links. The owner confirmed Canada-wide coverage. |
| [Snow.ca commercial service](https://snow.ca/services/commercial-snow-removal) | An early summary, direct practical questions, related services and location paths. | Five original guides with answer-first introductions, comparison tables or checklists, and contextual service links. |
| All three homepages | Canonicals, crawlable HTML links and generous search preview settings. | Existing stable URLs and canonicals retained; large image previews and unrestricted snippet/video previews enabled on indexable pages. |

## Published content

The guide collection at `/guides/` covers installation cost factors, sensors versus operators, push-button retrofits, universal washroom controls and automatic-door repair enquiries. Each article has a visible publication date, an organization byline, Article structured data and a descriptive table of contents. The guides and services catalogue expose ItemList data matching their visible links.

The sitemap contains 46 indexable pages after the Canada-wide coverage update. Article and materially revised service entries carry an explicit `2026-09-12` last-modified date; build time is not used to manufacture fresh article dates. The locations directory and all 14 city pages are included; the 404 remains excluded. No existing route was renamed.

The homepage has compact guide and FAQ links, the Resources menu and footer link to the collection, each service links to a relevant guide, and each guide connects to service and related-guide pages. Card previews differ from article introductions and homepage previews differ from the full directory descriptions. All 33 displayed main-content images have single placements.

## Scope and content decisions

- Prices, guarantees, certifications, years in business, response times and other brands' service coverage were not transferred to WaveToOpen. The cost guide helps readers compare a documented installation scope; it does not invent a rate card.
- Geographic Service data and substantive city pages should describe confirmed operations. A city label or a list of neighbourhoods alone is insufficient content for a useful landing page. The owner confirmed all of Canada on September 12, 2026; service and organization data now use Country coverage, with City areas on the relevant location pages.
- The reference sites have English/French alternate links. WaveToOpen currently has English content, so no nonexistent translations or alternate URLs were declared.
- Organization contact details, Service entities, BreadcrumbList, Article and catalogue ItemList data describe the actual pages. No review ratings, prices or LocalBusiness street addresses were fabricated.
- FAQ rich-result markup was not added as an expected ranking benefit. Google's current eligibility is limited to authoritative government and health sites.

## Primary guidance

- [Google: descriptive title links](https://developers.google.com/search/docs/appearance/title-link)
- [Google: crawlable links and descriptive anchor text](https://developers.google.com/search/docs/crawling-indexing/links-crawlable)
- [Google: structured data must describe page content](https://developers.google.com/search/docs/appearance/structured-data/sd-policies)
- [Google: doorway abuse and other spam policies](https://developers.google.com/search/docs/essentials/spam-policies)
- [Google: FAQ rich-result eligibility](https://developers.google.com/search/blog/2023/08/howto-faq-changes)

Technical guide references are linked next to the relevant guide content and include BEA MS41, BEA LZR-FLATSCAN 3D SW and Camden CX-WC manufacturer pages. They are product examples, not claims of authorization or endorsements.

## Validation records

`outputs/seo-reference-audit.json` records the observed source metadata and headings. `outputs/seo-implementation-checks.json` checks sitemap membership, metadata lengths and article/schema consistency. Existing browser and accessibility checks cover routes, images, form behaviour and responsive layouts. `outputs/repetition-audit.json` checks long text and image duplication.

## Canada-wide service coverage

The owner explicitly confirmed installation and repair coverage across all of Canada on September 12, 2026. The locations hub lists all ten provinces and three territories, with a direct enquiry path for any community. The existing 14 market names now link to original city pages. Each page contains a distinct project discussion, a tailored information checklist, relevant services and guides, and a verified municipal resource. These describe service areas without inventing street addresses, local branches, completed projects or attendance guarantees.

`src/location-content.mjs` is the authored source for these pages. City names with accents retain them in visible copy and form values; URL slugs use stable ASCII spellings. The directory's service filter updates only enquiry links, preserving crawlable links to the city pages. Province and territory names describe national coverage; they do not create duplicate provincial landing pages.

Validation checks city-to-directory membership, the 46-URL sitemap, Country and City structured data, metadata uniqueness, internal links and city/service quote prefill. Displayed images keep unique content placements.

## Journey simplification

The homepage now links directly to four service-led enquiries and their detailed service pages. All 46 indexable URLs, canonical URLs, city content and structured data remain available. The services catalogue still links to every service; the Resources hub and menu keep guides, FAQs, process and technical references crawlable after removing repetitive homepage sections.

The homepage's expandable full-service list provides crawlable links to all 11 services without adding a long visible catalogue. The five displaced homepage illustrations now appear on relevant service pages; no image is duplicated.

## September 12, 2026 review

All 46 indexable URLs and their service/location/guide content remain present after the service-layout refinement. Existing technical prose remains in server-rendered HTML inside native disclosures. The 33 unique main-content image placements are retained.

Search Console inspection showed the homepage indexed, with its last crawl on September 9, before the current implementation. Product/merchant enhancement warnings were associated with that older crawl; the current site does not emit Product schema. The Performance report’s available chart covered September 10 and showed no data; this limited window is not evidence of long-term performance. Core Web Vitals reports had insufficient usage data for both mobile and desktop.

A local throttled mobile lab check (390px, CPU 4x slowdown, 1.6 Mbps download, 150 ms latency) measured LCP of 2.54s on home and about 1.06s on the washroom and quote pages, with zero observed layout shift on all three. These are local lab readings, not production field Core Web Vitals. No external resources loaded before video interaction.
