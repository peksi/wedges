// import HomeView from './components/HomeView'
import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const HomeView = require('./components/HomeView').default
      const reducer = require('./modules/home').default

      injectReducer(store, { key: 'home', reducer })

      cb(null, HomeView)
    }, 'reduce')
  }
})
