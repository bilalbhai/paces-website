# Integration references

Checked against primary sources on 25 October 2026. These references support configuration; they do not establish that a P.A.C.E.S. account or endpoint is active.

## Enquiry form

1. The business creates and verifies its own Formspree account, creates a form and confirms the authorised target inbox in the dashboard.
2. Copy the public form endpoint in the form `https://formspree.io/f/FORM_ID` into `js/config.js`. This is a public identifier, not an email password or private API key.
3. Standard HTML integration uses `method="POST"`, the endpoint as `action`, and a `name` on every submitted field. The site enhances this with vanilla JavaScript feedback.
4. Configure the provider's spam filtering. The `_gotcha` honeypot is supported on all plans; the provider silently discards submissions if it is filled. It is not proof of successful email delivery.
5. After publishing to a test HTTPS address, send an approved, non-sensitive test enquiry. Check the Formspree dashboard and authorised inbox, including spam. Test error handling and any provider CAPTCHA as well.

Primary documentation:

- [Building an HTML form](https://help.formspree.io/articles/building-your-form/building-an-html-form)
- [HTML integration](https://formspree.io/html/)
- [AJAX submission](https://help.formspree.io/articles/building-your-form/submit-forms-with-javascript-ajax)
- [Official manual fetch example](https://formspree.io/blog/formspree-ajax/)
- [Honeypot spam filtering](https://help.formspree.io/articles/building-your-form/honeypot-spam-filtering/)
- [Unable to submit form troubleshooting](https://help.formspree.io/articles/troubleshooting/unable-to-submit-form-error)

The provider's `file:///` troubleshooting warning concerns legacy email-address endpoints, which need an HTTP Referer. This project uses modern form-ID endpoints. Nevertheless, local browser security, provider origin restrictions and spam checks can affect external submission. Local frontend behaviour can be checked by opening `index.html`; actual delivery must be checked online after setup. Do not promise delivery from an unconfigured form.

## Independent complaints pathway

The NDIS Quality and Safeguards Commission publishes a complaints and reporting pathway at [Report an issue or make a complaint about a provider or worker](https://www.ndiscommission.gov.au/complaints/report). Its published phone number is **1800 035 544**. Contact details and communication assistance are also on the Commission's [Contact us](https://www.ndiscommission.gov.au/contact-us) page.

These are external official pathways, not a claimed P.A.C.E.S. internal complaints procedure. The business must approve its internal procedure, responsible contact and timeframes separately.

## GitHub Pages

For the simplest deployment, upload the **contents** of `paces-website` to a repository root so `index.html` is at the root. In repository Settings → Pages choose **Deploy from a branch**, select the desired branch and **/(root)**, then Save. Branch publication also supports a `/docs` source folder, but does not offer an arbitrary `/paces-website` source folder.

- [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Custom domains](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

GitHub Pages availability depends on account/repository settings. Confirm the public result, nested service links and configured contact pathways after publishing. This task does not authorise replacing the live business domain.
