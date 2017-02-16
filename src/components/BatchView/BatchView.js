import React from 'react'
// import _ from 'lodash'
// import { IndexLink, Link } from 'react-router'
import './BatchView.scss'
// import WedgeBlock from '../WedgeBlock'
import wedgesconfig from '../../../config/wedges.config.js'
import ReduceBlockContainer from '../../routes/Reduce/containers/ReduceBlockContainer'

export default class BatchView extends React.Component {
  render () {
    if (this.props.direction === 'return') {
      return (
        <div>
          <div className='row'>
            {this.props.reduce.map((item) => {
              return (
                <ReduceBlockContainer key={item} name={item} direction={this.props.direction} />
              )
            })}
          </div>
        </div>
      )
    } else {
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
}

BatchView.propTypes = {
  reduce: React.PropTypes.array,
  direction: React.PropTypes.string
}
