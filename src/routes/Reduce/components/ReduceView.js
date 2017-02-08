import React from 'react'
import BatchView from '../../../components/BatchView'

export const ReduceView = () => (
  <div>
    <h3>Eliminate from these</h3>
    <p>Your mission is to keep 8 most important environmental values here.</p>
    <BatchView direction={'reduce'} />
    <h3>Removed values</h3>
  </div>
)

export default ReduceView
