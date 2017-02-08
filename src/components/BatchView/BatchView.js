import React from 'react'
import _ from 'lodash'
// import { IndexLink, Link } from 'react-router'
import './BatchView.scss'
// import WedgeBlock from '../WedgeBlock'
import wedgesconfig from '../../../config/wedges.config.js'
import ReduceBlockContainer from '../../routes/Reduce/containers/ReduceBlockContainer'

export class BatchView extends React.Component {
  render () {
    return (
      <div>
        <div className='row'>
          {wedgesconfig.choices.map((item) => {
            return (
              <ReduceBlockContainer key={item} name={item} direction={this.props.direction} />
            )
          })}
        </div>
      </div>
    )
  }
}

export default BatchView
