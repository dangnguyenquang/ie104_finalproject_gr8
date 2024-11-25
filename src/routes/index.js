import Home from '~/pages/Home'
import AboutUs from '~/pages/AboutUs'
import Menu from '~/pages/Menu'
import SellerRegisterForm from '~/pages/SellerRegisterForm'
import CustomerRegisterForm from '~/pages/CustomerRegisterForm'
import OrderTrackingPage from '~/pages/OrderTracking'
import RestaurantDashboard from '~/pages/Restaunrant'
import { routes } from '~/configs'

const publicRoutes = [
  { path: routes.HOME, component: Home },
  { path: routes.MENU, component: Menu },
  { path: routes.ABOUTUS, component: AboutUs },
  { path: routes.SELLER_REGISTER, component: SellerRegisterForm },
  { path: routes.CUSTOMER_REGISTER, component: CustomerRegisterForm },
  { path: routes.ORDER_TRACKING, component: OrderTrackingPage },
]
const privateRoutes = [{ path: routes.RESTAURANT_DASHBOARD, component: RestaurantDashboard }]

export { publicRoutes, privateRoutes }
