import * as React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Button } from '~/components/ui/Button'
import { ImageUploader } from '~/components/ui/ImageUploader'
import RequiredTextField from '~/components/ui/RequiredTextField'
import NumericTextField from '~/components/ui/NumericTextField'
import CustomSelect from '~/components/ui/CustomSelect'
import TimeInput from '~/components/ui/TimeInput'
import TextField from '@mui/material/TextField'
import NameTextField from '~/components/ui/NameTextField'
import EmailTextField from '~/components/ui/EmailTextField'
import PasswordTextField from '~/components/ui/PasswordTextField'
import authApi from '~/apis/auth'

const SellerRegisterForm = () => {
  const Districts = [
    'Quận 1',
    'Quận 3',
    'Quận 4',
    'Quận 5',
    'Quận 6',
    'Quận 7',
    'Quận 8',
    'Quận 10',
    'Quận 11',
    'Quận 12',
    'Quận Tân Bình',
    'Quận Bình Tân',
    'Quận Bình Thạnh',
    'Quận Tân Phú',
    'Quận Gò Vấp',
    'Quận Phú Nhuận',
  ]

  const districtsOptions = Districts.map((district) => ({
    label: district,
    value: district,
  }))

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [restaurantName, setRestaurantName] = useState('')
  const [restaurantPhone, setRestaurantPhone] = useState('')
  const [district, setDistrict] = useState('')
  const [detailedAddress, setDetailedAddress] = useState('')
  const [openTime, setOpenTime] = useState('')
  const [closeTime, setCloseTime] = useState('')
  const [description, setDescription] = useState('')
  const [avatar, setAvatar] = useState(null)
  const [images, setImages] = useState([])

  const handleAvatarChange = (file) => {
    setAvatar(file)
  }

  const handleImagesChange = (files) => {
    setImages(files)
  }

  const handleSellerRegister = async () => {
    const formData = new FormData()

    const infoAccount = {
      name,
      role: 'seller',
      address: `${detailedAddress}, ${district}, TP. Hồ Chí Minh`,
      password_account: password,
      name_account: username,
      email,
      phone,
    }

    const infoRestaurant = {
      name: restaurantName,
      address: {
        city: 'TP. Hồ Chí Minh',
        street: detailedAddress,
        borough: district,
        zip: '',
      },
      phone: restaurantPhone,
      time_close: closeTime,
      time_open: openTime,
      description,
    }

    formData.append('infoAccount', JSON.stringify(infoAccount))
    formData.append('infoRestaurant', JSON.stringify(infoRestaurant))

    if (avatar) formData.append('avatar', avatar)
    images.forEach((image) => formData.append('images', image))

    try {
      const res = await authApi.sellerRegister(formData)
      console.log(res)
      toast.success('Đăng ký thành công!')
    } catch (error) {
      console.error(error)
      toast.error('Đã xảy ra lỗi trong quá trình đăng ký!')
    }
  }

  return (
    <div className='w-full justify-center'>
      <div className="block text-center text-primary text-6xl font-medium font-['Oswald'] uppercase leading-[100px] my-10">
        Đăng kí bán hàng
      </div>

      <NameTextField
        id='name'
        label='Họ và tên'
        value={name}
        handleChange={(e) => setName(e.target.value)}
      />
      <EmailTextField
        id='email'
        label='Email'
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <NumericTextField
        id='phone'
        label='Số điện thoại'
        value={phone}
        handleChange={(e) => setPhone(e.target.value)}
      />
      <RequiredTextField
        id='address'
        label='Địa chỉ'
        value={address}
        handleChange={(e) => setAddress(e.target.value)}
      />
      <RequiredTextField
        id='username'
        label='Tên tài khoản'
        value={username}
        handleChange={(e) => setUsername(e.target.value)}
      />
      <PasswordTextField
        id='password'
        label='Mật khẩu'
        confirm='true'
        value={password}
        handleChange={(e) => setPassword(e.target.value)}
      />
      <RequiredTextField
        id='restaurantName'
        label='Tên quán'
        value={restaurantName}
        handleChange={(e) => setRestaurantName(e.target.value)}
      />
      <NumericTextField
        id='restaurantPhone'
        label='Số điện thoại của quán'
        value={restaurantPhone}
        handleChange={(e) => setRestaurantPhone(e.target.value)}
      />

      <div className='flex justify-between gap-4 mx-auto w-[500px] my-5'>
        <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              '& .MuiInputBase-input.Mui-disabled': {
                WebkitTextFillColor: '#333333',
              },
            },
            '& .MuiOutlinedInput-root.Mui-disabled fieldset.MuiOutlinedInput-notchedOutline': {
              borderWidth: '2px',
            },
          }}
          disabled
          value='TP. Hồ Chí Minh'
        />
        <CustomSelect
          id='district'
          label='Quận'
          options={districtsOptions}
          value={district}
          handleChange={setDistrict}
        />
      </div>

      <RequiredTextField
        id='detailedAddress'
        label='Nhập địa chỉ chi tiết (không bao gồm quận)'
        value={detailedAddress}
        handleChange={(e) => setDetailedAddress(e.target.value)}
      />

      <div className='flex justify-between gap-10 mx-auto w-[500px] my-5'>
        <TimeInput
          id='openTime'
          label='Giờ mở cửa'
          value={openTime}
          handleChange={(e) => setOpenTime(e.target.value)}
        />
        <TimeInput
          id='closeTime'
          label='Giờ đóng cửa'
          value={closeTime}
          handleChange={(e) => setCloseTime(e.target.value)}
        />
      </div>

      <RequiredTextField
        id='description'
        label='Nhập mô tả/ lời giới thiệu của quán'
        value={description}
        handleChange={(e) => setDescription(e.target.value)}
      />

      <div className='flex justify-between items-center mx-auto w-[500px] my-5'>
        <label
          htmlFor='avatar-upload'
          className='block text-sm font-medium leading-6 text-primaryText'
        >
          Đính kèm ảnh của quán
        </label>
        <div className='flex w-[300px] justify-center rounded-lg border-2 border-dashed border-gray-900/25 px-6 py-10'>
          <ImageUploader maxImages={1} handleAvatarChange={handleAvatarChange} />
        </div>
      </div>

      <div className='flex justify-between items-center mx-auto w-[500px] my-5'>
        <label
          htmlFor='images-upload'
          className='block text-sm font-medium leading-6 text-primaryText'
        >
          Đính kèm 4 ảnh nổi bật
        </label>
        <div className='flex w-[300px] justify-center rounded-lg border-2 border-dashed border-gray-900/25 px-6 py-10'>
          <ImageUploader maxImages={4} handleImagesChange={handleImagesChange} />
        </div>
      </div>

      <div className='flex justify-center my-5'>
        <Button
          id='submit-button'
          variant='outline'
          className="w-36 h-12 rounded-full bg-primary hover:bg-primary/80 text-center text-white text-xl font-bold font-['Roboto'] leading-[30px]"
          onClick={handleSellerRegister}
        >
          Đăng ký
        </Button>
      </div>
    </div>
  )
}

export default SellerRegisterForm
