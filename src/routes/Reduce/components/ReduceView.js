import React from 'react'
import BatchViewContainer from './BatchView'

export const ReduceView = () => (
  <div className='row'>
  <div className='description text-center' style={{fontSize: 22 + 'px'}}>Please add 8-x strategies to your basket.</div>
  <div className='description text-center' style={{fontSize: 22 + 'px'}}>Please remove 8-x strategies from your basket.</div>
  <div className='description text-center' style={{fontSize: 22 + 'px'}}>You now have the required number of strategies in your basket. Please revise your solutions.</div>
    <div className='col-sm-6'>
      <h3>X Strategies available</h3>
      <BatchViewContainer direction={'reduce'} />
    </div>
    <div className='col-sm-6'>
      <h3>Basket</h3>
      <BatchViewContainer direction={'return'} />
    </div>
  </div>
)

export default ReduceView
