import React from 'react'
import BatchViewContainer from './BatchView'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import wedgesconfig from '../../../../config/wedges.config.js'

export const ReduceView = (props) => (
  <div className='row'>

  {(props.addCount > 8) ? <div className='description text-center' style={{fontSize: 22 + 'px'}}>Please remove {props.addCount - 8} strategies from your basket.</div> : ''}
  {(props.addCount == 8)
    ? <div className='description text-center' style={{fontSize: 22 + 'px'}}>
        You now have the required number of strategies in your basket. Please revise your solutions.
        <br /> Press confirm when you are finished.
        <Link to='/middlepage'>
          <Button> Confirm </Button>
        </Link>
      </div> : ''}
  {(props.addCount < 8) ? <div className='description text-center' style={{fontSize: 22 + 'px'}}>Please add {8 - props.addCount} strategies to your basket.</div> : ''}
    <div className='col-sm-6'>
      <h3>{wedgesconfig.choices.length - props.addCount} Strategies available</h3>
      <BatchViewContainer direction={'reduce'} />
    </div>
    <div className='col-sm-6'>
      <h3>Basket</h3>
      <BatchViewContainer direction={'return'} />
    </div>
  </div>
)

import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  addCount : state.add.addCount
})

export default connect(mapStateToProps)(ReduceView)
