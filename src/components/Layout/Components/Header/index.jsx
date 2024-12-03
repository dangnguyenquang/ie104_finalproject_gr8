import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '~/components/ui/Button'
import LoginModal from '../_components/LoginModal'

import Logo from '~/assets/icons/logo.svg'
import { routes } from '~/configs'

const Header = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={`z-40 w-full fixed top-0 left-0 py-[13px] px-[30px] md:px-[40px] lg:px-[60px] flex justify-between items-center bg-primary transition-all duration-300 ${
        scrolled
          ? 'shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-b-[20px]'
          : 'shadow-none rounded-b-none'
      }`}
    >
      <div className='gap-[70px] flex items-center'>
        <NavLink to={routes.HOME}>
          <img src={Logo} alt='Yummy logo' className='max-md:w-[90px] max-lg:w-[100px]' />
        </NavLink>
        <div className='flex gap-10 max-md:hidden'>
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
      <div className='flex gap-6 max-md:hidden'>
        <Button variant='outline'>Đăng ký</Button>
        <LoginModal>
          <Button className='bg-secondary hover:bg-secondary'>Đăng nhập</Button>
        </LoginModal>
      </div>

      <button
        className='hidden max-md:block text-white text-2xl focus:outline-none'
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </div>
  )
}

export default Header
