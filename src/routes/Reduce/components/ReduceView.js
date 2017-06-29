import React from 'react'
import BatchViewContainer from './BatchView'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import './ReduceView.scss'

// import wedgesconfig from '../../../../config/wedges.config.js'

export const ReduceView = (props) => (
  <div className='row'>
    {props.basketHidden
      ? <Button onClick={() => { console.log('show'); props.showBasket() }}> Next </Button>
       : ''}
    {(!props.basketHidden && props.reduceCount > 8)
      ? <div className='description text-center' style={{ fontSize: 22 + 'px' }}>
          You have {props.reduceCount} strategies in your basket. Please remove {props.reduceCount - 8}.
      </div> : ''}
    {(props.reduceCount === 8)
      ? <div className='description text-center' style={{ fontSize: 22 + 'px' }}>
          You now have the required number of strategies in your basket.
          You can still make changes. <br /> If you are happy with your basket, press confirm.
          <Link to='/middlepage'>
            <Button> Confirm </Button>
          </Link>
      </div> : ''}
    {(props.reduceCount < 8) ? <div className='description text-center' style={{ fontSize: 22 + 'px' }}>
        There are {8 - props.reduceCount} strategies missing from your basket.
      </div> : ''}
    <div className='col-sm-6'>
      <h3>Removed strategies</h3>
      <p>Press the add button to return a strategy into the basket</p>
      {props.basketHidden ? ''
      : <BatchViewContainer direction={'reduce'} />
      }
    </div>
    <div className='col-sm-6'>
      <h3>Basket</h3>
      <p>Press the remove button to remove a strategy from the basket</p>
      {props.basketHidden ? ''
      : <BatchViewContainer direction={'return'} />
      }
    </div>
  </div>
)

import { connect } from 'react-redux'
import { showBasket } from '../modules/reduce'

const mapDispatchToProps = {
  showBasket
}

const mapStateToProps = (state) => ({
  basketHidden: state.reduce.basketHidden,
  reduceCount : state.reduce.reduceCount
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduceView)

ReduceView.propTypes = {
  basketHidden: React.PropTypes.bool.isRequired,
  reduceCount: React.PropTypes.number.isRequired,
  showBasket: React.PropTypes.func.isRequired
}
