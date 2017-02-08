import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'reduce',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers/ReduceContainer').default
      const reducer = require('./modules/reduce').default

      injectReducer(store, { key: 'reduce', reducer })

      cb(null, Counter)
    }, 'reduce')
  }
})
