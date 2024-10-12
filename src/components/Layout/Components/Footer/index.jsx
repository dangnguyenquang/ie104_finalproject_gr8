import { Link } from 'react-router-dom'
import ApartmentIcon from '@mui/icons-material/Apartment'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import VerifiedIcon from '@mui/icons-material/Verified'
import EmailIcon from '@mui/icons-material/Email'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'

import footerImage from '~/assets/images/footer.png'
import Logo from '~/assets/icons/logo.svg'
import { routes } from '~/configs'

const Footer = () => {
  return (
    <div
      className='min-w-screen h-[500px] py-[50px] px-28'
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className='flex justify-between w-full items-center text-white pl-10'>
        <img src={Logo} alt='Yummy logo' style={{ width: '125px', height: 'auto' }} />
        <div className='grid grid-cols-3 gap-x-[80px] gap-y-[1px]'>
          <div>
            <p className='text-[20px] font-bold'>Về Yummy</p>
            <div className='text-sm flex flex-col mt-3 text-[#C9C9C9] gap-[5px]'>
              <Link to={routes.ABOUTUS} className='hover:underline'>
                Giới thiệu
              </Link>
              <Link to={routes.ABOUTUS} className='hover:underline'>
                Cam kết của Yummy
              </Link>
            </div>
          </div>
          <div>
            <p className='text-[20px] font-bold'>Chính sách</p>
            <div className='text-sm flex flex-col mt-3 text-[#C9C9C9] gap-[5px]'>
              <Link to={routes.ABOUTUS} className='hover:underline'>
                Chính sách hoạt động
              </Link>
              <Link to={routes.ABOUTUS} className='hover:underline'>
                Chính sách và quy trình
              </Link>
              <Link to={routes.ABOUTUS} className='hover:underline'>
                Chính sách bảo mật thông tin
              </Link>
            </div>
          </div>
          <div>
            <p className='text-[20px] font-bold'>Hướng dẫn</p>
            <div className='text-sm flex flex-col mt-3 text-[#C9C9C9] gap-[5px]'>
              <Link to={routes.ABOUTUS} className='hover:underline'>
                Hướng dẫn đặt món
              </Link>
              <Link to={routes.ABOUTUS} className='hover:underline'>
                Hướng dẫn liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div class='border-t border-white w-full my-12'></div>

      <div className='pl-10 flex flex-col gap-2 max-w-[470px] text-white'>
        <div className='flex gap-4 items-center'>
          <ApartmentIcon />
          <p className='text-[28px] font-semibold'>CÔNG TY CỔ PHẦN YUMMY</p>
        </div>
        <div className='flex gap-4 items-center'>
          <FmdGoodIcon />
          <p className='text-sm'>
            Số 16, đường Hoàng Diệu 2, phường Linh Trung, TP.Thủ Đức, TP. Hồ Chí Minh
          </p>
        </div>
        <div className='flex gap-4 items-center'>
          <VerifiedIcon />
          <p className='text-sm'>
            Giấy CN DKDN số: 8386365078 do Sở Kế hoạch và Đầu tư TP.HCM cấp 12/10/2024
          </p>
        </div>
        <div className='flex gap-4 items-center'>
          <EmailIcon />
          <p className='text-sm'>Email: nhomnaylanhom8@gmail.com</p>
        </div>
        <div className='flex gap-4 items-center'>
          <LocalPhoneIcon />
          <p className='text-sm'>SDT: 0956575859</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
