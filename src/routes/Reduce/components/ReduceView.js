import React from 'react'
import BatchViewContainer from './BatchView'

export const ReduceView = () => (
  <div>
    <h3>Eliminate from these</h3>
    <p>Your mission is to keep 8 most important environmental values here.</p>
    <BatchViewContainer direction={'reduce'} />
    <h3>Removed values</h3>
    <BatchViewContainer direction={'return'} />
  </div>
)

export default ReduceView
