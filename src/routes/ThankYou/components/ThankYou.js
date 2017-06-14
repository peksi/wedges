import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

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
        {props.reduce}
      </div>
      <div className='col-sm-6 text-center'>
        <Button>
          I prefer this basket
        </Button>

        <h3 className='text-center'>Basket 2</h3>
        {props.add}
      </div>

    </div>
  </div>
)

ThankYou.propTypes = {
  add: React.PropTypes.string,
  reduce: React.PropTypes.string
}

// const mapDispatchToProps = {
//   // TODO: preferred value
// }

const mapStateToProps = (state) => ({
  reduce : state.reduce.reducedValues,
  add: state.add.addedValues
})

export default connect(mapStateToProps)(ThankYou)
