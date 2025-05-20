const config = {
  // API URLs
  api: {
    // Use environment variable if available, otherwise fallback to localhost:3030
    baseUrl: process.env.REACT_APP_API_URL || 'http://localhost:3030',
  },
  recaptchaSiteKey: process.env.REACT_APP_RECAPTCHA_SITEKEY || '',
};

export default config;
