# Staff profile update

Date: 25 October 2026 (Australia/Sydney).

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
