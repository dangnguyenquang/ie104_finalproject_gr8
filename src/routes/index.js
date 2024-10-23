import Home from '~/pages/Home'
import SellerRegisterForm from '~/pages/SellerRegisterForm'
import CustomerRegisterForm from '~/pages/CustomerRegisterForm'
import { routes } from '~/configs'

const publicRoutes = [
  { path: routes.HOME, component: Home },
  { path: routes.SELLER_REGISTER, component: CustomerRegisterForm},
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
