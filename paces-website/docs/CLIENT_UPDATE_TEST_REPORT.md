# Client update verification — 26 October 2026

## Passed

- Browser checks of 19 active pages at 375px: no horizontal overflow or missing completed images.
- Further browser checks at 320, 390, 430, 768, 1024 and 1440px. A long STA heading overflowed at 320px; minimum grid width / word wrapping were fixed and that page retested successfully. No other overflow or broken completed images were found.
- Static parsing of all 24 site HTML files: one H1 each, unique titles/descriptions, existing relative file targets, image alt attributes and both social footer links.
- Final PNG logo hash matches the supplied original exactly.
- Four team cards render with correct names and roles. Native disclosure click/Enter opens, Escape closes. Individual biographies render from the central data file.
- Mobile menu opens and Escape closes; all ten FAQ disclosures render, only first initially open.
- Contact service and worker URL parameters correctly select Support Coordination and Bilal; selector lists seven services and four workers.
- Empty contact form reports seven invalid fields. Synthetic valid data passes validation but explicitly reports nothing sent, retains inputs and does not deliver while endpoint is blank.
- All five retired service URLs redirect to the expected current pages.
- Desktop homepage visually inspected with final logo, new palette and Poppins. Browser console checks at 375px produced no errors in the current active pages.
- Git diff whitespace check passed. GitHub public repository and Pages entry returned HTTP 200. After push, the hosted homepage was browser-verified with the new headline and final logo path.

## Limits / launch checks

- Formspree endpoint is intentionally blank. Actual email delivery and configured-provider failure responses cannot be verified until the client connects the service.
- No real phone call or WhatsApp message was sent. Links use the configured public numbers; social links use the owner's supplied destinations.
- Automated layout checks are not a full WCAG audit, assistive-technology test or real-device touch test. Desktop hover was also tested: pointer entry opens the introduction and pointer exit closes it.
- This update was browser-tested through local HTTP. Relative paths/classic scripts were statically checked for local file opening; a separate file-protocol browser run was not completed in this update.
- Portraits for Farah, Issa and Suzie remain clearly labelled illustrations.
- Policies and search indexing remain in development review status.

The large multi-width test batch initially exceeded the browser tool time limit. It was rerun successfully in smaller batches; that timeout was not counted as a successful test.

## Card polish follow-up

Browser-verified service hover: translateY(-6px) and image scale(1.045). Team Enter/Escape disclosures and introduction animation work. At 375px, home/services/team have no horizontal overflow; tapping a team card opens it. Reduced-motion overrides were inspected in the stylesheet; OS-level reduced-motion emulation was not performed in this follow-up. Stylesheet/script version advanced to 20261026-3 to avoid stale cached branding.
