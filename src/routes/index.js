import Home from '~/pages/Home'
import AboutUs from '~/pages/AboutUs'
import Menu from '~/pages/Menu'
import SellerRegisterForm from '~/pages/SellerRegisterForm'
import CustomerRegisterForm from '~/pages/CustomerRegisterForm'
import ourCommit from '~/pages/ourCommit'
import privacyPolicy from '~/pages/privacyPolicy'
import orderInstructions from '~/pages/OrderInstructions'
import contactInstructions from '~/pages/ContactInstructions'
import operatingPolicy from '~/pages/OperatingPolicy'
import { routes } from '~/configs'

const publicRoutes = [
  { path: routes.HOME, component: Home },
  { path: routes.MENU, component: Menu },
  { path: routes.ABOUTUS, component: AboutUs },
  { path: routes.OURCOMMIT, component: ourCommit },
  { path: routes.PRIVACYPOLICY, component: privacyPolicy },
  { path: routes.ORDERINSTRUCTIONS, component: orderInstructions },
  { path: routes.CONTACTINSTRUCTIONS, component: contactInstructions },
  { path: routes.OPERATINGPOLICY, component: operatingPolicy },
  { path: routes.SELLER_REGISTER, component: SellerRegisterForm },
  { path: routes.CUSTOMER_REGISTER, component: CustomerRegisterForm },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
