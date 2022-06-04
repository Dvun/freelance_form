const ssoRealmUrl = `${process.env.SSO_URL}/auth/realms/${process.env.SSO_REALM}`
const ssoProtocolUrl = `${ssoRealmUrl}/protocol/openid-connect`

  export const ssoConfig = {
    issuer: ssoRealmUrl,
    authorization_endpoint: `${ssoProtocolUrl}/auth`,
    token_endpoint: `${ssoProtocolUrl}/token`,
    userinfo_endpoint: `${ssoProtocolUrl}/userinfo`,
    revocation_endpoint: `${ssoProtocolUrl}/logout`,
    jwks_uri: `${ssoProtocolUrl}/certs`
  }

  export const ssoClientConfig = {
    client_id: process.env.SSO_CLIENT_ID,
    client_secret: process.env.SSO_CLIENT_SECRET
  }

  export const ssoGeneralConfig = {
    redirect_uri: `${process.env.FRONTEND_ROOT_URL}/auth`,
    account_management_uri: `${ssoRealmUrl}/account`
  }