import { connect } from 'react-redux'
import { reduce } from '../modules/add'

import Reduce from '../components/ReduceView'

const mapDispatchToProps = {
  reduce
}

const mapStateToProps = (state) => ({
  reduce : state.reduce
})

export default connect(mapStateToProps, mapDispatchToProps)(Reduce)
