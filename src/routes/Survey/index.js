import { injectReducer } from '../../store/reducers'

// Sync route definition
export default (store) => ({
  path: 'survey',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Survey = require('./components/Survey').default
      const reducer = require('./modules/survey').default
      injectReducer(store, { key: 'survey', reducer })

      cb(null, Survey)
    }, 'reduce')
  }
})
