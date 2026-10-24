# P.A.C.E.S. website

The website for **Prosper and Care Endeavour Services (P.A.C.E.S.)**, a disability support business in Sydney, Australia.

It uses plain **HTML, CSS and JavaScript**. There are no packages, build commands, shopping carts or payment features.

## Preview on your computer

Open `paces-website/index.html` in your browser. You can also open the `index.html` in this repository's main folder; it takes you to the same website. No installation or server is required.

## What is included

- A homepage and six detailed service pages.
- About, team, support process, contact, referral, FAQ, feedback, privacy and accessibility pages.
- Four staff profiles, individual profile links and worker-specific enquiries.
- Responsive layouts, keyboard navigation and mobile contact buttons.

## Where the files are

```text
index.html             Entry page that opens the website folder
paces-website/
  index.html           Website homepage
  services/            Individual service pages
  css/style.css        Colours, fonts and layout
  js/config.js         Public contact and form settings
  js/workers.js        Staff names, roles and profile information
  images/              Logo, photographs and photo placeholders
  docs/                Project audit, design and review documents
  README.md            Detailed editing and setup guide
```

The `.gitignore` keeps generated ZIPs, local credentials and the original-site source archive out of Git. Those files remain on your computer. The public website configuration is included because the site needs it; it must never contain passwords or private keys.

## Edit the website

Change the HTML for page text, `paces-website/css/style.css` for design, and `paces-website/js/config.js` for public contact settings. Staff data is in `paces-website/js/workers.js`.

Read the [detailed guide](paces-website/README.md) for photos, service descriptions, forms and other changes.

## Save changes with Git

From this repository's main folder:

```text
git status
git add .
git commit -m "Describe the change"
```

Git makes a local record of your files. A later `git push` sends committed changes to GitHub, after a remote repository has been connected.

## Publish with GitHub Pages

After the code has been pushed:

1. Open the repository on GitHub.
2. Select **Settings → Pages**.
3. Select **Deploy from a branch**.
4. Choose **main** and **/(root)**, then Save. This project's branch is `main`.
5. Open the website link shown by GitHub when deployment finishes.

The root entry page forwards visitors into `paces-website/`, preserving the existing project structure and relative links. No custom domain or DNS change is needed for a GitHub Pages address. The website's final base URL for SEO settings will include `/paces-website/`.

Public repositories can use GitHub Pages on GitHub Free. Private-repository Pages requires an eligible paid plan. See [GitHub Pages availability](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

## Settings still to finish

- WhatsApp needs a confirmed, authorised number.
- Online enquiry delivery needs a configured external form endpoint and a tested business inbox.
- Staff photos are clearly labelled placeholders until approved portraits are added.
- Privacy, accessibility, image permissions and other launch items need review.
- Search indexing remains in development mode until the production URL and launch settings are confirmed.

See the [client checklist](paces-website/docs/CLIENT_APPROVAL_CHECKLIST.md). Pushing code does not activate these services or change the existing business domain.
