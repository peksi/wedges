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
      return (
        <div>
          <div className='row'>
            {
              // Remove values that already appear on the removed list
              _.filter(
                wedgesconfig.choices,
                (value) => !_.includes(this.props.add.addedValues, value.id)
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
            {this.props.add.addedValues.map((item) => {
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
  add: React.PropTypes.shape({
    addCount: React.PropTypes.number.isRequired,
    addedValues: React.PropTypes.array.isRequired
  }),
  direction: React.PropTypes.string
}
