# Website test report

> **Staff update, 25 October 2026:** The initial-build findings below about unpublished development profiles, empty public directories and development-only filters are historical and superseded by [STAFF_PROFILE_UPDATE.md](STAFF_PROFILE_UPDATE.md). Four owner-supplied names and roles now have normal visible profiles with labelled photo placeholders. Other baseline test results remain historical evidence, not a claim that this staff update has been retested.

Date: 25 October 2026 (Australia/Sydney). Result: the static frontend is built and locally checked. This is a review build, **not a production launch approval**.

## Verified locally

| Check | Result |
| --- | --- |
| All 18 HTML pages | Loaded in the browser; one static page h1 each |
| Seven required widths | All 18 pages checked at 320, 375, 390, 430, 768, 1024 and 1440px: **126 page/width checks, no document horizontal overflow** |
| Image references | All local file paths resolve; browser checks found no failed completed images |
| Static links and metadata | Independent HTML parser checked 912 href/src references with no missing local files/fragments, duplicate IDs, missing image alt, duplicate titles or duplicate descriptions |
| Navigation | Mobile hamburger opens; Escape closes it and returns focus to its button |
| FAQ | Native disclosure opens from the keyboard with Enter |
| Telephone | Business controls resolve to `tel:+61401339966`, matching the existing website’s public number |
| Pending WhatsApp | Original configuration contains no WhatsApp number; controls lead to the contact setup notice |
| Configured WhatsApp link construction | In a temporary isolated test copy only, a synthetic number produced the correct `https://wa.me/…?text=…` format and URL-encoded message. No WhatsApp link was opened and no message sent. Synthetic settings were removed with the test copy. |
| Enquiry validation | Empty form reports seven errors, focuses the name field and associates messages with inputs; alphabetic telephone entry triggers pattern mismatch |
| Valid draft enquiry | Synthetic valid fields pass validation; status explicitly states nothing was sent and values remain in the form |
| Referral permission | Unchecked authority acknowledgement produces a permission-specific message and focus on that checkbox |
| Service selection | Service-page enquiry link preselects Community Participation in contact form |
| Worker directory | Four explicitly labelled development records appear only in explicit development preview; normal team page has zero individual profiles |
| Worker carousel | Four cards; next/previous controls, keyboard Home/End and status updates verified; no autoplay |
| Worker filtering | Home Care filter yields two development layout examples |
| Worker profile/enquiry | Profile URL opens one matching h1; enquiry link preselects the same development worker, with preview-only labelling |
| Worker reflow | Directory/carousel and individual development profile checked at all seven widths; no document overflow. A cached 375px photo-sizing issue was corrected with explicit mobile sizing and verified after reload. |
| Production exclusion | Temporary production test copy still shows zero development cards with `?preview=team` |
| Production URL metadata | Temporary approved-looking `.invalid` base URL generated the expected repository-subdirectory canonical, absolute Open Graph image and `index,follow` metadata. The synthetic URL was only inspected in the DOM and is absent from the deliverable. |
| Repository subdirectory | All 18 pages loaded under an isolated nested path, with no local links escaping the site base and no failed completed images or document overflow |
| Console | No JavaScript errors/warnings observed during the initial full-page traversal |
| Palette | Original orange/sage retained; representative text contrast ratios and contextual focus treatments reviewed in `STATIC_REVIEW.md` and `BRAND_DESIGN_SYSTEM.md` |

Browser QA used a temporary Python standard-library static server restricted to the website folder. This was a testing tool only; Python and a server are not required by the delivered website. A broader parent-workspace server was rejected by automatic approval review and was replaced with the restricted server and a temporary website-only nested copy. The test copy was removed and the server stopped at handover.

## Fixes made during verification

- Added progressive-enhancement state for the mobile navigation while retaining visible no-JavaScript links.
- Corrected form error/success state styling and prevented false success from an unexpected 2xx HTML provider response.
- Made telephone validation compatible with current browser pattern syntax.
- Updated central phone labels as well as their links.
- Corrected referral permission wording and service/profile heading structure.
- Sized worker images inside their wrappers, styled carousel controls and constrained mobile photo layout.
- Improved CTA text and dark/orange-section focus contrast.
- Corrected the transport photograph’s alternative text to match the source asset.

## Not yet verified / approval required

1. **Direct double-click/file preview:** the automation browser blocks `file://` navigation. Source inspection confirms relative paths, classic scripts, no local fetches/modules and no server dependency; manually double-click `index.html` in a normal browser to complete that final environment check. Offline online fonts fall back to system fonts.
2. **Actual form submission and inbox delivery:** no authorised Formspree endpoint or business inbox was supplied. No real enquiry was transmitted. Review of failure-handling code is not a live provider/CAPTCHA/network-failure test. Configure and test acceptance plus inbox delivery on the actual HTTPS host.
3. **Actual WhatsApp recipient:** no authorised WhatsApp-enabled number was supplied. A correct link format does not establish ownership or successful contact.
4. **Real GitHub Pages/public hosting:** no repository deployment or DNS change was made. Local nested-path checks support portability but do not replace the hosted test.
5. **Full accessibility conformance:** no full WCAG 2.2 AA audit, screen reader assessment, browser zoom matrix or testing by users with disability was completed. Keyboard tests and contrast samples do not establish conformance.
6. **Physical devices:** viewport checks were browser emulation, not real iOS/Android device testing. Native touch swipe and real safe-area behaviour require physical-device review.
7. **Business approval:** phone reconfirmation, image rights/subject consent, worker details/consent, current NDIS registration, exact coverage, privacy wording and complaints procedure remain business-review items. See `CLIENT_APPROVAL_CHECKLIST.md`.

No live-domain publication was performed. No production form delivery, current accreditation, approved staff credentials or legal/accessibility compliance is claimed.
