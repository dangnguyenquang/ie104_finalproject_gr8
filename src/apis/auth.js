import { httpClient } from '../services'
import authEndpoint from '~/services/endpoints/auth.endpoint'

class AuthApi {
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
  async Search(filterList, page) {
    try {
      const res = await httpClient.post(`${authEndpoint.search}?page=${page}`, filterList)
      return res
    } catch (error) {
      console.log(error)
    }
  }
}

const authApi = new AuthApi()

export default authApi
