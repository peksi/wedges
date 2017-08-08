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
      body: submitInfo
    })
  }

  return (
    <div>
      <FormView />
      <Button
        onClick={() => { magicSubmit() }}
      >
        Golden Submit
      </Button>
      <div>
        Lol
      </div>
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
