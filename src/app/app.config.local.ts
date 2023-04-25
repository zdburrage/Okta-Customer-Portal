
export default {
  oidc: {
    clientId: '0oa4gmq326JdyDCmN697',
    issuer: 'https://zacsandbox.okta.com/oauth2/default',
    redirectUri: `http://localhost:4200/login/callback`,
    scopes: ['openid', 'profile', 'email'],
    testing: {
      disableHttpsCheck: true
    }
  },
  resourceServer: {
    messagesUrl: `http://localhost:8000/api/messages`,
  },
};
