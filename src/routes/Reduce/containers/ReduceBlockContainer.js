import { connect } from 'react-redux'
import { reduce } from '../modules/reduce'

import WedgeBlock from '../../../components/WedgeBlock'

const mapDispatchToProps = {
  reduce
}

const mapStateToProps = (state) => ({
  reduce : state.reduce
})

export default connect(mapStateToProps, mapDispatchToProps)(WedgeBlock)
