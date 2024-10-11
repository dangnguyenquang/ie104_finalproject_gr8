import { NavLink } from 'react-router-dom'
import { Button } from '~/components/ui/Button'

import Logo from '~/assets/icons/logo.svg'
import { routes } from '~/configs'

const Header = () => {
  return (
    <div className='w-full py-4 px-[60px] flex justify-between items-center bg-primary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
      <div className='gap-[70px] flex items-center'>
        <img src={Logo} alt='Yummy logo' style={{ maxWidth: '125px', height: 'auto' }}/>
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
            to={routes.MENU}
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
        <Button className='bg-secondary hover:bg-secondary' >Đăng nhập</Button>
      </div>
    </div>
  )
}

export default Header
