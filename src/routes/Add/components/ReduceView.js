import React from 'react'
import BatchViewContainer from './BatchView'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import wedgesconfig from '../../../../config/wedges.config.js'

export const ReduceView = (props) => (
  <div className='row'>
    <div className='description text-center' style={{fontSize: 22 + 'px'}}>Decision task: Create a basket of 8 strategies based on your preferences. <br />
    The starting point is that you have no strategies in the basket.
  </div>

    {(props.addCount > 8)
      ? <div className='description text-center' style={{ fontSize: 22 + 'px' }}>
          Please remove {props.addCount - 8} strategies from your basket.
        </div> : ''}
    {(props.addCount == 8)
      ? <div className='description text-center' style={{ fontSize: 22 + 'px' }}>
      You now have the required number of strategies in your basket.
      You can still make changes. <br /> When you are happy with your basket, press confirm.
          <Link to='/thankyou'>
            <Button> Confirm </Button>
          </Link>
        </div> : ''}
    {(props.addCount < 8) ? <div className='description text-center' style={{fontSize: 22 + 'px'}}>
      There are {8 - props.addCount} strategies missing from your basket.</div> : ''}
      <div className='col-sm-6'>
        <h3>Strategies available</h3>
        <p>Use the add button to return a strategy into the basket</p>
        <BatchViewContainer direction={'reduce'} />
      </div>
      <div className='col-sm-6'>
        <h3>Basket</h3>
        <p>Use the remove button to remove a strategy from the basket</p>
        <BatchViewContainer direction={'return'} />
      </div>
  </div>
)

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  addCount : state.add.addCount
})

export default connect(mapStateToProps)(ReduceView)
