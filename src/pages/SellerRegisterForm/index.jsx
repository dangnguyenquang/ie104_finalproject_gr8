import * as React from 'react'
import { Button } from '~/components/ui/Button'
import { MultiImageUploader } from '~/components/ui/MultiImageUploader'
import { SingleImageUploader } from '~/components/ui/SingleImageUploader'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import ImageUploading from 'react-images-uploading'

const options = [
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

const SellerRegisterForm = () => {
  const [district, setDistrict] = React.useState('')
  const handleChange = (event) => {
    setDistrict(event.target.value)
  }

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0]
      setImage({
        url: URL.createObjectURL(img),
        file: img,
      })
    }
  }

  const [images, setImages] = React.useState([])
  const maxNumber = 4
  const onChange = (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex)
    setImages(imageList)
  }

  return (
    <div className='w-full justify-center'>
      {/* Đăng ký bán hàng */}
      <div className="block text-center text-[#7d0600] text-6xl font-medium font-['Oswald'] uppercase leading-[100px] my-10">
        Đăng kí bán hàng
      </div>

      {/* Tên quán */}
      <div className='mx-auto w-[500px] my-5'>
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
          }}
          id='outlined-basic'
          label='Tên quán'
          variant='outlined'
        />
      </div>

      {/* Số điện thoại của quán */}
      <div className='mx-auto w-[500px] my-5'>
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
          }}
          id='outlined-basic'
          label='Số điện thoại của quán'
          variant='outlined'
        />
      </div>

      {/* Địa chỉ của quán */}
      <div className='flex justify-between gap-4 mx-auto w-[500px] my-5'>
        <TextField disabled id='outlined-disabled' defaultValue='TP. Hồ Chí Minh' />

        <FormControl fullWidth>
          <InputLabel id='shop-distinct-label'>Quận</InputLabel>
          <Select
            labelId='shop-distinct-label'
            id='shop-distinct-select'
            value={district}
            label='distinct'
            onChange={handleChange}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      {/* Địa chỉ chi tiết của quán */}
      <div className='mx-auto w-[500px] my-5'>
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
          }}
          id='outlined-basic'
          label='Địa chỉ chi tiết của quán'
          variant='outlined'
        />
      </div>

      {/* Giở mở/đóng cửa */}
      <div className='flex justify-between gap-10 mx-auto w-[500px] my-5'>
        {/* Giờ mở cửa */}
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
          }}
          id='outlined-basic'
          label='Giờ mở cửa'
          variant='outlined'
        />

        {/* Giờ đóng cửa */}
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
          }}
          id='outlined-basic'
          label='Giờ đóng cửa'
          variant='outlined'
        />
      </div>

      {/* Nhập mô tả/lời giới thiệu của quán */}
      <div className='mx-auto w-[500px] my-5'>
        <TextField
          sx={{
            margin: 'auto',
            width: '100%',
          }}
          id='outlined-basic'
          label='Nhập mô tả/lời giới thiệu của quán'
          variant='outlined'
        />
      </div>

      <div className='flex justify-between items-center mx-auto w-[500px] my-5'>
        <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-gray-900'>
          Đính kèm ảnh của quán
        </label>
        <div className='flex w-[300px] justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
          <SingleImageUploader />
        </div>
      </div>

      {/* Đính kèm 4 ảnh nổi bật */}
      <div className='flex justify-between items-center mx-auto w-[500px] my-5'>
        <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-gray-900'>
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
