import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './ThankYou.scss'
import { browserHistory } from 'react-router'

const ThankYou = (props) => {
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
      ? <span><h2>Please compare the two baskets you have created.</h2>
        <h2>Which one do you prefer?</h2>
        <div className='row'>
          <div className='col-sm-4 text-center' />
          <div className='col-sm-4 text-center'>
            <Button
              className='btn-lg btn-primary'
              onClick={() => {
                props.equal()
                props.addToLog(new Date().getTime(), 'submitBasketPreference')
                browserHistory.push('/form')
              }}>
            Both are equally good
          </Button>
          </div>
          <div className='col-sm-4 text-center' />
        </div>
        <div className='row'>
          <div className={removeClasses}>
            <Button
              className='btn-lg btn-primary basketbutton'
              onClick={() => {
                props.reduceBetter()
                props.addToLog(new Date().getTime(), 'submitBasketPreference')
                browserHistory.push('/form')
              }}>
              I prefer this basket
            </Button>
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
            <Button
              className='btn-lg btn-primary basketbutton'
              onClick={
              () => {
                props.addBetter()
                props.addToLog(new Date().getTime(), 'submitBasketPreference')
                browserHistory.push('/form')
              }
            }>
              I prefer this basket
            </Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou)
