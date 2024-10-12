import { Button } from '~/components/ui/Button'
import Add from '~/assets/images/Add.png'

const SellerRegisterForm = () => {
  return (
    <form className='px-[60px]'>
      <div className="block text-center text-[#7d0600] text-6xl font-medium font-['Oswald'] uppercase leading-[100px] mt-[82px]">
        Đăng kí bán hàng
      </div>

      {/* Tên quán */}
      <div className='flex h-24 items-center w-full mt-[14px]'>
        <label
          htmlFor='shop-name'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Tên quán
        </label>

        <input
          id='shop-name'
          name='shop-name'
          className="flex w-[900px] h-[59px] pl-4 bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px] "
        />
      </div>

      {/* Email của quán */}
      <div className='flex h-24 items-center w-full mt-[14px]'>
        <label
          htmlFor='shop-email'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Email của quán
        </label>

        <input
          id='shop-email'
          name='shop-email'
          className="flex w-[900px] h-[59px] pl-4 bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px]"
        />
      </div>

      {/* Số điện thoại của quán */}
      <div className='flex h-24 items-center w-full mt-[14px]'>
        <label
          htmlFor='shop-number'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Số điện thoại của quán
        </label>

        <input
          id='shop-number'
          name='shop-number'
          className="flex w-[900px] h-[59px] pl-4 bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px]"
        />
      </div>

      {/* Địa chỉ của quán */}
      <div className='flex h-24 items-center w-full mt-[14px]'>
        <label
          htmlFor='shop-district'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Địa chỉ của quán
        </label>

        <span className="flex items-center justify-center w-[250px] h-[59px] mr-[15px] bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px]">
          Tp. Hồ Chí Minh
        </span>

        <select
          id='shop-district'
          name='shop-district'
          autoComplete='shop-district'
          className="flex items-center text-center w-[250px] h-[59px] px-4 bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px]"
        >
          <option>Quận 1</option>
          <option>Quận 3</option>
          <option>Quận 4</option>
          <option>Quận 5</option>
          <option>Quận 6</option>
          <option>Quận 7</option>
          <option>Quận 8</option>
          <option>Quận 10</option>
          <option>Quận 11</option>
          <option>Quận 12</option>
          <option>Quận Tân Bình</option>
          <option>Quận Tân Phú</option>
          <option>Quận Bình Tân</option>
          <option>Quận Bình Thạnh</option>
          <option>Quận Gò Vấp</option>
          <option>Quận Phú Nhuận</option>
          <option>Tp. Thủ Đức</option>
        </select>
      </div>

      {/* Nhập địa chỉ chi tiết */}
      <div className='flex h-24 items-center w-full mt-[14px]'>
        <label
          htmlFor='shop-address'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Nhập địa chỉ chi tiết
        </label>

        <input
          id='shop-address'
          name='shop-address'
          className="flex w-[900px] h-[59px] pl-4 bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px]"
        />
      </div>

      {/* Giờ mở, đóng cửa */}
      <div className='flex h-24 items-center w-full mt-[14px]'>
        {/* Giờ mở cửa */}
        <label
          htmlFor='shop-open'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Giờ mở cửa
        </label>
        <input
          id='shop-open'
          name='shop-open'
          className="flex w-[300px] h-[59px] pl-4 bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px]"
        />

        {/* Giờ đóng cửa */}
        <label
          htmlFor='shop-close'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Giờ đóng cửa
        </label>
        <input
          id='shop-close'
          name='shop-close'
          className="flex w-[300px] h-[59px] pl-4 bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px]"
        />
      </div>

      {/* Nhập mô tả/ lời giới thiệu của quán */}
      <div className='flex h-24 items-center w-full mt-[14px]'>
        <label
          htmlFor='shop-description'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Mô tả/ lời giới thiệu
        </label>

        <input
          id='shop-description'
          name='shop-description'
          className="flex w-[900px] h-[59px] pl-4 bg-[#d9d9d9]/60 rounded-[20px] text-black text-[25px] font-normal font-['Roboto'] leading-[30px]"
        />
      </div>

      {/* Đính kèm ảnh */}
      <div className='flex items-center w-full mt-[14px]'>
        {/* Đính kèm ảnh của quán */}
        <label
          htmlFor='shop-description'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          Ảnh của quán
        </label>
        <div className='flex items-center justify-center w-[300px] h-[300px] rounded-[10px] border-2 border-black'>
          <label
            htmlFor='file-upload'
            className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
          >
            <span>Upload a file</span>
            <input id='file-upload' name='file-upload' type='file' className='sr-only' />
          </label>
        </div>

        {/* Đính kèm 4 ảnh nối bật */}
        <label
          htmlFor='shop-description'
          className="flex justify-end pr-[15px] min-w-[300px] text-black text-[25px] font-bold font-['Roboto'] leading-[30px]"
        >
          4 ảnh nổi bật
        </label>
        <div className='flex items-center justify-center w-[300px] h-[300px] rounded-[10px] border-2 border-black'>
          <label
            htmlFor='file-upload'
            className='relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500'
          >
            <span>Upload a file</span>
            <input id='file-upload' name='file-upload' type='file' className='sr-only' />
          </label>
        </div>
      </div>

      <div className='flex justify-center mt-20'>
        <Button
          variant='outline'
          className="w-52 h-[75px] bg-primary hover:bg-primary/80 text-3xl font-bold font-['Roboto'] leading-[30px]"
        >
          Đăng ký
        </Button>
      </div>
    </form>
  )
}

export default SellerRegisterForm
