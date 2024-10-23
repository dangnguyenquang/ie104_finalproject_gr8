import * as React from 'react'
import { Button } from '~/components/ui/Button'
import { MultiImageUploader } from '~/components/ui/MultiImageUploader'
import { SingleImageUploader } from '~/components/ui/SingleImageUploader'
import RequiredTextField from '~/components/ui/RequiredTextField'
import NumericTextField from '~/components/ui/NumericTextField'
import CustomSelect from '~/components/ui/CustomSelect'
import TimeInput from '~/components/ui/TimeInput'
import TextField from '@mui/material/TextField'
import NameTextField from '~/components/ui/NameTextField'
import ImageUploading from 'react-images-uploading'

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

  const districtsOptions = Districts.map((district, index) => ({
    label: district,
    value: index + 1,
  }))

  return (
    <div className='w-full justify-center'>
      {/* Đăng ký bán hàng */}
      <div className="block text-center text-primary text-6xl font-medium font-['Oswald'] uppercase leading-[100px] my-10">
        Đăng kí bán hàng
      </div>

      {/* Tên quán */}
      <NameTextField label='Tên quán' />

      {/* Số điện thoại của quán */}
      <NumericTextField label='Số điện thoại của quán' />

      {/* Địa chỉ của quán */}
      <div className='flex justify-between gap-4 mx-auto w-[500px] my-5'>
        <TextField
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
            },
            '& .MuiInputLabel-root': {
              color: '#7D0600',
            },
          }}
          disabled
          defaultValue='TP. Hồ Chí Minh'
        />
        <CustomSelect label='Quận' options={districtsOptions} />
      </div>

      {/* Địa chỉ chi tiết của quán */}
      <RequiredTextField label='Nhập địa chỉ chi tiết' />

      {/* Giở mở/đóng cửa */}
      <div className='flex justify-between gap-10 mx-auto w-[500px] my-5'>
        {/* Giờ mở cửa */}
        <TimeInput label='Giờ mở cửa' />

        {/* Giờ đóng cửa */}
        <TimeInput label='Giờ đóng cửa' />
      </div>

      {/* Nhập mô tả/lời giới thiệu của quán */}
      <RequiredTextField label='Nhập mô tả/ lời giới thiệu của quán' />

      <div className='flex justify-between items-center mx-auto w-[500px] my-5'>
        <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-primary'>
          Đính kèm ảnh của quán
        </label>
        <div className='flex w-[300px] justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
          <SingleImageUploader />
        </div>
      </div>

      {/* Đính kèm 4 ảnh nổi bật */}
      <div className='flex justify-between items-center mx-auto w-[500px] my-5'>
        <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-primary'>
          Đính kèm 4 ảnh nổi bật
        </label>
        <div className='flex w-[300px] justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
          <MultiImageUploader />
        </div>
      </div>

      <div className='flex justify-center my-5'>
        <Button
          variant='outline'
          className="bg-primary hover:bg-primary/80 text-base font-normal font-['Roboto'] leading-[30px]"
        >
          Đăng ký
        </Button>
      </div>
    </div>
  )
}

export default SellerRegisterForm
