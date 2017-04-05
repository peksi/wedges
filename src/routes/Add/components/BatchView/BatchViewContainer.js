import { connect } from 'react-redux'
// import { reduce } from '../../modules/reduce'

import BatchView from './BatchView'

const mapDispatchToProps = {
  // reduce
}

const mapStateToProps = (state) => ({
  add : state.add
})

export default connect(mapStateToProps, mapDispatchToProps)(BatchView)
