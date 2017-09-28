import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import FormView from './FormView'
import BasketForm from './BasketForm'

const SubmitView = (props) => {
  const submitInfo = {
    // reducedValues: props.reduce.reducedValues,
    // reducedBasketLog: props.reduce.log,
    // addedValues: props.add.addedValues,
    // addedBasketLog: props.add.log,
    // thankyou: {
    //   left: props.thankyou.first,
    //   better: props.thankyou.better
    // }
    // surveyForm: (props.state.form.prerequisite) ? props.state.form.prerequisite.values : [],
    // basketForm: (props.state.form.basket) ? props.state.form.basket.values : []

  }

  function magicSubmit () {
    console.log(submitInfo)
    fetch('api', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitInfo)
    })
  }

  return (
    <div>
      <p className='helpbox' style={{ 'marginBottom':'2em', 'textAlign':'center' }}>
        You have now completed your decision task. Please anwer the following questions.
      </p>
      <Button
        style={{ margin: 'auto', display: 'block' }}
        className='btn btn-lg'
        onClick={() => {console.log('nextpage')}}
      >
        Next
      </Button>
      <Button
        style={{ margin: 'auto', display: 'block' }}
        className='btn btn-lg btn-success'
        onClick={() => { magicSubmit() }}
      >
        Submit
      </Button>
    </div>
  )
}

import { goForward, goBack } from '../modules/form'

SubmitView.propTypes = {
  // magicSubmit: React.PropTypes.func
}

const mapStateToProps = (state) => ({
  reduce : state.reduce,
  add: state.add,
  thankyou: state.thankyou,
  state: state
  // page: state.formview.page
})

const mapDispatchToProps = {
  goForward,
  goBack
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitView)
