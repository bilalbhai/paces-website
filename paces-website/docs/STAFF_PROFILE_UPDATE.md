# Staff profile update

Date: 25 October 2026 (Australia/Sydney).

## Current photo, name and introduction update — 25 October 2026

- The user corrected **Bilal** to **Bilal Zafar** and supplied his photo for the website. It was copied unchanged to `images/workers/bilal-zafar.jpg` (1152 × 2048). His stable profile ID remains `bilal`, preserving existing profile and enquiry links.
- Issa is represented by an original illustrated male placeholder, Farah by an original illustrated female placeholder wearing a hijab, and Sujata by an original illustrated female placeholder, as requested. These are dummy illustrations, not claims about their actual likenesses or real staff photographs.
- The three illustrations remain marked `photoIsPlaceholder: true`, with truthful alternative text and the visible label **Illustrative placeholder**. Bilal’s supplied photo has `photoIsPlaceholder: false`.
- All four profiles now have different first-person introductions requested by the business, centred on listening, respect, kindness, choice and everyday support. This is website copy, not an independently verified staff quotation or evidence of additional qualifications, experience, duties or availability.
- Homepage/team static fallback cards must stay in sync with `js/workers.js` for names, biography text, images, labels and links.

### Verification of this latest update

- Browser-checked the homepage, team page and all four individual profiles at 320, 375, 390, 430, 768, 1024 and 1440px: 42 page/width checks with no document overflow, failed completed images or collapsed portrait areas.
- Reviewed the supplied photo and all three illustrations visually. Bilal's photo uses a taller mobile frame to retain his face; its source bytes are unchanged from the supplied JPEG. Only the illustrations carry placeholder labels.
- Verified all four profile enquiry links select the matching person, including the updated name **Bilal Zafar**, while retaining stable ID `bilal`.
- Verified carousel Next and keyboard End, and observed no JavaScript warnings/errors during these checks.
- Static homepage/team cards match the edited data, and local reference/metadata checks passed. Live publication is verified separately after the GitHub push; the historical checks below predate this change.

## Initial profile update — historical record

## Information supplied and authorised

The business owner requested four profiles in this chat and supplied these names and roles:

| Profile ID | Name | Supplied role |
| --- | --- | --- |
| `issa-tamerji` | Issa Tamerji | Enrolled Nurse and Director |
| `farah` | Farah | Registered Nurse |
| `sujata` | Sujata | Registered Nurse |
| `bilal` | Bilal | Enrolled Nurse |

These are owner-supplied details, not findings from the original website audit or an independent professional-registration check. The website’s `publicationStatus: "approved"` value means authorised for inclusion in this website. It does not certify credentials or imply that the redesign has been deployed to the live domain.

## Content and presentation

- The four profiles replace the original development-only examples. They appear through the normal homepage carousel, team directory and individual worker URLs; no `?preview=team` parameter is required.
- Each short biography only restates the supplied name, role and company association. No degrees, years of experience, languages, interests, service assignments, clinical duties or availability have been invented.
- No genuine staff photographs were supplied. The abstract illustrations have truthful alternative text and a visible placeholder label. Each record keeps `photoIsPlaceholder: true` until an approved portrait is added.
- The directory uses a role filter based on supplied roles. It does not infer areas of support from a nursing title.
- Profile enquiry links reference the stable worker ID and preselect the corresponding person in the contact form. An enquiry is not a guaranteed booking.
- Static homepage/team fallback content also lists the four staff so the names and roles remain readable without JavaScript.

## Remaining content and launch items

Approved portraits and any desired longer biographies can be supplied later. Before public launch, the business should verify professional titles and confirm the publication rights/permissions for any additional content. Existing form delivery, WhatsApp, policy, image-rights and production-hosting approvals remain separate and unchanged.

To replace a placeholder, add the approved photo to `images/workers/`, update its record’s `photo`, set `photoIsPlaceholder: false`, and update corresponding static fallback cards in `index.html` and `team.html`. Keep the stable ID unchanged so existing profile/enquiry links continue to work.

## Verification record

- Browser-checked homepage, team page and Issa's individual profile at 320, 375, 390, 430, 768, 1024 and 1440px: 21 page/width checks, no document overflow or failed completed images, one page h1 each.
- Normal team directory lists all four supplied names. The Registered Nurse filter returns Farah and Sujata.
- Opened all four individual profiles and clicked each enquiry button. Each contact form selected the matching worker name and stable ID.
- Verified carousel Next advances to 2 / 4 and keyboard End moves to 4 / 4. No JavaScript warnings/errors were reported during these checks.
- Reviewed the desktop landscape profile visually. Placeholder text and alternative text identify the illustrations as placeholders rather than staff portraits.
- Checked static local paths/metadata and refreshed both project ZIPs after the change. Static homepage/team cards retain the names and roles when JavaScript is unavailable.

Checks used a temporary local HTTP server restricted to the website directory. Direct `file://` browser automation, actual form delivery and real WhatsApp contact remain untested for the reasons in the original test report. No live-domain deployment or independent credential verification was performed.
