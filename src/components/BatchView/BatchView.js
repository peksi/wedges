import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './BatchView.scss'
import WedgeBlock from '../WedgeBlock'
import wedgesconfig from '../../../config/wedges.config.js'

export const BatchView = () => (
  <div>
    <div className='row'>
      {wedgesconfig.choices.map((item) => {
        return (
          <WedgeBlock key={item} name={item} remove />
        )
      })}
    </div>
  </div>
)

export default BatchView
