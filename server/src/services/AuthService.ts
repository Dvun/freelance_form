const { Issuer } = require('openid-client')
import {ssoClientConfig, ssoGeneralConfig, ssoConfig} from '../../config/main'
const SSOIssuer = new Issuer(ssoConfig)
const client = new SSOIssuer.Client(ssoClientConfig)

class AuthService {

  async Login(data: any) {
    return client.authorizationUrl({
      redirect_uri: ssoGeneralConfig.redirect_uri,
      scope: 'openid profile finance'
    })
  }

}

export default new AuthService()



