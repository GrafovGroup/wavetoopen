# WaveToOpen.ca

A standalone 46-page commercial touchless-door website with direct Formspree enquiry delivery and a Node.js preview server. No runtime npm dependencies, framework hydration, database or third-party tracking scripts.

## Run

Requires Node.js 22 or later:

```sh
npm run build
npm start
```

Default preview: http://127.0.0.1:4317. In this workspace the bundled executable is `/Users/grafov/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node`; use it directly for `build.mjs`, `server.mjs` or `--test tests/*.test.mjs` if Node is not in PATH.

## Source layout

- `src/content.mjs`: original service, sector, FAQ, market and reference content.
- `build.mjs`: static page templates, metadata, structured data and sitemap.
- `public/`: CSS, progressive-enhancement JavaScript and self-hosted assets.
- `src/quote.mjs`: validation and delivery integration, using standard Request/Response.
- `server.mjs`: Node HTTP adapter, routes, real 404s, security headers and rate limit.
- `tests/quote.test.mjs`: backend validation and failure/success tests.
- `DESIGN.md`: visual and content decisions.
- `dist/`: generated website, rebuilt from source.

## Lead delivery

The website form posts directly to `https://formspree.io/f/xrpgdwzz` using native JavaScript `fetch` and multipart `FormData`. The same HTML action works without JavaScript. No API key, SDK or webhook environment variable is needed. Fields, optional attachments, consent, `_subject` and the Formspree `_gotcha` honeypot are included. The form requires only project type, city, name, email and consent. Phone and a short note remain visible but optional. Equipment, company, timing and uploads are inside a native optional-details disclosure; washroom and portfolio fields appear only for relevant requests and are disabled otherwise. Specific service and request intent are preserved from incoming links. Visitors can also explicitly choose a quote, assessment or service request under optional details; changing equipment details does not overwrite that choice.

Success requires an HTTP success response with `ok: true`; errors and timeouts preserve the inputs and files. The browser keeps the local enquiry-copy download and emits the conversion event only after acceptance. Acceptance does not verify inbox receipt. On September 12, 2026, one owner-authorized production test with a 102 KB JPEG was rejected with HTTP 400: `File Uploads Not Permitted`. Inbox and attachment receipt remain unverified.

Uploads retain the site's limit of 3 JPEG, PNG or PDF files, 2 MiB each. Formspree requires an upload-capable paid plan. Verify the form's upload/storage settings and recipient in the Formspree dashboard. Formspree handles storage, spam filtering and service limits; the old Node API's signature checks and rate limit do not apply to direct submissions. Configure provider-side validation as required.

When Formspree explicitly rejects upload permission, the form offers an explicit **Send without attachments** retry. It retains the selected files locally and adds a note to the enquiry explaining that attachments were omitted. Normal submission still includes the selected files; failed uploads never silently discard them.

Security headers must allow `https://formspree.io` in both `connect-src` and `form-action`; `server.mjs` includes these permissions. Keep them when transferring to another host. The privacy page reflects direct Formspree processing. The legacy `/api/quote` JSON webhook adapter remains available for a future custom integration but is not used by the website form; its environment settings are optional.

## Deployment and indexing

This site uses OpenAI Sites with static output from `dist/`. The project manifest is `.openai/hosting.json`; the selected not-found behavior serves the existing `404.html`. The Node server is only needed for local development. Formspree receives enquiries directly from the browser.

The site is public at `https://wavetoopen.ca`, with `www.wavetoopen.ca` connected too. Production builds default to that canonical origin and allow indexing. Set `SITE_INDEXABLE=false` for a private preview build, or override `SITE_ORIGIN` when necessary; use the same origin during tests. The service-area directory and 14 distinct city pages are indexable and included in the 46-URL sitemap.

Static security headers are in `public/_headers`, including Formspree access for AJAX and native submissions. The custom-domain DNS and HTTPS certificates are active; existing email records were preserved. Logo exploration files and local reports are excluded from production builds.

## Tests

Run `npm run test:journey` to check the four homepage enquiry paths, minimal submission, conditional-field payloads, attachment deep links, keyboard accessibility and mobile form placement. This uses intercepted submissions only.

Run `npm run test:formspree` with the local preview running to check the current integration using intercepted requests. It covers multipart fields/uploads, success, validation, network and malformed responses, and HTML fallback without sending external enquiries.

```sh
npm test
```

Browser audit scripts and raw evidence are supplied in the output archive. They used local Chromium and axe-core 4.10.3 with a test-only CSP bypass for injecting the auditor; the site's CSP remains intact. Routine browser tests use local handlers/mocks. The single authorized live attachment test is recorded under Lead delivery above.

## Rights and attribution

See `/image-credits/` and `ASSETS.md`. Wikimedia image derivatives and the social composite retain CC BY-SA 4.0. Their authors do not endorse this business. Business identity, service copy and diagrams are original to this project. Reference documentation does not establish manufacturer authorization, a supplier network or local coverage.

### Re-run browser audits

Optional development dependencies are pinned in `package.json`. Install them with `npm install`, install Chromium with `npx playwright install chromium`, start the local server in a separate terminal, then run `npm run test:browser` and `npm run test:audit`. These scripts create screenshots and JSON evidence in `outputs/`. The backend suite (`npm test`) needs no packages. The browser suite mocks the successful delivery response locally; it does not send real messages. The browser suite intercepts the Formspree endpoint before submitting.

## Latest business discussion update

National Accounts is now a first-level navigation destination. The RFQ asks project type and building type first, includes address, push-button/lock status, washroom and location counts, a date and portfolio scope, and ends with contact details. The optional legacy webhook adapter’s `qualification.queue` classifies enquiries as `national-accounts`, `service`, `washrooms` or `projects`; it does not dispatch leads to third-party vendors. `qualification.language` is `en-CA`. No French page or bilingual service availability is claimed; a complete localized content set is needed before adding French URLs/hreflang.

The browser emits `wavetoopen:conversion` CustomEvents for `phone_click` and confirmed `quote_accepted`, containing categorical project/request information only. No analytics destination is installed and no event is sent externally. An approved analytics provider can listen to these hooks later.

CommercialDoors.ca was inspected and is linked as an optional destination for broader door work. No forms, credentials, pricing or business claims were copied, and no leads are automatically sent there.


## Content repetition check

After building, run `python3 tests/repetition.py`. It checks main-content image URLs and hashes, plus exact repeated prose blocks/sentences over 60 characters. Navigation, logo, short service names and form labels are intentionally shared. Editorial diagrams are original SVGs under `public/assets/`, described by `src/unique-visuals.mjs`.

## September 12 elevation pass

- `src/service-layout.mjs` presents each service with an overview, concise facts, three labelled technical disclosures, the original FAQ and visual note, and service-specific enquiry actions. All existing authored details and routes are preserved.
- `src/hero-demo.mjs` introduces an attributed ASSA ABLOY manufacturer video. The Vimeo iframe is created only after an explicit click, starts at 2:49, and enables `dnt=1`. The original activation diagram is the local poster. The former home entrance photograph now appears on the operator service page; all 33 main-content images remain unique.
- Quote headings and guidance follow the selected project type. Text, labels and technical diagrams have more readable spacing and sizing.
- The About page identifies the verified Grafov Group brand relationship, supported by https://grafovgroup.com/brands. No manufacturer partnership, installation portfolio, review or credential was inferred from that relationship.
- Run `npm run test:elevation` for service content retention, keyboard disclosures, deep links, video deferral and responsive layouts; run `npm run test:recovery` for the explicit no-attachment retry. Both use local preview and mocked requests. Set `PREVIEW_URL` to change the default local origin.

### Owner-dependent follow-up

Google Analytics was inspected in the signed-in Grafov Group account. No WaveToOpen property was found. The new-property wizard is prepared with WaveToOpen, Toronto time and CAD, but Google requires an employee-count selection before creation. No new property or external analytics tag was installed. Existing phone-click and confirmed-enquiry events remain ready for connection.

Enable Formspree file uploads for form `xrpgdwzz` and confirm the receiving inbox, then repeat the labelled attachment test with the owner’s authorization. Obtain owned installation photos/video, approved project details, authentic reviews and verified credentials before adding portfolio proof.
