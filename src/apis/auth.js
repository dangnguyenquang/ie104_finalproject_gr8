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

  async customerRegister(infoAccount) {
    try {
      const res = await httpClient.post(authEndpoint.register, {
        infoAccount: {
          name: infoAccount.name,
          role: infoAccount.role,
          address: infoAccount.address,
          password_account: infoAccount.password_account,
          name_account: infoAccount.name_account,
          email: infoAccount.email,
          phone: infoAccount.phone,
        },
      })
      return { msg: res.msg }
    } catch (error) {
      console.log(error)
    }
  }

  async sellerRegister(formData) {
    try {
      const res = await fetch('http://localhost:3000/user/account/signup', {
        method: 'POST',
        body: formData, // Không cần đặt Content-Type
      })
      const result = await res.json()
      return { msg: result.msg }
    } catch (error) {
      return { error: error.message || 'Đã xảy ra lỗi trong quá trình đăng ký' }
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
