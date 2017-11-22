import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './ThankYou.scss'
import { browserHistory } from 'react-router'
import { Field, reduxForm } from 'redux-form'

let ThankYou = (props) => {
  let addClasses = 'col-sm-6 text-center'
  let removeClasses = 'col-sm-6 text-center'

  // if add should be first, change classes so that it places as first
  if (props.first === 'add') {
    addClasses = 'col-sm-6 text-center col-sm-pull-6'
    removeClasses = 'col-sm-6 text-center col-sm-push-6'
  }

  return (
    <div className='formview text-center'>
      {props.add.length === 8 && props.reduce.length === 8
      ? <span>
        <form>
          <div><label>You have now created two baskets shown below in a randomized order.<br /> Please compare the two baskets.</label></div>
          <span className='fieldWrapper'>
            <Field name='basketPreference' component='input' type='radio' value='a+' /> A is much better
          </span>
          <span className='fieldWrapper'>
            <Field name='basketPreference' component='input' type='radio' value='a' /> A is somewhat better
          </span>
          <span className='fieldWrapper'>
            <Field name='basketPreference' component='input' type='radio' value='equal' /> A and B are equally good
          </span>
          <span className='fieldWrapper'>
            <Field name='basketPreference' component='input' type='radio' value='b' /> B is somewhat better
          </span>
          <span className='fieldWrapper'>
            <Field name='basketPreference' component='input' type='radio' value='b+' /> B is much better
          </span>
          <span className='fieldWrapper'>
            <Field name='basketPreference' component='input' type='radio' value='no_answer' /> I don´t know
          </span>
        </form>
        <Button
          bsStyle='primary'
          className='btn-lg'
          onClick={() => {
            props.addToLog(new Date().getTime(), 'submitBasketPreference')
            browserHistory.push('/survey')
          }
        }>
          Continue
        </Button>

        <div className='row'>
          <div className={removeClasses}>
            <h2>
              Basket A
            </h2>
            <div className='thankyou-batch'>
              {props.reduce
                .sort((a, b) => a - b)
                .map((x) => {
                  return (
                    <div key={x}>
                      <img src={require('./img/action' + (x) + '.png')} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          <div className={addClasses}>
            <h2>
              Basket B
            </h2>
            <div className='thankyou-batch'>
              {props.add
                .sort((a, b) => a - b)
                .map((x) => {
                  return (
                    <div key={x}>
                      <img src={require('./img/action' + (x) + '.png')} />
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </span>

      : <p className='text-center'>
        Whoops. There has been an error and all the data have been lost.
        <br />
        <Button
          onClick={
            () => browserHistory.push('/')
          }
        >
          Continue
        </Button>
      </p>
    }

    </div>
  )
}

import { addBetter, reduceBetter, equal } from '../modules/thankyou'
import { addToLog } from '../../Home/modules/home'

ThankYou.propTypes = {
  add: React.PropTypes.array,
  addToLog: React.PropTypes.func,
  reduce: React.PropTypes.array,
  addBetter: React.PropTypes.func,
  reduceBetter: React.PropTypes.func,
  equal: React.PropTypes.func,
  first: React.PropTypes.string
}

const mapDispatchToProps = {
  addBetter, reduceBetter, equal, addToLog
}

const mapStateToProps = (state) => ({
  // Using ternary option to prevent error if user refreshes the page.
  reduce : state.reduce ? state.reduce.reducedValues : [],
  add: state.add ? state.add.addedValues : [],
  first: state.thankyou.first
})

ThankYou = connect(mapStateToProps, mapDispatchToProps)(ThankYou) //eslint-disable-line

export default reduxForm({
  form: 'lol',
  destroyOnUnmount: false
})(ThankYou)
