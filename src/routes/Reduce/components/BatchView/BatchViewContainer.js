import { connect } from 'react-redux'
// import { reduce } from '../../modules/reduce'

import BatchView from './BatchView'

const mapDispatchToProps = {
  // reduce
}

const mapStateToProps = (state) => ({
  reduce : state.reduce
})

export default connect(mapStateToProps, mapDispatchToProps)(BatchView)
