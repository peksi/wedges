import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  path: 'thankyou',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const ThankYou = require('./components/ThankYou').default
      const reducer = require('./modules/thankyou').default

      injectReducer(store, { key: 'thankyou', reducer })

      cb(null, ThankYou)
    }, 'reduce')
  }

})
