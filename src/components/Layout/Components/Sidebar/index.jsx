import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { routes } from '~/configs'
import { IoMdClose } from 'react-icons/io'
import { Button } from '~/components/ui/Button'
import LoginModal from '../_components/LoginModal'

const Sidebar = ({ isOpen, toggleSidebar }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div className='md:hidden'>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={toggleSidebar}
      ></div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 p-5 transition-transform transform flex flex-col justify-between ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          backgroundImage: 'url("src/assets/images/bg-login.png")',
        }}
      >
        <div>
          <IoMdClose
            className='text-white mb-6 font-bold text-3xl text-right cursor-pointer ml-auto'
            onClick={toggleSidebar}
          />
          <nav className='flex flex-col gap-4'>
            <NavLink
              to={routes.HOME}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-200 font-medium half-underline text-lg'
                  : 'text-white font-medium hover:text-yellow-200'
              }
              onClick={toggleSidebar}
            >
              Trang chủ
            </NavLink>
            <NavLink
              to={routes.MENU}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-200 font-medium half-underline text-lg'
                  : 'text-white font-medium hover:text-yellow-200'
              }
              onClick={toggleSidebar}
            >
              Món ăn
            </NavLink>
            <NavLink
              to={routes.ABOUTUS}
              className={({ isActive }) =>
                isActive
                  ? 'text-yellow-200 font-medium half-underline text-lg'
                  : 'text-white font-medium hover:text-yellow-200'
              }
              onClick={toggleSidebar}
            >
              Giới thiệu
            </NavLink>
          </nav>
        </div>

        <div className='flex flex-col mb-6 gap-4'>
          <Button variant='outline' className='border-primary text-primary'>
            Đăng ký
          </Button>
          <LoginModal>
            <Button className='bg-primary hover:bg-primary w-full'>Đăng nhập</Button>
          </LoginModal>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
