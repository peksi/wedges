// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout'
import Home from './Home'
import Form from './Form'
import Reduce from './Reduce'
import Results from './Results'
import Add from './Add'
import MiddlePage from './MiddlePage'
import ThankYou from './ThankYou'
import Survey from './Survey'
import Support from './Support'
import GroupCode from './GroupCode'
import AfterSubmit from './AfterSubmit'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Home(store),
  childRoutes : [
    Add(store),
    Form(store),
    GroupCode(store),
    MiddlePage(store),
    Reduce(store),
    Results(store),
    Survey(store),
    ThankYou(store),
    AfterSubmit,
    Support
  ]
})

export default createRoutes
