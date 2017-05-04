import React from 'react'
import { connect } from 'react-redux'

const ThankYou = (props) => (
  <div className='formview'>
    <h4>Thank you!</h4>
    <p>There are your two baskets. Which one you prefer?</p>
    <div className='row'>
      <div className='col-sm-6'>
        {props.reduce}
      </div>
      <div className='col-sm-6'>
        {props.add}
      </div>

    </div>
  </div>
)

// const mapDispatchToProps = {
//   // TODO: preferred value
// }

const mapStateToProps = (state) => ({
  reduce : state.reduce.reducedValues,
  add: state.add.addedValues
})

export default connect(mapStateToProps)(ThankYou)
