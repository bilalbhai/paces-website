> Update: the owner supplied https://formspree.io/f/mqpppely on 26 October 2026. It is now configured in contact/referral HTML actions and js/config.js, using POST and named fields. Real email receipt and account verification remain untested; no synthetic enquiry was sent. The setup guide below is retained for reference.

# Receive website enquiries by email

No database, server or email password needs to be added to the website. The existing forms are ready for Formspree; they are currently inactive because no endpoint has been supplied.

1. Create a free account at https://formspree.io/ and verify your account email.
2. Create a form named PACES Website Enquiries.
3. Select the authorised destination inbox and complete email verification. This can be the business email; it need not be the public email in config.
4. Copy the form endpoint from the integration screen. It looks like https://formspree.io/f/abcdefgh.
5. Send the endpoint to the website maintainer, or put it in formEndpoint in js/config.js. This public form ID is not an email password or secret API key.
6. Publish the update, submit a test through the live contact page, and check the destination inbox and spam folder. Confirm all expected fields arrive. Repeat for the referral form.
7. Feedback uses the same endpoint unless feedbackFormEndpoint is configured separately. Choose an appropriate inbox for feedback.

The free plan currently allows 50 submissions per month across the account and retains 30 days of submission history. These are provider limits, so check https://formspree.io/plans/ for current terms. Formspree processes/stores submissions; you do not set up your own database. Review the site's draft privacy text before launch and do not ask visitors to upload sensitive records.

Source: https://help.formspree.io/articles/account-management/account-limits/

Live email delivery cannot be tested until the account, verified inbox and endpoint exist. Never send account passwords to the website maintainer or put them in JavaScript.
