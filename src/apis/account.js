import { httpClient } from '~/services'
import accountsEndpoint from '~/services/endpoints/accounts.endpoint'

class AccountApi {
  // Lấy thông tin tài khoản
  async getAccount() {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        throw new Error('Token không tồn tại. Vui lòng đăng nhập lại.')
      }
      httpClient.setAuthHeader(token)

      const res = await httpClient.get(accountsEndpoint.getAccount)
      if (!res.account) {
        throw new Error('Không tìm thấy dữ liệu tài khoản.')
      }
      return res.account // Trả về dữ liệu tài khoản
    } catch (error) {
      console.error('Error fetching account:', error)
      throw new Error('Có lỗi xảy ra khi lấy thông tin tài khoản.')
    }
  }

  // Cập nhật thông tin tài khoản
  async updateAccount(formData) {
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        throw new Error('Token không tồn tại. Vui lòng đăng nhập lại.')
      }
      httpClient.setAuthHeader(token)

      const res = await httpClient.post(accountsEndpoint.updateAccount, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      return res.data
    } catch (error) {
      console.error('Error updating account:', error)
      throw new Error('Có lỗi xảy ra khi cập nhật tài khoản.')
    }
  }
}

const accountApi = new AccountApi()
export default accountApi