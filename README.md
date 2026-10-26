# PACES website

A real disability support website for Prosper and Care Endeavour Services, Smithfield / Western Sydney. Built with plain HTML, CSS and vanilla JavaScript. No installation, packages or build step.

## Preview on your computer

Open the `paces-website` folder and double-click `index.html`. Keep all folders together. Local navigation, service pages, team disclosures and FAQs work without a server. Internet is needed for Google Fonts, WhatsApp, social links and configured form delivery. Fonts fall back offline.

## Current content

The October 2026 client update includes the final PACES logo, slate blue/sage/cream/coral palette, Poppins, seven service pages, three support steps, ten FAQs and four staff profiles. Staff cards expand on hover, tap or keyboard. Three portraits are clearly labelled illustrations; Bilal uses his supplied photograph.

Main phone: 02 8488 3731. WhatsApp: 0401 339 966. Public email: support@prosperandcare.com.au. Contact and referral forms are connected to the owner-supplied Formspree endpoint. Inbox delivery still needs a real end-to-end receipt test. No form submission is claimed to have been delivered without a real successful response.

## Editing

1. **Phone:** edit `phoneDisplay` and `phoneE164` in `paces-website/js/config.js`. Also update matching static telephone links/text in HTML so they work before JavaScript loads.
2. **WhatsApp:** edit `whatsappNumber` (international digits only), `whatsappConfirmed` and message in config. Update the static `wa.me` fallbacks too.
3. **Forms:** create a Formspree form using the authorised business inbox, verify that inbox, then paste the public HTTPS endpoint into `formEndpoint`. No secret keys belong here. Optionally configure `feedbackFormEndpoint` separately. The script sets POST actions and manages validation/status. Submit a real test and confirm the client receives it before advertising delivery. Formspree account limits/spam settings are managed at the provider.
4. **Workers:** copy an object in `js/workers.js`, use a unique stable ID, add genuine approved details and set the publication status appropriately. Never invent credentials. Keep development profiles unpublished. Test `worker.html?id=YOUR_ID` and enquiry preselection.
5. **Photos:** place consented images in `images/workers/`, change the worker photo path/alt and remove placeholder labelling only when using a genuine approved photograph. Keep images reasonably sized.
6. **Services:** edit `js/services.js` for cards and selectors, and edit the corresponding static HTML page for searchable detail text. Keep both consistent. Changing the number of services also requires updating overview/footer links and sitemap.
7. **Brand:** all palette/style rules are in `css/style.css`. Logo paths point to `images/logo/paces-logo.png`; the supplied JPG wordmark is used for social metadata. Keep the supplied logo proportions.

## Publish using GitHub Pages

This repository has a root `index.html` redirect to the nested website folder. Preserve that structure.

1. Push these files to the GitHub repository using plain git.
2. For free GitHub Pages on a free account, keep the repository public.
3. On GitHub open the repository → Settings → Pages.
4. Choose Deploy from a branch, select `main` and `/ (root)`, then Save.
5. Wait for GitHub's deployment to finish and open the URL shown there.

Repository URL: https://github.com/bilalbhai/paces-website
Expected Pages entry: https://bilalbhai.github.io/paces-website/
The nested site URL is https://bilalbhai.github.io/paces-website/paces-website/
If the repository was made private and Pages shows 404, restore public visibility and check Pages settings again. Code being pushed does not by itself prove Pages is enabled.

## Custom domain and launch

Connect a custom domain only after the owner authorises it. In GitHub Pages add the approved domain and follow GitHub's DNS instructions with the domain provider. Confirm HTTPS. Then update websiteUrl in config, all static canonical and Open Graph URLs, sitemap.xml and robots.txt to the final URL.

The current version retains development noindex metadata, crawl blocking and draft policy notices. Complete `docs/CLIENT_APPROVAL_CHECKLIST.md` before changing publicationMode to production and enabling indexing. Test genuine form delivery, real contact destinations and staff/photo consent.

## Project files

`paces-website/` contains the website. `docs/CLIENT_CONTENT_MIGRATION.md` maps the latest client content. `docs/BRAND_DESIGN_SYSTEM.md` explains branding. `docs/CLIENT_UPDATE_TEST_REPORT.md` records current tests. The original-site audit is historical and may describe old branding/services. `docs/source/` is an ignored private working archive and is not published. ZIP downloads are generated copies, not tracked source.

All links use relative paths for local opening and repository-subdirectory hosting. There is no e-commerce or payment functionality.

## Current form connection

Owner-supplied endpoint: https://formspree.io/f/mqpppely. Contact and referral HTML use this action with method POST, and the same endpoint is set in js/config.js. All fields have names. Account email verification, destination inbox and real delivery are controlled in Formspree and must be confirmed by the owner. No test message was sent during setup. Earlier setup instructions remain useful for changing providers/endpoints.

## Browser caching

HTML stylesheet and script links include a public version query (stylesheet currently `v=20261026-5`; individual scripts may have separate versions) so a brand update does not reuse older cached assets. When publishing future CSS/JavaScript changes, update that version consistently in all HTML pages. These relative links still work when opening files locally. If an already-open page looks outdated, reload it with Ctrl+Shift+R.
