import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'add',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Add = require('./containers/AddContainer').default
      const reducer = require('./modules/add').default
      injectReducer(store, { key: 'add', reducer })

      cb(null, Add)
    }, 'reduce')
  }
})
