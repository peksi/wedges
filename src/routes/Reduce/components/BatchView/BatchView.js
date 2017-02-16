import React from 'react'
import _ from 'lodash'
// import { IndexLink, Link } from 'react-router'
import './BatchView.scss'
// import WedgeBlock from '../WedgeBlock'
import wedgesconfig from '../../../../../config/wedges.config.js'
import ReduceBlockContainer from '../../containers/ReduceBlockContainer'

export default class BatchView extends React.Component {
  render () {
    if (this.props.direction === 'return') {
      return (
        <div>
          Count {this.props.reduce.reduceCount}
          <div className='row'>
            {this.props.reduce.reducedValues.map((item) => {
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
            {
              // Remove values that already appear on the removed list
              _.filter(
                wedgesconfig.choices,
                (value) => !_.includes(this.props.reduce.reducedValues, value)
              // and map them
              ).map((item) => {
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
  reduce: React.PropTypes.shape({
    reduceCount: React.PropTypes.number.isRequired,
    reducedValues: React.PropTypes.array.isRequired
  }),
  direction: React.PropTypes.string
}
