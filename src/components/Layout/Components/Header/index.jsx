import { NavLink } from 'react-router-dom'
import { Button } from '~/components/ui/Button'
import LoginModal from '../_components/LoginModal'

import Logo from '~/assets/icons/logo.svg'
import { routes } from '~/configs'

const Header = () => {
  return (
    <div className='z-10 w-full py-4 px-[60px] flex justify-between items-center bg-primary shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
      <div className='gap-[70px] flex items-center'>
        <img src={Logo} alt='Yummy logo' style={{ maxWidth: '125px', height: 'auto' }} />
        <div className='flex gap-10'>
          <NavLink
            to={routes.HOME}
            className={({ isActive }) =>
              isActive
                ? 'font-medium half-underline text-yellow-200'
                : 'text-white font-medium hover:text-yellow-200'
            }
          >
            Trang chủ
          </NavLink>
          <NavLink
            to={routes.MENU}
            className={({ isActive }) =>
              isActive
                ? 'font-medium half-underline text-yellow-200'
                : 'text-white font-medium hover:text-yellow-200'
            }
          >
            Món ăn
          </NavLink>
          <NavLink
            to={routes.ABOUTUS}
            className={({ isActive }) =>
              isActive
                ? 'font-medium half-underline text-yellow-200'
                : 'text-white font-medium hover:text-yellow-200'
            }
          >
            Giới thiệu
          </NavLink>
        </div>
      </div>
      <div className='flex gap-6'>
        <Button variant='outline'>Đăng ký</Button>
        <LoginModal>
          <Button className='bg-secondary hover:bg-secondary'>Đăng nhập</Button>
        </LoginModal>
      </div>
    </div>
  )
}

export default Header
