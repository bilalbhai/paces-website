# P.A.C.E.S. brand and design system

Prepared 25 October 2026. The starting point is the unchanged [official logo](../images/logo/PACES-Logo.jpg) and CSS retrieved from the [existing P.A.C.E.S. website](https://prosperandcare.com.au/). This is a proposed redesign system, not a replacement logo or a claim that every treatment has formal brand approval.

## Evidence and colour choices

The original logo is orange and sage on white. The original Elementor CSS explicitly specifies orange **#F6931D** and sage **#9ACCAE**. JPEG pixel sampling returned #F6931C and #9ACDAE; the original CSS values are preferred because JPEG compression shifts pixel values slightly.

| CSS variable | Colour | Use |
| --- | --- | --- |
| `--brand-orange` | `#F6931D` | Primary action surfaces, accents, highlights and CTA panels |
| `--brand-sage` | `#9ACCAE` | Secondary buttons, illustration accents and WhatsApp surfaces |
| `--orange-dark` | `#A34709` | Readable orange headings, links and focus on light surfaces |
| `--orange-pale` | `#FFF0DC` | Steps, development notices and subtle accent panels |
| `--green-dark` | `#243E36` | Primary text, navigation, dark sections, footer and strong buttons |
| `--green-mid` | `#426A58` | Secondary headings and icons |
| `--sage-pale` | `#EAF2E9` | Team sections, cards and calm supporting areas |
| `--cream` | `#FAF7F0` | Main warm background |
| `--muted` | `#526158` | Secondary paragraph text |
| `--line` | `#D9DFD5` | Dividers and card borders |
| `--error` | `#9F2727` | Form error text and borders |

All are editable in `css/style.css`. Orange is never used as a pale small-text colour on white. Primary orange buttons use dark text. The official logo is not recoloured, stretched or reconstructed. The small browser favicon is a derivative P-and-dot navigation mark, not a replacement official logo.

## Typography

- Headings: **Manrope**, using a system sans-serif fallback offline.
- Body: **DM Sans**, with Arial/sans-serif fallback.
- Fonts are requested from Google Fonts over HTTPS. They are open-source fonts distributed through that service; see the [Google Fonts licence information](https://developers.google.com/fonts/faq). No font binary is bundled here. Owner can remove the import or self-host approved font files to avoid external requests.
- Fluid headings use `clamp()`. Body copy is 17px desktop and 16px mobile with generous line height. Inputs use 16px text.
- Short, direct, participant-led Australian English. Avoid unverified outcomes, credentials, promises, current places or funding claims.

## Composition and components

The visual direction combines a warm editorial hero, a curved original photograph, a small orange botanical motif, thoughtful whitespace, white service cards and dark green contrast sections. The orange/sage business imagery anchors the new design in the existing brand.

The homepage progresses from personal choice to the six services, reasons for the approach, the five-step support journey, team connection, FAQs and contact. Inner pages use breadcrumbs and clear page introductions. Service details are static HTML with practical examples, goal context, related services and contact options.

Landscape worker cards put an image on the left and the name, supplied role, short factual introduction and enquiry controls on the right. On phones, the image moves above the text. A manual, keyboard-operable scroll carousel supports horizontal touch scrolling without autoplay. Four real staff names and roles supplied and authorised by the business on 25 October 2026 are visible normally: Issa Tamerji, Farah, Sujata and Bilal. Their abstract illustrations are explicitly labelled photo placeholders. No unsupplied qualifications, experience, service assignments or personal details are shown. The directory filters by the supplied roles. Website publication approval does not constitute independent credential verification; see `STAFF_PROFILE_UPDATE.md`.

The desktop WhatsApp control uses brand sage. On phones it gives way to a single safe-area-aware bottom bar with Call, WhatsApp and Enquire. Unconfirmed WhatsApp controls lead to an honest setup notice instead of a guessed recipient.

## Accessibility decisions

Target: WCAG 2.2 Level AA; full conformance has not been certified. Semantic regions, skip navigation, meaningful image text, visible focus, reduced-motion support, native FAQ disclosure controls, labelled forms and associated text errors are included.

Representative calculated contrast ratios: body text/cream approximately 11.2:1; muted text/cream 6.1:1; dark orange/cream 5.7:1; dark button text/orange 5.3:1; dark green/sage 6.4:1. Dark sections use an orange focus outline; orange CTA sections use a dark green outline. Test new foreground/background combinations when changing the palette.

Buttons are generally 48–52px high, with mobile quick-contact controls at least 56px high. Text links use adequate line spacing; reflow and geometry were checked at 320, 375, 390, 430, 768, 1024 and 1440px. A full assistive-technology and user audit is still required.

## Photography and motion

Use the original downloaded images without changing the official logo. The photos are source-site assets, not verified staff identities or testimonials. Existing licence/subject-consent records must be confirmed by the business before publication. Some source images are low resolution; replace them with approved originals when available. See the source inventory for exact URLs.

Motion is limited to brief hover/colour transitions and user-initiated carousel scrolling. There is no autoplay. `prefers-reduced-motion` removes smooth scrolling/transitions. Content remains visible without JavaScript; images below the initial hero generally use native lazy loading.
