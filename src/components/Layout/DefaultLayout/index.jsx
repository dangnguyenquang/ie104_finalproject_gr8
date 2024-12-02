import Header from '../Components/Header'
import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'
export default function DefaultLayout() {
  return (
    <div>
      <div className='flex-col items-center w-full'>
        <Header />
        {/* <div>{children}</div> */}
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}
