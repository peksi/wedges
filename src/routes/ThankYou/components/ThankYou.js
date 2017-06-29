import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './ThankYou.scss'

const ThankYou = (props) => (
  <div className='formview text-center'>
    <p>You created these two baskets.</p>
    <p>Use buttons to indicate your preference</p>
    <div className='row'>
      <div className='col-sm-4 text-center' />
      <div className='col-sm-4 text-center'>
        <Button>
        Both are equally good
      </Button>
      </div>
      <div className='col-sm-4 text-center' />
    </div>
    <div className='row'>
      <div className='col-sm-6 text-center'>
        <Button>
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
        <Button>
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

ThankYou.propTypes = {
  add: React.PropTypes.array,
  reduce: React.PropTypes.array
}

// const mapDispatchToProps = {
//   // TODO: preferred value
// }

const mapStateToProps = (state) => ({
  reduce : state.reduce.reducedValues,
  add: state.add.addedValues
})

export default connect(mapStateToProps)(ThankYou)
