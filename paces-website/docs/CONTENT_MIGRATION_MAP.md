# Content migration map

Prepared 25 October 2026. This checklist maps the substantive original website content to the redesigned files. “Migrated” means present in the local deliverable; it does not mean approved for public launch. See [EXISTING_WEBSITE_AUDIT.md](EXISTING_WEBSITE_AUDIT.md) and [CLIENT_APPROVAL_CHECKLIST.md](CLIENT_APPROVAL_CHECKLIST.md).

No `PROJECT_BRIEF.md` was available in the inspected project. The build follows the owner's complete website request and the audited original website. Any additional brief supplied later needs a content review.

## Migrated original content

| Status | Original source/section | Redesigned destination | Meaning retained |
| --- | --- | --- | --- |
| [x] Migrated | Shared company logo | `images/logo/PACES-Logo.jpg`; shared header/footer | Official unchanged orange/sage logo, original proportions |
| [x] Migrated | Existing brand styling | `css/style.css` | Original CSS orange `#F6931D` and sage `#9ACCAE`, supported by readable complementary tones |
| [x] Migrated | Home hero: empowerment, participant needs first, contact invitation | `index.html` hero and contact calls to action | Participant-led support and an invitation to talk; owner's new headline “Your Goals. Your Choices. Your Pace.” |
| [x] Migrated | Home welcome and full business name | `index.html` welcome; `about.html`; shared footer; `js/config.js` | Prosper and Care Endeavour Services (P.A.C.E.S.), celebrating individual abilities |
| [x] Migrated | Home mission and tailored approach | `index.html`; `about.html` mission/introduction | Participant needs guide decisions; inclusivity and empowerment; skills, strengths, aspirations and personal/professional growth |
| [x] Migrated | Home six service summaries | `index.html`; `services.html`; `js/services.js` | All six services, with relative links to detailed pages |
| [x] Migrated | Services: Community Participation | `services/community-participation.html`; overview/home cards | Volunteering, clubs/groups, events, community resources; connection, belonging, communication, teamwork, problem-solving, leadership, growth and well-being goals |
| [x] Migrated | Services: Home Care | `services/home-care.html`; overview/home cards | Showering, dressing, mealtime management, chores, outdoor maintenance, hobbies, outings and peer connection; choice, dignity, flexible occasional/ongoing support |
| [x] Migrated | Services: Transportation | `services/transportation.html`; overview/home cards | Individual access needs, wheelchair-accessible vehicle requirements, specialised travel assistance, safe/comfortable/reliable travel; arrangements confirmed with team |
| [x] Migrated | Services: Day Programs | `services/day-programs.html`; overview/home cards | Skills/interests/capabilities, creative arts, outdoor experiences, personal growth and meaningful activities |
| [x] Migrated | Services: Activities and Skill Building | `services/skill-building.html`; overview/home cards | Arts, sports, outings, cooking, communication, catching trains/public transport, responsible money management and everyday independence |
| [x] Migrated | Services: Weekend Program | `services/weekend-programs.html`; overview/home cards | Same personalised approach as weekdays; hobbies, outdoor activities, relaxing, learning and meaningful experiences |
| [x] Migrated | Home five-step support process | `how-it-works.html`; `index.html` process section | Personalised Assessment; Collaborative Planning; Flexible Scheduling; Customised Programs; Continuous Review and Adjustment |
| [x] Migrated | About vision | `about.html` vision/values | Independence, inclusion, growth, well-being, empowerment; dignity/purpose; welcoming accessible communities; belonging; self-advocacy and advocacy for others |
| [x] Migrated | About personal/professional development and meaningful contribution | `about.html` introduction, vision and values | Individual aspirations, skills, health/happiness and participation, without guaranteed outcomes |
| [x] Migrated | Header/contact telephone | `js/config.js`; phone links throughout all pages | Publicly listed 0401 339 966; international call target `tel:+61401339966`; owner reconfirmation pending |
| [x] Migrated with replacement integration | Contact Us online form | `contact.html`; `js/main.js`; `js/config.js` | Name, phone, email and message, plus owner-requested enquiry context; static-form integration replaces WordPress backend; delivery remains inactive until configured |
| [x] Migrated | Original home/about imagery | `images/general/`; `index.html`; `about.html` | Existing artwork and human-centred imagery, without invented subject identities |
| [x] Migrated | Original six service images | `images/services/`; service cards/detail pages | Original service illustrations; descriptive alternatives added; rights/consent approval pending |
| [x] Migrated and expanded | Shared navigation/contact calls to action | Header, footer, service cross-links, mobile contact bar | Home, Services, About and Contact remain available; requested new pages added |
| [x] Preserved in evidence | Full original paragraphs, headings, examples and form labels | `docs/source/original-copy.md`; `docs/source/*.txt` | Original wording retained for traceability; redesigned pages edit spelling, repetition and readability |

Original copy is rewritten rather than duplicated verbatim. Broad claims about health outcomes are expressed as potential goals, and enquiries do not imply bookings, funding guarantees or confirmed availability. “Weekend Program” becomes “Weekend Programs”; the source typo “P.A.C.E.C.S” is corrected; the final process step retains regular review/adaptation under a clearer heading.

## Original items intentionally withheld from the public redesign

| Status | Source item | Treatment and reason |
| --- | --- | --- |
| [x] Audited; approval pending | Published NDIS reg. no. `4-JCYQ7LA` | Preserved in audit. Current registration status is not independently verified; no unqualified new registration badge/claim should be published until checked. |
| [x] Audited; approval pending | “Registered NDIS Provider” image | Archived `images/general/ndis-registered.jpg`; no new accreditation assertion inferred from the old image. |
| [x] Audited; no usable content | `/testimonials/` | Empty page. No fabricated reviews or testimonial section added. |
| [x] Audited; omitted | `/hello-world/` and `/category/uncategorised/` | Default WordPress welcome content, unrelated to the business. |
| [x] Audited; preserved in audit | “a project by Oz Web Design Sydney” footer credit | Recorded as original-site attribution. Not presented as authorship of this redesign; owner can review any attribution obligation. |
| [x] Audited; no accounts verified | Facebook, X and LinkedIn share controls | Not business account URLs. No invented social profile links added. |
| [x] Audited; replaced | Original WordPress/Elementor/Contact Form 7 scripts and theme | Excluded from the new site's runtime. Local frontend uses plain HTML/CSS/JavaScript. Archived source is development evidence only. |

## New owner-requested content and interactions

These features were requested in the build prompt; they are not claims discovered on the old website.

| Destination | Implementation/content status | Approval boundary |
| --- | --- | --- |
| `team.html`, `worker.html`, `js/workers.js`; homepage carousel | Four visible owner-supplied profiles, landscape cards, role filter, individual pages and worker enquiry links | On 25 October 2026 the owner supplied and authorised Issa Tamerji — Enrolled Nurse and Director; Farah — Registered Nurse; Sujata — Registered Nurse; Bilal — Enrolled Nurse. Only these facts are stated. Abstract illustrations are labelled photo placeholders; further biography/photo details remain pending. Roles have not been independently credential-verified. |
| `contact.html`, all-page contact controls | Call target active; WhatsApp integration ready; enquiry form integration ready | WhatsApp is unconfirmed and routes to the setup explanation. No authorised inbox/form endpoint is configured; no delivery claim. |
| `referral.html` | Privacy-conscious referral enquiry | Owner must approve recipient/provider settings and consent wording; no medical/NDIS-document upload requested. |
| `faq.html` and home FAQs | Answers based on audited service/process/contact information | No invented company-specific eligibility, availability, fees, waiting times or funding promises. |
| `feedback.html` | Public business phone and official NDIS Commission pathway | Internal complaints contact/procedure/timeframes require business approval. |
| `privacy.html` | Draft information about the implemented website and form setup | Requires business review of actual practices, provider, recipients, storage and policy owner before launch. |
| `accessibility.html` | Accessibility intentions, implemented features and contact route | WCAG 2.2 AA is a target; no certification or blanket compliance claim. Further assistive-technology review is pending. |
| `js/config.js` | Central public settings, confirmed/pending switches | No private credentials; Sydney, NSW derives from the owner's request, not inferred suburb coverage. |
| Page metadata, `sitemap.xml`, `robots.txt` | Unique titles/descriptions and social metadata; staged sitemap; development indexing controls | `websiteUrl` is blank. Sitemap uses the existing domain as a clearly commented proposed base; final production URL must be confirmed. Development pages use `noindex,follow`; robots currently disallows crawling. |

## Final content review

- [x] All six published services have dedicated readable HTML pages.
- [x] Mission, vision, values and all five process steps have mapped destinations.
- [x] Published phone and all source contact details are accounted for, including deliberately unverified registration information.
- [x] Missing email, WhatsApp, office address, hours, staff photographs/additional biographies and service-area specifics are identified; none are invented. Staff names and roles were subsequently supplied by the owner and are documented in [STAFF_PROFILE_UPDATE.md](STAFF_PROFILE_UPDATE.md).
- [ ] Business approves final wording and confirms current support scope/availability.
- [ ] Business resolves contact integration, staff consent, image rights, policies and production URL items in the launch checklist.
- [ ] Final testing evidence and any remaining verification limits are reviewed with the delivered testing report; migration completion alone is not proof of functional testing or live form delivery.

Keep `docs/source/` out of public hosting. Archived original HTML contains the source site's external scripts and is not part of the redesigned visitor experience.
