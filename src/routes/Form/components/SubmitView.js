import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import FormView from './FormView'

const SubmitView = (props) => {
  const submitInfo = {
    reducedValues: props.reduce.reducedValues,
    reducedBasketLog: props.reduce.log,
    addedValues: props.add.addedValues,
    addedBasketLog: props.add.log,
    thankyou: {
      left: props.thankyou.first,
      better: props.thankyou.better
    },
    form: (props.state.form.prerequisite) ? props.state.form.prerequisite.values : []
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
      <FormView />
      <Button
        style={{ margin: 'auto', display: 'block' }}
        className='btn btn-success'
        onClick={() => { magicSubmit() }}
      >
        Submit
      </Button>
    </div>
  )
}

SubmitView.propTypes = {
  // magicSubmit: React.PropTypes.func
}

const mapStateToProps = (state) => ({
  reduce : state.reduce,
  add: state.add,
  thankyou: state.thankyou,
  state: state
})

export default connect(mapStateToProps)(SubmitView)
