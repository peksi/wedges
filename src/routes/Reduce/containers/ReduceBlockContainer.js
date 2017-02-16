import { connect } from 'react-redux'
import { removeValue } from '../modules/reduce'

import ReduceBlock from '../components/ReduceBlock'

const mapDispatchToProps = {
  removeValue
}

const mapStateToProps = (state) => ({
  reduce : state.reduce
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduceBlock)
