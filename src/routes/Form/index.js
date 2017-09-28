import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path: 'form',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const SubmitView = require('./components/SubmitView').default
      const reducer = require('./modules/form')
      injectReducer(store, { key: 'formview', reducer })

      cb(null, SubmitView)
    }, 'reduce')
  }
})
