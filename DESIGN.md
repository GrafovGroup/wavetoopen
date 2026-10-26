# WaveToOpen — design and content system

## Direction
An architectural, facility-oriented identity: white, charcoal, restrained blue/teal and original door/wave linework. Prioritize the complete assessed opening rather than a wall-switch catalogue. Literal service names, accessible washroom emphasis and practical procurement content replace promotional metrics or unsupported installation claims.

## Typography and layout
System Arial/Helvetica for clear body and UI text, with a blue/teal sans-serif home headline. No font network requests. Body 17px desktop / 16px mobile; readable line-height 1.65. Desktop headings reach 68px, mobile 43–48px. Page width 1280px, desktop gutters 48px, mobile 20px. Section spacing 88px desktop / 55px mobile. Mostly square panels and shallow corner radii; thin rules establish hierarchy.

## Palette
- Charcoal teal #203c43: text, navigation, primary buttons and washroom feature.
- Deep charcoal #172a30: footer.
- White #ffffff: page background.
- White #ffffff: cards and inputs.
- Pale blue #eef4f5: supporting sections.
- Muted slate #53656b: secondary text.
- Pale teal #b8e1e4: home CTA and restrained highlights, always dark text.
- Rust #9e2d17: errors.

## Navigation and conversion
Desktop service/building disclosure menus, with directory and process links. Mobile menu includes Escape dismissal and focus return. Sticky mobile Call / Quote bar omitted on the quote page. Home hero CTA: Find your service, with Get a quote secondary. Four project cards lead directly to a prefilled enquiry, with service-detail links alongside. Site assessment remains on service and portfolio paths. Market selection carries city and service to the quote form, with free-text municipality support.

## Imagery
Three openly licensed Wikimedia Commons reference photographs: automatic entrance, operator drive and commercial building. Preserve author and CC BY-SA 4.0 attribution, linked from adjacent captions and the credit page. Photos are never identified as WaveToOpen work. Self-hosted WebP at 640 and 1280px with explicit dimensions, responsive selection and lazy loading below the fold. Original SVG system illustration distinguishes activation, operation, privacy and assistance; it is not a wiring diagram or compliant sequence.

## Accessibility
Semantic HTML, one H1 per page, skip link, visible keyboard focus, explicit labels, native constraint validation, live form feedback, accordion disclosure and reduced-motion support. The comparison table scrolls within its container on small screens. No decorative motion or scroll interception. Automated checks supplement, and do not replace, assistive-technology testing.

## Content boundaries
No fabricated coverage, partners, local offices, certifications, reviews, prices, health benefits or emergency response promises. The Canada-wide location directory and distinct city pages are indexable. Province-specific requirements and safe egress require project review. Third-party manufacturer references are educational, not supplier claims. Do not display pre-launch language on the business site.

## Latest brief implementation
National Accounts is a prominent navigation page and home feature. Add the existing-push-button educational funnel and direct photo-assessment CTA. RFQ order is project → existing opening → washrooms → scope/attachments → contact. White/charcoal/teal replaces the initial forest/ivory palette. Original SVG colours and social card match. Actual local upload support is implemented; no claim is made that an unconfigured destination received files.

## Current palette — user-requested red identity
Red replaces teal throughout the site. Primary red #bd2336 with white text; hover #96182a; charcoal text #252327; white background; pale rose #faf2f3; burgundy feature panels #48212c; footer #241d21. Headline accents use #b51f33. Logo, diagram, browser theme and social artwork match. This palette supersedes earlier colour decisions.

## Imagery enrichment
Seven authentic reference photographs now support the website, with an additional original touchless-activation SVG. Homepage building applications use distinct hospital, office-lobby and commercial-building photographs. The push-button retrofit funnel has a control close-up; a three-part gallery explains activation, operation and locking. Each core service gets a paired visual assessment note, and National Accounts includes a facility image strip. Responsive WebP, lazy loading and reserved image dimensions keep the expanded content efficient. Technical diagrams use contain sizing to preserve labels, and low-resolution hardware photography is not artificially upscaled. Mixed licences and public-domain status are represented individually on the credit page.


## Selected logo

The user selected waving-hand option 03: white outlined waving hand in a red rounded badge. Use `public/assets/mark.svg` for header, footer and favicon. The visual wordmark is **WaveToOpen**, with no .ca suffix. The domain and canonical URLs remain wavetoopen.ca.


## Page content without duplication

Give each content image one placement across the main site. Original editorial diagrams provide distinct visuals where reference photographs were previously repeated. Detailed service introductions belong on service pages; directory cards use short summaries and related services use plain links. FAQs live on the FAQ page; the homepage links to topics. Keep navigation, branding and essential control labels consistent. Run `python3 tests/repetition.py` after building to audit long blocks/sentences and image hashes.

## Architectural imagery and uppercase actions

Ten original AI-generated architectural studies add visual context to the homepage building cards and the services, buildings, process, national accounts, about, resources and quote pages. Every study has one placement, descriptive alternative text, responsive local WebP files and a link to its provenance. They represent imagined environments, not completed installations. Preserve the existing photographs and editorial diagrams.

Navigation, footer menu links, buttons and text calls to action use uppercase presentation with restrained letter spacing. Preserve the selected WaveToOpen wordmark and normal sentence case in headings, body copy and form fields. Verify long uppercase actions at narrow widths.

## Search-oriented service and guide content

Service pages use explicit installation/repair language and distinct, brief summaries before detailed scope. Five planning articles and a guide collection connect to the catalogue through contextual links. Guide cards use white panels with red top rules; article navigation and tables follow the existing type and spacing system. Preserve the red identity, uppercase controls, original imagery and stable URLs. See `SEO.md` for the reference-site comparison, content boundaries and validation.

Canada-wide coverage extends the existing Locations directory with 14 editorial city pages. A three-column province/territory list collapses to two columns and then one. City headings link to their service page while a separate enquiry link carries the selected service into the quote form. City pages use the established article/sidebar layout and retain the red palette and uppercase action styling.

## Simplified visitor journey — September 12, 2026

This update supersedes the earlier homepage funnel and RFQ ordering. Keep six main homepage blocks: hero, four project choices, building applications, process, National Accounts, and a combined coverage/resources section. Installation, upgrades, washrooms and repair each have a direct prefilled enquiry and a secondary detail link. Technical education remains on existing service/resource routes. The Services menu and catalogue follow these categories; Resources groups planning guides, FAQs, process and technical references.

The quote page starts with a compact heading. Five fields are required: project type, city, name, email and consent. Phone and a short message are optional. All other project details and attachments sit in a native disclosure. Relevant washroom and portfolio controls remain available without being shown to every visitor. Preserve no-JavaScript submission, upload limits, local copy download, input retention on failure and city/service deep links. Repeated form classifications are removed from the initial flow.

The shortened homepage retains its entrance photograph and three unique building images. The five educational visuals removed from the homepage are placed once each on the relevant installation, retrofit, washroom, privacy and push-to-wave service pages. The full site contains 33 unique main-content images. Keep the selected red identity, waving-hand mark and uppercase actions.

## Preserve depth while simplifying presentation

The owner requires simplification without losing useful content or capabilities. Keep the short homepage and basic enquiry view, with the full service range available in an expandable homepage directory. Preserve every service, city, building and guide route, all existing images in unique placements, and the complete optional enquiry controls. Quote, assessment and service request preferences remain editable under optional details and a visitor's explicit choice is retained. New simplification work should relocate useful information or use clear disclosure, not silently remove it.

## Service clarity and authentic demonstration — September 12, 2026

Show the original service overview and key facts first. Keep assessment, scope and preparation in labelled native disclosures with usable hash links. Preserve all original prose, FAQs, guidance links and service relationships. Use a service-specific enquiry action and a quiet phone link. Supporting text is 16–18px; small labels and captions are at least 12px where practical.

The home visual now explains hand activation through the existing SVG and an optional, attributed manufacturer video. It is not represented as WaveToOpen’s work. No external player request occurs before interaction. The new-opening diagram moves to the installation hero, and the Dufferin entrance reference moves to the operator detail section. This supersedes the prior homepage entrance placement while keeping 33 unique images.

The About page may state that WaveToOpen is a Grafov Group brand, as verified on the group’s public brands page. Installation evidence and testimonials require genuine owner-provided material. The enquiry form retains its five required fields, uses project-specific introductory guidance and offers an explicit retry without files when Formspree rejects upload permission.

## Selected architectural wordmark — 26 October 2026
The owner selected concept 04: architectural letterforms, charcoal Wave/Open and burgundy To with a waving-hand emblem. `public/assets/logo-architectural.webp` is the optimized transparent website asset prepared from the selected image-generation concept. Header uses the colour lockup; footer uses a white lettering mask over the same geometry, retaining the coloured emblem. Keep the existing hand favicon. This replaces the earlier system-font wordmark.


## Final logo selection — rounded option 03
The owner corrected the choice to option 03, with rounded bold lettering. Use `public/assets/logo-rounded.webp` in the header and footer. This supersedes the architectural option 04 selection above. Preserve the red emblem, charcoal/red header lettering and white footer lettering.


## Confirmed final choice — architectural option 04
The owner switched back to the preceding architectural logo. Use `public/assets/logo-architectural.webp` in the header and footer. This supersedes the rounded option 03 instruction above.
