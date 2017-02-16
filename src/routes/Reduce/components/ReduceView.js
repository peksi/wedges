import React from 'react'
import BatchViewContainer from './BatchView'
import InfoBlock from './InfoBlock'

export const ReduceView = () => (
  <div>
    <h3>Info</h3>
    <InfoBlock />
    <h3>Values</h3>
    <p>Keep 8 of these. Remove others by clicking them.</p>
    <BatchViewContainer direction={'reduce'} />
    <h3>Removed values</h3>
    <p>These are the values that you have already selected out. You can put them back by clicking them.</p>
    <BatchViewContainer direction={'return'} />
  </div>
)

export default ReduceView
