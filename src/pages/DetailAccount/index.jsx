import React, { useEffect, useState } from 'react'
import { Button } from '~/components/ui/Button'
import { Typography } from '@mui/material'
import DisabledTextField from '~/components/ui/DisabledTextField'
import ChangePasswordModal from '~/components/Layout/Components/_components/ChangePasswordModal'
import accountApi from '~/apis/account'
import ImageUploader from '~/components/ui/ImageUploader'
import RequiredTextField from '~/components/ui/RequiredTextField'
import NumericTextField from '~/components/ui/NumericTextField'

const DetailAccount = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [accountInfo, setAccountInfo] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [isChanged, setIsChanged] = useState(false)

  const handleOpenModal = () => setIsModalOpen(true)
  const handleCloseModal = () => setIsModalOpen(false)

  // Xử lý thay đổi input
  const handleInputChange = (field, value) => {
    setAccountInfo((prev) => ({ ...prev, [field]: value }))
    setIsChanged(true)
  }

  // Xử lý thay đổi avatar
  const handleAvatarChange = (file) => {
    setAvatar(file)
    setIsChanged(true)
  }

  useEffect(() => {
    const fetchAccountInfo = async () => {
      try {
        const accountData = await accountApi.getAccount()
        setAccountInfo({
          name: accountData.name,
          email: accountData.email,
          phone: accountData.phone,
          name_account: accountData.name_account,
          address: accountData.address,
        })
        setAvatar(accountData.avatar?.url || null) // Lấy avatar từ API
      } catch (error) {
        console.error('Error fetching account data:', error)
      }
    }

    fetchAccountInfo()
  }, [])

  // Lưu thông tin tài khoản
  const handleSave = async () => {
    try {
      const formData = new FormData()
      formData.append('phone', accountInfo.phone)
      formData.append('address', accountInfo.address)
      if (avatar instanceof File) {
        formData.append('avatar', avatar) // Gửi avatar nếu thay đổi
      }

      await accountApi.updateAccount(formData)
      alert('Cập nhật thông tin thành công!')
      setIsChanged(false)
    } catch (error) {
      console.error('Error updating account:', error)
      alert('Có lỗi xảy ra khi cập nhật thông tin tài khoản.')
    }
  }

  if (!accountInfo) {
    return <Typography>Loading...</Typography>
  }

  return (
    <div className='w-full justify-center'>
      <div className="block text-center text-primary text-6xl font-medium font-['Oswald'] uppercase leading-[100px] my-10">
        Hồ sơ của tôi
      </div>

      <div className='flex flex-col md:flex-row items-start gap-6'>
        <div className='md:w-1/3 w-full flex flex-col items-center'>
          <div className='mb-4'>
            {avatar ? (
              <img
                src={avatar instanceof File ? URL.createObjectURL(avatar) : avatar}
                alt='Avatar'
                className='w-32 h-32 rounded-full object-cover border border-gray-300'
              />
            ) : (
              <div className='w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center'>
                <span className='text-gray-500'>Chưa có ảnh</span>
              </div>
            )}
          </div>
          <ImageUploader
            maxImages={1}
            handleAvatarChange={(file) => {
              handleAvatarChange(file)
              setAvatar(file)
            }}
          />
        </div>
        <div className='md:w-2/3 w-full'>
          <RequiredTextField
            label='Họ và tên'
            value={accountInfo.name}
            handleChange={(e) => handleInputChange('name', e.target.value)}
          />
          <DisabledTextField label='Email' value={accountInfo.email} />
          <NumericTextField
            label='Số điện thoại'
            value={accountInfo.phone}
            handleChange={(e) => handleInputChange('phone', e.target.value)}
          />
          <DisabledTextField label='Tên tài khoản' value={accountInfo.name_account} />
          <RequiredTextField
            label='Địa chỉ'
            value={accountInfo.address}
            handleChange={(e) => handleInputChange('address', e.target.value)}
          />
        </div>
      </div>

      <div className='flex items-center justify-center gap-[54px] my-5'>
        <Button
          variant='outline'
          className={`w-36 h-12 rounded-full ${
            isChanged
              ? 'bg-primary hover:bg-primary/80 text-white'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleSave}
          disabled={!isChanged}
        >
          Lưu
        </Button>

        <Button variant='none' className='text-primaryText' onClick={handleOpenModal}>
          Đổi mật khẩu
        </Button>
        <ChangePasswordModal open={isModalOpen} onClose={handleCloseModal} />
      </div>
    </div>
  )
}

export default DetailAccount
