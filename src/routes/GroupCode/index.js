import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'groupcode',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const GroupCode = require('./components/GroupCode').default
      const reducer = require('./modules/groupcode').default
      injectReducer(store, { key: 'groupcode', reducer })

      cb(null, GroupCode)
    }, 'groupcode')
  }
})
