import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { publicRoutes, privateRoutes } from './routes'
import { DefaultLayout } from './components/Layout'
import RestaurantLayout from './components/Layout/RestaurantLayout'
import { Fragment } from 'react'
import { ToastContainer } from 'react-toastify'
import Layout from './layouts/Layout'
import AdminDashboard from './pages/adminDashboard'
import RestaurantDashboard from './pages/restaurantDashboard'
import ManageItems from './pages/restaurantDashboard/manageItems'
import ManageOrders from './pages/restaurantDashboard/manageOrders'
import ManageMails from './pages/restaurantDashboard/manageMails'
import ManageAccount from './pages/adminDashboard/manageAccount'
import ManageRestaurant from './pages/adminDashboard/manageRestaurant'
import SpecialtyFood from './pages/adminDashboard/SpecialtyFood'
import 'react-toastify/dist/ReactToastify.min.css'
// CLIENT
import Home from '~/pages/Home'
import AboutUs from '~/pages/AboutUs'
import Menu from '~/pages/Menu'
import SellerRegisterForm from '~/pages/SellerRegisterForm'
import CustomerRegisterForm from '~/pages/CustomerRegisterForm'
import OrderTrackingPage from '~/pages/OrderTracking'
import DetailsPage from './pages/DetailsPage'
import 'react-toastify/dist/ReactToastify.css'
import DetailAccount from './pages/DetailAccount'

function App() {
  return (
    <>
      {/* <Routes>
          <Route>
            {publicRoutes.map((route, index) => {
              const Page = route.component
              let Layout = DefaultLayout

              return (
                <Route
                  exact
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              )
            })}
          </Route>
        
      </Routes> */}

      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/register/seller' element={<SellerRegisterForm />} />
          <Route path='/register' element={<CustomerRegisterForm />} />
          <Route path='/order-tracking' element={<OrderTrackingPage />} />
          <Route path='/details/:id' element={<DetailsPage />} />
          <Route path='/detail-account' element={<DetailAccount />} />
        </Route>
      </Routes>

      {/* Dashboard route */}
      <Routes>
        <Route
          path='/v2/dashboard/'
          element={
            // add checkAuth
            <Layout />
          }
        >
          {/* Route Admin */}
          <Route path='admin' element={<AdminDashboard />} />
          <Route path='admin/account' element={<ManageAccount />} />
          <Route path='admin/restaurant' element={<ManageRestaurant />} />
          <Route path='admin/specialty-food' element={<SpecialtyFood />} />

          {/* Route Seller */}
          <Route path='restaurant' element={<RestaurantDashboard />} />
          <Route path='restaurant/manage-items' element={<ManageItems />} />
          <Route path='restaurant/manage-orders' element={<ManageOrders />} />
          <Route path='restaurant/send-email' element={<ManageMails />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
