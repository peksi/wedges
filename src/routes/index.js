// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Form from './Form'
import Reduce from './Reduce'
import Add from './Add'
import MiddlePage from './MiddlePage'
import ThankYou from './ThankYou'
import Survey from './Survey'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    Form(store),
    MiddlePage(store),
    Reduce(store),
    Add(store),
    ThankYou(store),
    Survey(store)
  ]
})

export default createRoutes
