import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './ThankYou.scss'
import { browserHistory } from 'react-router'

const ThankYou = (props) => (
  <div className='formview text-center'>
    <p>You created these two baskets.</p>
    <p>Use buttons to indicate your preference</p>
    <div className='row'>
      <div className='col-sm-4 text-center' />
      <div className='col-sm-4 text-center'>
        <Button onClick={() => {
          props.equal()
          browserHistory.push('/form')
        }}>
        Both are equally good
      </Button>
      </div>
      <div className='col-sm-4 text-center' />
    </div>
    <div className='row'>
      <div className='col-sm-6 text-center'>
        <Button onClick={() => {
          props.reduceBetter()
          browserHistory.push('/form')
        }}>
          I prefer this basket
        </Button>
        <h3 className='text-center'>Basket 1</h3>
        {props.reduce.map((x) => {
          return (
            <div key={x}>
              <img src={require('./img/action' + (x) + '.png')} />
            </div>
          )
        })}
      </div>
      <div className='col-sm-6 text-center'>
        <Button onClick={
          () => {
            props.addBetter()
            browserHistory.push('/form')
          }
        }>
          I prefer this basket
        </Button>

        <h3 className='text-center'>Basket 2</h3>
        {props.add.map((x) => {
          return (
            <div key={x}>
              <img src={require('./img/action' + (x) + '.png')} />
            </div>
          )
        })}

      </div>

    </div>
  </div>
)

import { addBetter, reduceBetter, equal } from '../modules/thankyou'

ThankYou.propTypes = {
  add: React.PropTypes.array,
  reduce: React.PropTypes.array,
  addBetter: React.PropTypes.func,
  reduceBetter: React.PropTypes.func,
  equal: React.PropTypes.func
}

const mapDispatchToProps = {
  addBetter, reduceBetter, equal
}

const mapStateToProps = (state) => ({
  reduce : state.reduce.reducedValues,
  add: state.add.addedValues
})

export default connect(mapStateToProps, mapDispatchToProps)(ThankYou)
