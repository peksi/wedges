import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'results',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const GroupCode = require('./components/Results').default
      const reducer = require('./modules/results').default
      injectReducer(store, { key: 'results', reducer })

      cb(null, GroupCode)
    }, 'results')
  }
})
