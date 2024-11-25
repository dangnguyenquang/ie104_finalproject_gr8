import Header from '../Components/Header'
import Footer from '../Components/Footer'
import AutoLogin from '~/stores/autoLogin'

export default function DefaultLayout({ children }) {
  return (
    <AutoLogin>
      <div>
        <div className='flex-col items-center w-full'>
          <Header />
          <div className='mt-16'>{children}</div>
          <Footer />
        </div>
      </div>
    </AutoLogin>
  )
}
