import React from 'react'
import BatchViewContainer from './BatchView'

export const ReduceView = () => (
  <div className='row'>
  <div className='col-sm-6'>
    <h3>Create a portfolio of 8 wedges</h3>
    <p>Remove wedges by clicking them.</p>
    <BatchViewContainer direction={'reduce'} />
  </div>
  <div className='col-sm-6'>
    <h3>Removed wedges</h3>
    <p>These are the wedges that you have already selected out. You can put restore wedges by clicking them.</p>
    <BatchViewContainer direction={'return'} />
  </div>
  </div>
)

export default ReduceView
