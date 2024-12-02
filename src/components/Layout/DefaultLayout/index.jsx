import { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../Components/Footer'
import Sidebar from '../Components/Sidebar'
import AutoLogin from '~/stores/autoLogin'

export default function DefaultLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <AutoLogin>
      <div className='flex-col items-center w-full'>
        <Header toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className='mt-16'>{children}</div>
        <Footer />
      </div>
    </AutoLogin>
  )
}
