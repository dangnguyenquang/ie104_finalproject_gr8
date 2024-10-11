import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function DefaultLayout({ children }) {
  return (
    <div>
      <div className='flex-col items-center w-full'>
        <Header />
          <div>{children}</div>
        <Footer />
      </div>
    </div>
  )
}
