import { RouteObject } from 'react-router-dom'
import { ROUTER } from '~/router/routerConfig'
import HomePage from '~/pages/home'
import About from '~/pages/about'
import Products from '~/pages/products'

const routes: RouteObject[] = [
  {
    path: ROUTER.home,
    element: <HomePage />
  },
  {
    path: ROUTER.about,
    element: <About />
  },
  {
    path: ROUTER.products,
    element: <Products />
  },
  {
    path: '*',
    element: <div>Not Found</div>
  }
]

export default routes
