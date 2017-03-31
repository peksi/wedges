import React from 'react'
import BatchViewContainer from './BatchView'

export const ReduceView = () => (
  <div className='row'>
    <div className='col-sm-6'>
      <h3>Strategies that are not selected</h3>
      <BatchViewContainer direction={'reduce'} />
    </div>
    <div className='col-sm-6'>
      <h3>Your choices</h3>
      <BatchViewContainer direction={'return'} />
    </div>
  </div>
)

export default ReduceView
