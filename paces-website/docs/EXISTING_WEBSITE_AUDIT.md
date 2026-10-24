# P.A.C.E.S. existing website audit

Audit date: 25 October 2026 (Australia/Sydney). Source: [prosperandcare.com.au](https://prosperandcare.com.au/). Purpose: preserve the public business content and original assets for the owner-requested redesign. Public statements are not independent certification of current services, registration or asset rights.

## Scope and retrieval

Every business page linked from the navigation and footer was retrieved with HTTP 200, reviewed in full and archived. The robots file, WordPress sitemap index, all three child sitemaps, and public WordPress pages/posts API were also inspected. They identify five pages, one post and one category archive. The domain with and without the trailing slash returns the same home content. No other business-content pages were found through these sources.

| Public resource | Finding | Migration decision |
| --- | --- | --- |
| [Home](https://prosperandcare.com.au/) | Introduction, mission, six services, five-step support process, imagery, telephone | Migrate all meaningful content, polish wording |
| [Services](https://prosperandcare.com.au/services/) | Complete descriptions of all six services | Migrate to overview and dedicated service pages |
| [About us](https://prosperandcare.com.au/about-us/) | Vision, independence, inclusion, growth, well-being, empowerment and advocacy | Migrate to About |
| [Contact us](https://prosperandcare.com.au/contact-us/) | Business name, telephone, website, published registration identifier, online form | Migrate verified public contact data; replace WordPress form with configured static-form integration |
| [Testimonials](https://prosperandcare.com.au/testimonials/) | Empty body; heading only | Do not invent or publish testimonials |
| [Hello world!](https://prosperandcare.com.au/hello-world/) | Default WordPress welcome post, no business information | Omit |
| [Uncategorised archive](https://prosperandcare.com.au/category/uncategorised/) | Only the default Hello world post | Omit |
| [robots.txt](https://prosperandcare.com.au/robots.txt) | WordPress admin exclusion and sitemap location | Replace for static deployment |
| [Sitemap index](https://prosperandcare.com.au/wp-sitemap.xml) | Post, page and category child sitemaps | Use new static sitemap after production URL approval |
| [Page sitemap](https://prosperandcare.com.au/wp-sitemap-posts-page-1.xml) | The five pages above | All substantive pages covered |
| [Post sitemap](https://prosperandcare.com.au/wp-sitemap-posts-post-1.xml) | Hello world only | No additional business content |
| [Category sitemap](https://prosperandcare.com.au/wp-sitemap-taxonomies-category-1.xml) | Uncategorised only | No additional business content |
| [Public pages API](https://prosperandcare.com.au/wp-json/wp/v2/pages?per_page=100) | Same five published pages, full rendered page content | Archival copy preserved |
| [Public posts API](https://prosperandcare.com.au/wp-json/wp/v2/posts?per_page=100) | Same one default post | No additional business content |

`/sitemap.xml` returned the same sitemap index. `/sitemap_index.xml` returned HTTP 404. Browser search extraction could not retrieve robots/sitemap initially, but direct HTTPS retrieval succeeded; these resources were audited. No business page or selected image remained inaccessible. Authentication/login/admin functions were outside the public-content scope and were not accessed. No enquiries were sent to the original form.

## Business facts and verification boundaries

| Item | Evidence and status |
| --- | --- |
| Name | Prosper And Care Endeavour Services; abbreviation P.A.C.E.S. Logo uses “Prosper & Care Endeavour Services”. Preserve the business identity. |
| Telephone | **0401 339 966** in shared header and contact page; original `tel:0401339966`. International link: `tel:+61401339966`. Publicly corroborated; owner reconfirmation before launch remains required. |
| Website | `https://prosperandcare.com.au/`, published on contact page. Existing domain is evidence of current website, not authority to deploy this redesign to it. |
| NDIS identifier | Contact page publishes **4-JCYQ7LA** as “NDIS reg. no.”; header also displays a “Registered NDIS Provider” image. Current registration status and permitted badge usage have **not** been independently verified. Do not convert source claims into an unqualified new accreditation claim. |
| Location | Sydney, NSW, Australia supplied by the owner in this build request. The audited website does not publish an office address or specific service-area list. Do not infer suburb coverage, nationwide service or an office location. |
| Email | No public email address or `mailto:` link found in any audited page, including raw HTML. Do not guess `info@…` or an enquiry inbox. |
| WhatsApp | No WhatsApp number or direct contact link published. The public telephone must not be assumed WhatsApp-enabled. |
| Office/opening hours | No street address, office details, operating hours or appointment hours found. |
| History | No founding date, founder biography, company timeline or number of years in business published. |
| Workers | No worker names, approved portraits, qualifications, experience, languages, personal biographies or publication consents found. |
| Testimonials | None published. The Testimonials page is empty. |
| Social accounts | Footer includes generic Facebook, X/Twitter and LinkedIn **share controls**, not verified business-profile URLs. Do not treat them as company accounts. |
| Policies | No public privacy policy, accessibility statement or internal feedback/complaints procedure found in navigation, footer, sitemap or page API. New policy drafts require owner review. |
| Funding and availability | No funding category guarantees, current places, booking commitments, specific suburb availability or NDIS plan eligibility promises verified. |

## Original identity and logo inspection

The unchanged official logo was downloaded from [PACES-Logo.jpg](https://prosperandcare.com.au/wp-content/uploads/2024/03/PACES-Logo.jpg) into `images/logo/PACES-Logo.jpg`. It is a 375 × 90 JPEG (8,755 bytes) on white with orange wordmark, orange and sage human figures and a small orange business-name line. Do not stretch, recolour, remove elements or upscale beyond sensible display dimensions. Request an original vector/high-resolution asset if required later.

The original Elementor styling explicitly uses **orange `#F6931D`** and **sage `#9ACCAE`**, including `post-15.css` (header) and `post-240.css` (homepage). These are the authoritative reusable brand codes found in the source. Pixel histogram sampling of the compressed JPEG gave dominant non-white values `#F6931C` (orange) and `#9ACDAE` (sage); their one-step differences are consistent with JPEG compression. The redesign should use the existing CSS codes, warm neutral backgrounds and darker readable text/button derivatives. Orange and sage alone are not sufficient contrast for small white text; assess each intended foreground/background pair.

The source also uses white, near-white, dark body text and an NDIS purple badge. The badge's purple is not the P.A.C.E.S. primary theme. Do not adopt an unrelated blue healthcare theme.

## Content inventory and editorial meaning

### Homepage

The existing hero asks whether the visitor needs NDIS services and introduces empowerment and participant needs coming first. The welcome introduces the full name and celebrates each person's abilities. The mission is to let participant needs guide the service, with inclusivity and empowerment, tailored disability support, skills and resources for personal and professional life, identifying strengths and areas for growth, and individual care plans.

The homepage lists all six services: Community Participation, Home Care, Transportation, Day Programs, Weekend Program, and Activities and Skill Building. Its process is Personalised Assessment; Collaborative Planning with participants, families and team; Flexible Scheduling; Customised Programs; and Continuous Adjustments through review. Correct the original accidental “P.A.C.E.C.S” spelling during editing. “Continuous Review and Adjustment” is an editorial clarification of the same final step.

### About

Vision themes: independence, inclusion, growth, well-being and empowerment; dignity and purpose; tools, resources and support to live life on individual terms; welcoming accessible communities; belonging; personal and professional development; health and happiness; self-advocacy and advocacy for others; meaningful contribution to society. These are aspirations, not measured outcomes or compliance guarantees.

### Services — all substantive examples retained

| Service | Published support details and intended goals |
| --- | --- |
| Community Participation | Volunteering, clubs/groups, events, community resources. Social connection, reduced isolation, belonging, self-esteem, communication, teamwork, problem-solving, leadership, personal growth, well-being, inclusion and community contribution. Rewrite broad health-outcome claims as possible goals, without promising outcomes. |
| Home Care | Showering, dressing, mealtime management, household chores, outdoor maintenance. Compassionate respectful support aligned with needs/preferences, independence and dignity in one's own home, hobbies, social outings and peer connections, occasional or ongoing support adaptable as needs change. No nursing/clinical service is implied. |
| Transportation | Accessible transport tailored to individual needs, wheelchair-accessible vehicles and specialised travel assistance, safe comfortable reliable travel. Ask the team about current vehicles and arrangements; do not invent fleet features or availability. |
| Day Programs | Customised to skills, interests and capabilities; creative arts and outdoor adventures; enriching experiences, growth and fulfilment. No fixed schedule or venue published. |
| Activities and Skill Building | Arts, sports and outings; cooking, communication, catching trains/public transport and managing money; practical and essential life skills, independence and fulfilment. |
| Weekend Programs | Same personalised approach as weekday support, tailored to skills, interests and capabilities; new hobbies, outdoor activities, relaxing and unwinding, fun, learning and meaningful experiences. No particular weekly event/calendar published. |

### Contact and footer

The source form fields are name (required), phone (required), email (required), and message (optional), using WordPress Contact Form 7. The original receiver inbox is not publicly disclosed and the old backend cannot be copied into a static site. Hidden WordPress nonce/configuration is not an enquiry delivery credential. No live submission was attempted. New integration requires a business-owned endpoint, authorised recipient, provider spam settings and actual delivery testing.

The footer is “© PACES | a project by Oz Web Design Sydney” with link to [Oz Web Design Sydney](https://www.ozwebs.com.au/web-design). This is the original site's design credit; preserve it in the audit, not as a claim that the original agency built this redesign. Owner can review attribution obligations. Shared navigation links are Home, Services, About us and Contact us. Contact Us calls to action appear on the homepage.

## Downloaded original assets and provenance

All files below came from the original site without inventing staff or participant identities. Existing publication does not itself establish reusable copyright permissions or participant image consent. The owner must confirm permission and consent before public launch. Photographs must not be labelled as named P.A.C.E.S. workers or specific programme participants without approval.

| Local asset | Original path under `https://prosperandcare.com.au/wp-content/uploads/` | Dimensions | Visible subject/use |
| --- | --- | --- | --- |
| `images/logo/PACES-Logo.jpg` | `2024/03/PACES-Logo.jpg` | 375 × 90 | Official unchanged company logo |
| `images/general/home.jpg` | `2024/06/home.jpg` | 768 × 512 | Two people making pottery; original orange/sage composition |
| `images/general/about-us.jpg` | `2024/06/about-us.jpg` | 600 × 600 | Two people baking; original orange composition |
| `images/general/ndis-ready.jpg` | `2024/06/ndis-ready.jpg` | 600 × 600 | Person in red top; sage composition; no inferred identity |
| `images/general/ndis-registered.jpg` | `2024/03/ndis-registered.jpg` | 145 × 60 | Existing NDIS registration badge; do not newly use until status/usage approved |
| `images/services/COMMUNITY-PARTICIPATION.jpg` | `2024/06/COMMUNITY-PARTICIPATION.jpg` | 550 × 366 | People playing basketball, including a wheelchair user |
| `images/services/cooking-2.jpeg` | `2024/05/cooking-2.jpeg` | 275 × 183 | Two people preparing food in a kitchen |
| `images/services/transport.jpeg` | `2024/06/transport.jpeg` | 275 × 183 | Wheelchair on vehicle access ramp |
| `images/services/DAY-PROGRAMS.jpg` | `2024/06/DAY-PROGRAMS.jpg` | 550 × 366 | Wheelchair user fishing outdoors |
| `images/services/activity-skills.jpg` | `2024/06/activity-skills.jpg` | 550 × 366 | Child swimming with flotation support |
| `images/services/WEEKEND-PROGRAM.jpeg` | `2024/06/WEEKEND-PROGRAM.jpeg` | 275 × 183 | Group on woodland path, including a wheelchair user |

Original 300 × 200 derivatives of community participation, day programmes and activity skills are also archived in `images/services/`. Some originals are small; avoid excessive enlargement. Descriptive alt text should explain visible content without medical assumptions. Original photographs generally have empty alt attributes; improve them.

Machine-readable source/asset provenance is in `docs/source/inventory.json`. Original main-page HTML, extracted text, relevant stylesheets, sitemap/API responses and a labelled image contact sheet are archived in `docs/source/`. **Exclude `docs/source/` from public hosting**: it is development evidence, not a site feature, and archived original HTML contains the original external scripts. Open redesigned pages in the project root for preview. `original-copy.md` below preserves the complete substantive original copy separately from repeated navigation.

## Approval items exposed by the audit

- Reconfirm telephone and preferred enquiry inbox.
- Supply an explicitly confirmed WhatsApp number, or leave WhatsApp inactive.
- Configure a business-controlled static form endpoint and verify received enquiries.
- Approve staff profiles, qualifications, experience, photographs, languages and publication consent before publishing them.
- Confirm photograph rights/participant consent for migrated imagery.
- Verify current NDIS registration identifier/status and any badge/claim before launch.
- Confirm exact service areas, current service arrangements and any public office/hours before adding them.
- Review privacy/accessibility/feedback wording; no policy or WCAG certification can be inferred from the old website.
- Confirm deployment URL before generating production canonicals, sitemap locations and structured data.

## Full original copy

The complete main-page copy, extracted from the public pages API and retained with original spelling, is included in [source/original-copy.md](source/original-copy.md). It includes every substantive paragraph, six complete service descriptions, service examples, homepage taglines, mission/vision, five-step process, original form field labels and published contact/registration details. The empty testimonials page is explicitly recorded. This archive is the source of truth for migration traceability; the polished redesign should preserve meaning rather than source spelling mistakes.
