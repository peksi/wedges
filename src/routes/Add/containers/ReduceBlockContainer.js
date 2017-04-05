import { connect } from 'react-redux'
import { removeValue, restoreValue, highlightWedge } from '../modules/add'

import ReduceBlock from '../components/ReduceBlock'

const mapDispatchToProps = {
  removeValue,
  restoreValue,
  highlightWedge
}

const mapStateToProps = (state) => ({
  reduce : state.add,
  highlightedWedge: state.add.highlightedWedge
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduceBlock)
