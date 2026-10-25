# Client approval and launch checklist

Prepared 25 October 2026. The website is a local development deliverable. No permission to replace the live business domain is implied. Tick an approval only after its evidence has been reviewed by the responsible business owner. An unchecked item below is pending, not a failed test.

## Current handoff status

| Item | Current state |
| --- | --- |
| Technology | Plain HTML5, CSS3 and vanilla JavaScript; no npm, Node.js or build step required to use the website |
| Source brief | No `PROJECT_BRIEF.md` was available; implementation follows the complete owner request plus original-site audit |
| Public telephone | 0401 339 966 corroborated on original site; owner reconfirmation for launch pending |
| WhatsApp | No confirmed WhatsApp number; integration inactive and setup status explained |
| Enquiry inbox / form | No authorised inbox or endpoint supplied; delivery is **not active and has not been tested** |
| Workers | Owner supplied four names/roles, later corrected Bilal to Bilal Zafar and requested distinct first-person values-focused introductions. Bilal’s supplied photo is used; Issa, Farah and Sujata use clearly labelled illustrations. Professional credentials have not been independently verified. |
| Photos | Original site images retrieved; Bilal’s photo supplied for this update. Three staff illustrations are placeholders. Record permissions and confirm reuse rights/subject consent for actual photographs. |
| NDIS registration | Original site publishes `4-JCYQ7LA`; current status/claim permission unverified |
| Policies | Privacy/accessibility/feedback content requires business review; no legal or WCAG certification asserted |
| Production URL | Blank in `js/config.js`; sitemap staged against existing business domain; no live deployment authorised |
| Search indexing | Development `noindex,follow` metadata and crawl-disallowing `robots.txt` retained until launch preparation |

## Business identity and service content

- [ ] Confirm preferred public business-name spelling/punctuation and the official logo.
- [ ] Review [EXISTING_WEBSITE_AUDIT.md](EXISTING_WEBSITE_AUDIT.md) and [CONTENT_MIGRATION_MAP.md](CONTENT_MIGRATION_MAP.md); approve polished homepage/About/service copy.
- [ ] Supply/reconcile any missing `PROJECT_BRIEF.md` or confirm the full build prompt is the governing brief.
- [ ] Confirm all six service descriptions accurately reflect current operations. In particular, confirm personal care tasks, outdoor maintenance and accessible transport arrangements.
- [ ] Confirm current service areas. Sydney, NSW is owner-supplied; no particular suburb coverage is currently asserted.
- [ ] Provide a public office address/hours only if accurate and approved for publication. Leaving these blank is acceptable.
- [ ] Verify current NDIS registration status, identifier and permissible wording/badge usage before adding any registration claim.
- [ ] Confirm no unsupported claims about funding, plan eligibility, qualifications, outcomes, waiting times, availability or bookings appear in the approved version.
- [ ] Review original agency-credit obligations before finalising footer attribution.

## Phone, WhatsApp and enquiry delivery

- [ ] Reconfirm 0401 339 966 is the correct public business number. Update `phoneDisplay`/`phoneE164` if needed and set `phoneConfirmedForLaunch` after approval.
- [ ] Test a Call Now link on a real phone and confirm it offers the intended number. A browser link check alone does not prove the number reaches the business.
- [ ] Confirm a business-managed WhatsApp number explicitly. Do not assume the publicly listed telephone is WhatsApp-enabled.
- [ ] Enter the confirmed international digits in `whatsappNumber`, set `whatsappConfirmed: true`, and test the recipient plus prefilled message on desktop and mobile.
- [ ] Nominate the authorised enquiry inbox and person responsible for receiving/monitoring messages. Do not place email passwords or private API keys in frontend files.
- [ ] Create/verify a business-controlled Formspree form or approved equivalent, confirm its recipient inbox, and put its **public** form endpoint into `formEndpoint`.
- [ ] Approve the external provider's privacy/data-handling arrangements, access permissions, retention, spam filtering and any CAPTCHA settings.
- [ ] Confirm the Contact and Referral form fields are appropriate and avoid unnecessary sensitive information. Approve privacy acknowledgement and referral authority/consent wording.
- [ ] Send an authorised, non-sensitive test from a real static HTTPS preview. Check the provider dashboard **and** the authorised inbox/spam folder. Record time, recipient and result.
- [ ] Test invalid required fields, email/phone validation, privacy acknowledgement, unavailable network/provider errors and provider rejection. Confirm errors are understandable and keyboard/screen-reader accessible.
- [ ] Confirm successful submission feedback is shown only when the provider accepts a request. Provider acceptance is distinct from confirmed inbox delivery.
- [ ] Repeat a real test after final deployment, including referral enquiries and worker/service preselection. Delivery remains unverified until this is done.

## Four staff profiles and images

- [x] Owner supplied and authorised the four profile names/roles: Issa Tamerji — Enrolled Nurse and Director; Farah — Registered Nurse; Sujata — Registered Nurse; Bilal Zafar — Enrolled Nurse (25 October 2026; Bilal’s surname added in the later photo update).
- [x] User supplied Bilal Zafar’s photograph and requested three labelled illustrated placeholders plus different values-focused introductions for all four profiles. This does not establish independent credential verification.
- [ ] Verify each professional credential with the business and staff member before public launch. Website authorisation is not independent credential verification.
- [ ] Supply any further biography, relevant experience, qualifications, support categories, languages or interests only when accurate and approved. Empty sections may remain omitted.
- [ ] Obtain and record permission and reuse rights for each genuine staff photograph before replacing its labelled abstract placeholder.
- [x] Add the four genuine owner-supplied records to `js/workers.js` with stable IDs and `publicationStatus: "approved"`; this controls website visibility only. Keep `enableDevelopmentProfiles: false`.
- [ ] Keep `photoIsPlaceholder: true` for the three illustrations. Bilal’s supplied photo is false. When replacing an illustration, update the photo path, alternative text, placeholder label/flag and static homepage/team fallback cards together.
- [ ] Review each current landscape card, role filter, carousel, profile URL and “Enquire About Support” pathway. Confirm a worker enquiry is described as an enquiry rather than a booking. See the dated staff-update verification record.
- [ ] Confirm reuse licences and participant/subject consent for **all** migrated images. Public availability on the old site is not proof of reuse permission.
- [ ] Replace any image without confirmed rights/consent. Review alt text for accuracy and avoid inferring medical conditions, names or staff relationships from appearance.
- [ ] Supply an official higher-resolution/vector logo if a larger use is needed; preserve colours/proportions and do not recolour it.

## Privacy, feedback and accessibility review

- [ ] Approve the privacy page against the business's real practices, including actual form provider, data recipient, purposes, retention, access/correction/deletion enquiries and any overseas processing.
- [ ] Provide an approved privacy contact and policy review owner/date where appropriate. Do not publish fabricated legal approval or compliance statements.
- [ ] Approve the business's internal feedback/complaints contact, responsible person, communication options, procedure and any response timeframes before publishing them.
- [ ] Recheck the official NDIS Commission links/phone before launch; distinguish that independent pathway from the business's own procedure.
- [ ] Complete practical keyboard and screen-reader review, including mobile menu, headings/landmarks, FAQ accordions, carousel controls, worker profiles, forms and feedback.
- [ ] Review focus visibility, colour contrast, readable text, 200%/400% zoom and reflow, touch targets, reduced-motion behaviour and safe-area/sticky-control spacing.
- [ ] Review the accessibility statement against actual testing. WCAG 2.2 AA remains a target until a suitable assessment supports any stronger claim.

## Final verification record

The implementation/testing handoff should state what was actually checked. Do not tick these merely because the relevant code exists.

- [ ] Review the delivered test evidence and unresolved limits.
- [ ] Open `index.html` directly using `file://`; test root-page and nested service-page navigation, images and local JavaScript without a server.
- [ ] Verify all six services, all public pages, internal links and relative asset paths under a GitHub Pages repository subdirectory.
- [ ] Test widths 320, 375, 390, 430, 768, 1024 and 1440 px; inspect for horizontal overflow, clipping and sticky-bar overlap.
- [ ] Test on real smartphone hardware where available, with touch/swipe, orientation change and WhatsApp/call controls.
- [ ] Test supported desktop browsers and at least one screen reader. Record browser/device/assistive-technology versions and any limitations.
- [ ] Confirm every page has an appropriate unique title/description, one clear main heading, meaningful image alternatives, social metadata and relevant internal links.
- [ ] Confirm no ecommerce, payment, cart, real-looking fictional employee or invented business detail has been introduced.

## Hosting and indexing — only after approval

- [ ] Choose the final preview/production URL. `sitemap.xml` currently uses `https://prosperandcare.com.au/` as a **staged proposed base**, not deployment authority.
- [ ] Set `websiteUrl` to the actual final base, including any repository subdirectory; review canonical/social URLs and verified structured data emitted by the website.
- [ ] Update every sitemap location to the chosen base. Do not include development worker examples or unapproved content.
- [ ] Set `publicationMode: "production"` only after the relevant approvals, and review indexing metadata. Until launch, keep `noindex,follow` and the development robots restrictions.
- [ ] At approved public launch, replace crawl-disallowing `robots.txt` with the intended public rules and a correct sitemap URL. Remember robots directives are not private access control.
- [ ] Exclude `docs/source/` and development-only files from the public upload. Archived original HTML contains the old site's external scripts.
- [ ] Publish the contents of `paces-website/` at the GitHub repository root (or a deliberately configured Pages source); verify the resulting HTTPS URL and all contact paths.
- [ ] Obtain **explicit separate authorisation** before changing the existing live business domain or its DNS. This build has not replaced it.
- [ ] If replacing the old domain later, plan redirects for `/about-us/`, `/contact-us/` and other old URLs so visitors do not reach missing pages. Verify custom-domain DNS/HTTPS before switching traffic.
- [ ] Keep a copy of the approved files, configuration and final test evidence with the business.

Business reviewer: ____________________  Date: ____________________

Approved publication URL: _________________________________________

Remaining exceptions and responsible owner: ________________________
