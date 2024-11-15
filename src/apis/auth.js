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
      // Gửi formData qua POST request
      const res = await httpClient.post(authEndpoint.register, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })

      return { msg: res.data.msg }
    } catch (error) {
      // Trả về lỗi để xử lý sau này
      return { error: error.message || 'Đã xảy ra lỗi trong quá trình đăng ký' }
    }
  }
}

const authApi = new AuthApi()

export default authApi
