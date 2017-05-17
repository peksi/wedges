import { connect } from 'react-redux'
import { reduce } from '../modules/add'

import Add from '../components/AddView'

const mapDispatchToProps = {
  reduce
}

const mapStateToProps = (state) => ({
  reduce : state.reduce
})

export default connect(mapStateToProps, mapDispatchToProps)(Add)
