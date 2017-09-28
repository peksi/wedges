// Sync route definition
export default (store) => ({
  path: 'middlepage',

  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const MiddlePage = require('./components/MiddlePage').default
      cb(null, MiddlePage)
    }, 'middlepage')
  }
})
