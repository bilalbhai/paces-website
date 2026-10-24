# Independent static review

> **Staff update, 25 October 2026:** The initial-build findings below about unpublished development profiles, empty public directories and development-only filters are historical and superseded by [STAFF_PROFILE_UPDATE.md](STAFF_PROFILE_UPDATE.md). Four owner-supplied names and roles now have normal visible profiles with labelled photo placeholders. Other baseline test results remain historical evidence, not a claim that this staff update has been retested.

Reviewed on 25 October 2026. This report covers source inspection and local file resolution, not a WCAG certification, live delivery test or browser layout test. Original archived source under `docs/source/` was excluded.

## Checks performed

- Parsed all **18 redesigned HTML pages** with Python's standard-library HTML parser.
- Checked **912 href/src references**, including relative paths from the six nested service pages and local fragment identifiers. No missing local files or fragment targets were found.
- Confirmed one static `h1` per page, no duplicate IDs, unique page titles and descriptions, nonempty viewport and required Open Graph metadata, and an `alt` attribute on every content image.
- Checked both enquiry forms for associated labels, named submission fields, POST method, privacy acknowledgement, hidden honeypot and initially inactive submission controls. The referral form also requires authority to make the enquiry.
- Inspected classic deferred script loading and relative CSS/image paths. No JavaScript modules, local data fetches, framework runtime, npm or build dependency is required. The one JavaScript `fetch` is the external form POST after configuration.
- Inspected worker publication filtering and profile replacement: development profiles require development mode and explicit preview settings; the profile replaces its unavailable state rather than adding a second page `h1`. Production mode excludes development profiles. Draft HTML metadata is `noindex,follow` and the draft robots file disallows crawling.
- Reviewed six detailed service pages, About, FAQ, feedback, privacy and accessibility content against the existing-site audit. No invented staff identities, qualifications, testimonials, office address, public email, opening hours, suburb coverage, funding guarantee or unqualified compliance claim was found.
- Checked public telephone links against the published number and confirmed unconfigured WhatsApp routes to contact options rather than guessing a WhatsApp-enabled number.
- Calculated representative palette contrast ratios: primary button dark text on orange 5.32:1; body on cream 11.18:1; muted body on cream 6.12:1; dark orange links on cream 5.67:1; green headings on pale sage 5.35:1; dark green on sage 6.40:1; white on dark green 11.56:1.

## Issues identified during review

The following fixes were confirmed in source after being reported:

- Form success now requires a positive JSON acknowledgement; a 200 HTML redirect cannot falsely show accepted submission.
- Worker photographs have sizing on the image itself; carousel buttons share the intended control styling.
- Form status styling matches JavaScript state classes.
- CTA body text uses dark green to clear the normal-text contrast threshold.
- The JavaScript enhancement adds the `.js` class; without JavaScript mobile navigation links remain visible.
- Header number text is updated through the shared `[data-phone-text]` selector.
- Services overview has an `h2` before card `h3` headings; individual worker sections use `h2` and card sections use `h4`.
- Telephone input patterns escape parentheses for current browser regular-expression syntax.
- Referral authority errors use permission-specific wording.

Contextual focus outlines were also applied after review: orange on dark sections and dark green on the orange CTA. The global dark-orange outline alone would be insufficient against those surfaces, so the contextual overrides are intentional.

## Not established by this review

- Actual browser rendering, swipe, keyboard interaction, screen-reader announcements, zoom/reflow and responsive geometry at each required width. See the main project's test record for browser checks.
- Actual form service acceptance or email delivery, because no authorised endpoint/inbox has been supplied.
- WhatsApp account ownership or successful messaging, because a confirmed WhatsApp number has not been supplied.
- Live GitHub Pages publication, DNS, production canonicals or social crawler previews. Relative metadata is intentionally staged until the final URL is approved.
- Staff consent, photo reuse rights, current registration status, final policies or a complete WCAG 2.2 AA audit. These remain business launch-review items.
