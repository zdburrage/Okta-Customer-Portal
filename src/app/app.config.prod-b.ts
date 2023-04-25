

export default {
  oidc: {
    clientId: '0oa4gmq326JdyDCmN697',
    issuer: 'https://okta-company-b.zacsandbox.com/oauth2/aus55130uqDFjWtHM697',
    redirectUri: `https://okta-company-b.zacsandbox.com/login/callback`,
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: true
    }
  },
  resourceServer: {
    messagesUrl: `http://localhost:8000/api/messages`,
  },
};
