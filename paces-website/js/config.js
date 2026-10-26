/* Public settings only. Never add passwords or private API keys here. */
window.PACES_CONFIG = {
  businessName: 'Prosper and Care Endeavour Services (PACES)',
  phoneDisplay: '02 8488 3731',
  phoneE164: '+61284883731',
  // Main call number from the client's October 2026 content; WhatsApp stays on the mobile.
  phoneConfirmedForLaunch: true,
  whatsappNumber: '61401339966', // International digits only; no +, spaces or leading 0.
  whatsappConfirmed: true,
  whatsappMessage: 'Hi PACES, I would like to know more about your disability support services.',
  facebookUrl: 'https://www.facebook.com/prosperandcare',
  instagramUrl: 'https://www.instagram.com/prosperandcare/',
  email: 'support@prosperandcare.com.au',
  formEndpoint: '', // Paste the public https://formspree.io/f/YOUR_FORM_ID endpoint.
  feedbackFormEndpoint: '', // Optional separate approved complaints destination.
  publicAddress: '3/67B Brenan Street, Smithfield, Sydney, NSW 2164, Australia',
  serviceAreas: ['Smithfield, NSW', 'Western Sydney and surrounding suburbs'],
  websiteUrl: 'https://bilalbhai.github.io/paces-website/paces-website/', // Current review host; update for the approved final domain.
  publicationMode: 'development', // Change to 'production' only after the launch checklist.
  enableDevelopmentProfiles: false // Keep false; preview via team.html?preview=team locally.
};
