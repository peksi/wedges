// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Form from './Form'
import CounterRoute from './Counter'
import Reduce from './Reduce'
import MiddlePage from './MiddlePage'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home,
  childRoutes : [
    Form,
    MiddlePage,
    CounterRoute(store),
    Reduce(store)
  ]
})

export default createRoutes
