// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Form from './Form'
import Reduce from './Reduce'
import Add from './Add'
import MiddlePage from './MiddlePage'
import ThankYou from './ThankYou'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    Form,
    MiddlePage,
    Reduce(store),
    Add(store),
    ThankYou(store)
  ]
})

export default createRoutes
