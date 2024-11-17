import { httpClient } from '../services'
import authEndpoint from '~/services/endpoints/auth.endpoint'

class UserApi {
  async signIn(email, password) {
    try {
      const res = await httpClient.post(authEndpoint.login, {
        email,
        password,
      })
      return { msg: res.msg }
    } catch (error) {
      console.log(error)
    }
  }

  async signOut() {
    try {
      const res = await httpClient.delete('/auth/sign-out')
      return res.user
    } catch (error) {
      console.log(error)
    }
  }

  async register() {
    try {
      const res = await httpClient.delete('/auth/sign-out')
      return res.user
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserApi()
