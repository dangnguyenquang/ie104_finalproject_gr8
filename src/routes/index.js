import Home from '~/pages/Home'
import AboutUs from '~/pages/AboutUs'
import { routes } from '~/configs'

const publicRoutes = [
  { path: routes.HOME, component: Home },
  { path: routes.ABOUTUS, component: AboutUs },
]
const privateRoutes = []

export { publicRoutes, privateRoutes }
