import Home from '~/pages/Home'
import AboutUs from '~/pages/AboutUs'
import Menu from '~/pages/Menu'
import SellerRegisterForm from '~/pages/SellerRegisterForm'
import { routes } from '~/configs'
import { patch } from '@mui/material'

const publicRoutes = [
  { path: routes.HOME, component: Home },
  { path: routes.ABOUTUS, component: AboutUs },
  { path: routes.SELLER_REGISTER, component: SellerRegisterForm },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
