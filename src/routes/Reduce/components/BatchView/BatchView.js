import React from 'react'
import _ from 'lodash'
// import { IndexLink, Link } from 'react-router'
import './BatchView.scss'
// import WedgeBlock from '../WedgeBlock'
import wedgesconfig from '../../../../../config/wedges.config.js'
import ReduceBlockContainer from '../../containers/ReduceBlockContainer'

export default class BatchView extends React.Component {
  render () {
    if (this.props.direction === 'reduce') {
      // left column
      console.log(this.props.direction)
      return (
        <div>
          <div className='row'>

            {
              // Remove values that already appear on the removed list
              _.filter(
                wedgesconfig.choices,
                (value) => !_.includes(this.props.reduce.reducedValues, value.id)
              // and map them
            ).map((item, index) => {
              return (
                <ReduceBlockContainer
                  id={item.id}
                  key={item.id}
                  description={item.description}
                  direction={this.props.direction}
                />
              )
            })}
          </div>
        </div>
      )
    } else {
      // right column
      return (
        <div>
          <div className='row'>
            {this.props.reduce.reducedValues.map((item) => {
              console.log(item)
              return (
                <ReduceBlockContainer
                  id={item}
                  key={item}
                  direction={this.props.direction}
                />
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
