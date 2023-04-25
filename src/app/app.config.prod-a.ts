

export default {
  oidc: {
    clientId: '0oa4gmq326JdyDCmN697',
    issuer: 'https://okta-company-a.zacsandbox.com/oauth2/default',
    redirectUri: `https://customer-portal-a.zacsandbox.com/login/callback`,
    scopes: ['openid', 'profile', 'email', 'read:messages'],
    testing: {
      disableHttpsCheck: true
    }
  },
  resourceServer: {
    messagesUrl: `http://localhost:8000/api/messages`,
  },
};
