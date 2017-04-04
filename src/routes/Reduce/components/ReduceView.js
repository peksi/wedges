import React from 'react'
import BatchViewContainer from './BatchView'

export const ReduceView = (props) => (
  <div className='row'>

  {(props.reduceCount > 8) ? <div className='description text-center' style={{fontSize: 22 + 'px'}}>Please remove {props.reduceCount - 8} strategies from your basket.</div> : ''}
  {(props.reduceCount == 8) ? <div className='description text-center' style={{fontSize: 22 + 'px'}}>You now have the required number of strategies in your basket. Please revise your solutions.</div> : ''}
  {(props.reduceCount < 8) ? <div className='description text-center' style={{fontSize: 22 + 'px'}}>Please add {8 - props.reduceCount} strategies to your basket.</div> : ''}
    <div className='col-sm-6'>
      <h3>{props.reduceCount} Strategies available</h3>
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
  reduceCount : state.reduce.reduceCount
})

export default connect(mapStateToProps)(ReduceView)
