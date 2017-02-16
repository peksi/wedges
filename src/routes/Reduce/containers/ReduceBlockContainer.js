import { connect } from 'react-redux'
import { removeValue, restoreValue, highlightWedge } from '../modules/reduce'

import ReduceBlock from '../components/ReduceBlock'

const mapDispatchToProps = {
  removeValue,
  restoreValue,
  highlightWedge
}

const mapStateToProps = (state) => ({
  reduce : state.reduce
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduceBlock)
