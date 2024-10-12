import Home from '~/pages/Home'
import SellerRegisterForm from '~/pages/SellerRegisterForm'
import { routes } from '~/configs'

const publicRoutes = [{ path: routes.HOME, component: Home }]

const privateRoutes = []

export { publicRoutes, privateRoutes }
