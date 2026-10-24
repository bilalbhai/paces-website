# P.A.C.E.S. website

For the beginner Git workflow and publishing this entire repository, start with the [repository README](../README.md). The manual upload instructions below are an alternative way to upload only the website folder's contents.

A complete, editable website for Prosper and Care Endeavour Services, built with **plain HTML, CSS and vanilla JavaScript**. There are no packages, frameworks, build commands, accounts, payments or shopping features in the website.

## Open it on your computer

1. Open the `paces-website` folder in File Explorer.
2. Double-click **`index.html`**. Choose Chrome, Edge, Firefox or Safari if asked.
3. Use the website’s links to explore all pages. Keep the folder structure intact.

No installation or development server is required. The pages, styles, local images, navigation, FAQs, directory and profiles use relative paths and classic scripts compatible with `file://`. Internet access is needed for online fonts, external links and any future form delivery. System fonts work offline.

Open `team.html` to see the four staff profiles supplied by the business: **Issa Tamerji — Enrolled Nurse and Director; Farah — Registered Nurse; Sujata — Registered Nurse; Bilal — Enrolled Nurse**. No special preview URL is required. The homepage carousel, directory, individual profile links and worker-preselected enquiries use these records.

Photographs have not been supplied. Each profile uses an abstract illustration explicitly labelled as a photo placeholder, rather than a staff portrait. Only the supplied names and roles are presented; no additional qualifications, experience or service assignments have been invented. The `approved` publication status means authorised for this website, not independently credential-verified. See `docs/STAFF_PROFILE_UPDATE.md`.

## Current activation status

| Item | Status |
| --- | --- |
| Telephone | `0401 339 966`, corroborated on the existing website. Links use `tel:+61401339966`. Reconfirm before public launch. |
| WhatsApp | **Not confirmed.** Buttons lead to a clear setup notice on the contact page. No WhatsApp conversation is opened until a number is confirmed. |
| Enquiry/referral delivery | **Inactive.** Form validation works, but nothing is sent without an authorised endpoint. |
| Four staff profiles | Names and roles supplied and authorised by the business on 25 October 2026. Profiles are visible normally; photo placeholders remain until approved portraits are supplied. Additional biography details are optional and not invented. |
| Policies | Privacy and accessibility notices are explicitly marked drafts for review. No full legal or WCAG compliance claim is made. |
| Registration | The original website publishes `4-JCYQ7LA`. It is preserved in the audit; current registration and badge rights need verification before making an accreditation claim. |
| Search indexing | Development `noindex` metadata and `robots.txt` exclusion are enabled. The sitemap is staged for the existing domain and must be updated for the final host. |
| Existing brief | `PROJECT_BRIEF.md` was not present. The detailed user request and audited original website were used. |

## Files to edit

| File | Purpose |
| --- | --- |
| `index.html` and other `.html` files | Static page text, headings, image descriptions and SEO metadata |
| `css/style.css` | Colours, typography, spacing, responsive layouts and focus states |
| `js/config.js` | All public contact settings and publication status |
| `js/services.js` | Editable service summaries used by configuration/form matching |
| `js/workers.js` | Editable worker records and approval status |
| `js/main.js` | Navigation, contact links, forms, metadata, directory and carousel |
| `images/` | Local original business assets and clearly labelled staff-photo placeholder illustrations |
| `docs/` | Audit, complete source archive, migration map, design system, checks and approvals |

Open these in a text editor such as Notepad. Save with the original extension and UTF-8 encoding, then refresh the browser. Keep a backup before editing. If a browser still shows an older version, use Ctrl+F5.

## Change the public telephone

Edit `js/config.js`:

```javascript
phoneDisplay: '0401 339 966',
phoneE164: '+61401339966',
```

Use international format without spaces for `phoneE164`. All normal website call links and marked number labels read this configuration. HTML includes the current public number as a fallback if JavaScript is unavailable. When changing the number, also search the HTML files for `0401 339 966` and `tel:+61401339966` and update the fallback text/links, including `<noscript>` copy. Change `phoneConfirmedForLaunch` only after business confirmation; it is a checklist marker, not an accreditation claim.

## Activate WhatsApp

First confirm that the business authorises a specific WhatsApp number. A public telephone listing does not establish that it supports WhatsApp. Then edit:

```javascript
whatsappNumber: 'YOUR_CONFIRMED_INTERNATIONAL_DIGITS',
whatsappConfirmed: true,
```

Use digits only, including country code; no `+`, spaces or leading Australian `0`. Only if the existing mobile is explicitly confirmed would the value be `61401339966`. The website creates `https://wa.me/NUMBER?text=...` and URL-encodes `whatsappMessage`. Test the recipient on desktop and a real phone before launch. The desktop floating control and mobile sticky bar share this setting; the floating control is hidden on phones.

## Configure online enquiries with Formspree

1. Have the business create or select its [Formspree account](https://formspree.io/) and create a form.
2. Add and verify the **authorised business inbox** in the Formspree dashboard. Configure recipient access, spam protection and any domain restrictions. Review its privacy, retention and overseas handling before activating collection.
3. Copy the public form endpoint, which looks like `https://formspree.io/f/xxxxxxxx`. It is safe for frontend use. **Never add inbox passwords, dashboard tokens or private keys.**
4. Paste it into `formEndpoint` in `js/config.js`. Contact and referral forms share this endpoint and include an `enquiryType` field and subject. A separate `feedbackFormEndpoint` setting is reserved for an approved future feedback form; the current feedback page uses the published telephone and official Commission link.
5. Refresh `contact.html`. The button will become **Send enquiry**. JavaScript sets the real `action` and `method="post"`, validates fields, then POSTs to the provider. A supported JSON acknowledgement is required before showing acceptance. Provider errors, timeouts and unexpected responses preserve the visitor’s entries and suggest calling.
6. Test on the actual HTTPS host. Make a non-sensitive test enquiry with the business’s consent, verify it in the Formspree dashboard **and the authorised inbox**, and check spam/junk folders. A browser success message is not proof of inbox delivery.
7. Test invalid entries, privacy acknowledgement, referral permission, worker/service selection, a disconnected network and provider failure. Confirm spam controls in the dashboard. The hidden `_gotcha` honeypot must stay empty for people.

**Without an endpoint:** the button says **Check enquiry details**. It can validate fields and explain that nothing has been sent. This is deliberate; there is no fake success alert or `mailto:` submission.

**Without JavaScript:** the initial HTML submit button is disabled to prevent sending personal data to the wrong URL. For optional native HTML-only delivery, set the same approved `action="https://formspree.io/f/xxxxxxxx"` on both forms, remove the button’s `disabled` attribute, give it a Send enquiry label, and replace the inactive `<noscript>` message. Native browser validation and Formspree’s hosted result page then handle the POST. Keep configuration and both HTML actions in sync and retest. Do not enable this before the endpoint and privacy notice are approved.

The form does not store enquiry drafts in browser storage. Refreshing or leaving the page can lose unsent text. Local `file://` delivery can be restricted by browser/provider origin rules; final delivery testing must happen on the confirmed host. No real delivery has been tested in this build because no authorised endpoint or inbox was supplied.

## Add an approved support worker

The four current records contain the names and roles supplied and authorised by the business on 25 October 2026. Their stable IDs are `issa-tamerji`, `farah`, `sujata` and `bilal`. Edit these records to add further supplied details, or add a new record for another genuine team member. Do not invent missing information. `publicationStatus: 'approved'` controls website visibility; it does not certify professional credentials.

1. Obtain the staff member’s and business’s approval for each published detail and photograph.
2. In `js/workers.js`, add a genuine object using the same structure:

```javascript
{
  id: 'unique-approved-id',
  name: 'APPROVED NAME',
  role: 'APPROVED ROLE',
  photo: 'images/workers/approved-photo.jpg',
  photoIsPlaceholder: false,
  biography: 'APPROVED BIOGRAPHY',
  qualifications: [],
  experience: [],
  supportCategories: [],
  languages: [],
  interests: [],
  publicationStatus: 'approved'
}
```

3. Replace every capitalised example value before approval. Empty arrays are fine; empty sections are omitted. Use exact service titles for support categories where appropriate. Never invent qualifications, checks, languages or availability.
4. Make the ID unique and stable. That record will appear in the public directory and carousel and at `worker.html?id=unique-approved-id`.
5. Test the profile and **Enquire About Support** link. The contact form should select the same worker. This is an enquiry, not a booking.
6. Keep the static fallback cards in `team.html` and `index.html` in sync with worker names, roles, biographies, photos and links. These provide readable information if JavaScript is unavailable. Change the four-staff statement if the team changes. The directory can filter by the supplied roles; do not assign service categories without confirmation.

## Change worker photographs

Save an approved, sensibly compressed JPG/WebP photograph in `images/workers/`. Update that worker’s `photo` path in `js/workers.js` and set `photoIsPlaceholder: false` only after a genuine approved portrait replaces the illustration. Keep `photoIsPlaceholder: true` while an abstract SVG is used; that flag provides truthful alternative text and a visible placeholder label. Update matching static fallback cards in `team.html` and `index.html` too. Do not begin the path with `/`; use `images/workers/name.jpg`. Check the desktop landscape card and mobile top-photo crop. The image is displayed with `object-fit: cover`; adjust `object-position` in CSS if needed. The existing SVGs are abstract illustrations, not staff portraits.

## Edit services and other text

The full service descriptions are ordinary text in the six files inside `services/`. Change them directly. Update matching short descriptions in `index.html`, `services.html`, related-service cards and `js/services.js` to keep information consistent. JavaScript is not required to read the full descriptions. The service data file is a useful summary/ID list rather than a server dependency.

For a root page use paths such as `./images/...` and `./contact.html`. For a service page one level down, use `../images/...` and `../contact.html`. Keep service IDs unchanged unless you also update the matching HTML filename, links, form options and sitemap. Titles and descriptions live in each HTML `<head>`.

## Publish a review on GitHub Pages

Nothing has been deployed by this build. Do not point the live business domain at the redesign without explicit owner authorisation. GitHub Pages reviews are generally public; `noindex` and `robots.txt` do **not** protect confidential data.

1. Sign in to GitHub and create a repository suitable for GitHub Pages. Do not upload private staff records or enquiry data.
2. Choose **Add file → Upload files**. Upload the **contents** of `paces-website` to the repository root: all root HTML files, `services/`, `css/`, `js/`, `images/`, `robots.txt`, `sitemap.xml` and `.nojekyll`. `index.html` must be at the repository root.
3. **Keep `docs/` and this README local for the public upload.** In particular, do not publish `docs/source/`: it is the audit archive and includes original HTML with external scripts. Keep the full local folder/ZIP as your records.
4. Commit the files. Open **Settings → Pages**. Under **Build and deployment**, select **Deploy from a branch**, choose the branch (usually `main`), select **/(root)** and Save. GitHub’s branch workflow accepts root or `/docs`, not an arbitrary `paces-website` source folder.
5. Wait for the Pages deployment to complete. Open the URL GitHub provides, usually `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`.
6. Test navigation, every service page, the four staff profiles and their links, mobile controls, forms and images at that actual subdirectory URL. Relative links support this setup. Complete the approvals before treating it as production.

See [GitHub’s publishing-source instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Production SEO and launch settings

After the client checklist is approved:

- Set `publicationMode: 'production'` and `websiteUrl` to the confirmed HTTPS base URL, including a repository subdirectory if used. Keep `enableDevelopmentProfiles: false`.
- The script then adds canonical URLs, absolute Open Graph URLs/images and an `Organization` JSON-LD record using only configured business facts. It hides all development worker records, including when someone adds `?preview=team`.
- For reliable social scrapers and search engines that do not run JavaScript, also put the correct canonical link, absolute `og:url`, absolute `og:image` and `index,follow` robots value **directly into each HTML head**. Do not use an unconfirmed domain.
- `sitemap.xml` currently uses the existing business domain as a **staged target**. Replace every `<loc>` with the actual approved host/base path. It excludes development profiles. Add approved profile URLs only if desired and supported by your indexing strategy.
- Replace development `robots.txt` with the appropriate production version, for example:

```text
User-agent: *
Allow: /
Disallow: /docs/
Sitemap: https://YOUR-CONFIRMED-HOST/sitemap.xml
```

- Retest before launch. Remove or approve draft policy notices only after actual review. Check all claim/consent/registration requirements in `docs/CLIENT_APPROVAL_CHECKLIST.md`.

## Connect a custom domain later

Only after explicit authorisation to use the domain:

1. In the repository’s **Settings → Pages → Custom domain**, enter the approved domain.
2. Follow [GitHub’s official custom-domain instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) for your domain type and DNS provider. Use the current official DNS values rather than copied guesses. Preserve the business’s email records.
3. Verify domain ownership where available, wait for DNS/TLS and enable HTTPS once GitHub allows it.
4. Update `websiteUrl`, static canonical/Open Graph URLs, sitemap locations and the robots sitemap URL for the new domain. Retest form origin restrictions and the enquiry inbox.

No `CNAME` file or DNS change is included because the final hosting/domain transition has not been authorised.

## Replace development content safely

Use `docs/CLIENT_APPROVAL_CHECKLIST.md` as the handover list. Confirm contact destinations, original image licences and subject consent, current registration, service suitability, policy wording and staff details. Replace abstract staff images only with approved photos. Do not turn the original site’s empty Testimonials page into fictional reviews. Sydney is supplied by the business; specific suburbs, office addresses and opening hours must be confirmed before adding them.

## Testing and limits

See `docs/STAFF_PROFILE_UPDATE.md` for the latest staff change and its verification record. `docs/TEST_REPORT.md` and `docs/STATIC_REVIEW.md` preserve the initial build checks; their earlier staff-placeholder findings are superseded by this update. Browser checks used a temporary Python static server solely for QA; the delivered website needs no Python or server. Direct `file://` navigation was blocked by the browser automation tool, so double-click preview is supported by the static architecture but still needs a manual check on your computer. Real GitHub Pages deployment, live WhatsApp recipient, real touch-device gestures, screen reader testing and actual form delivery remain untested.
