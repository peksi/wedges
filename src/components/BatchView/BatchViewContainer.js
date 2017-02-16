import { connect } from 'react-redux'

import BatchView from './BatchView'

const mapStateToProps = (state) => ({
  reduce : state.reduce
})

export default connect(mapStateToProps, null)(BatchView)
