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
              _.map(this.props.add.initialOrder, (num) => {
                if (!_.includes(this.props.add.addedValues, num)) {
                  return (
                    <ReduceBlockContainer
                      id={wedgesconfig.choices[num - 1].id}
                      key={wedgesconfig.choices[num - 1].id}
                      description={wedgesconfig.choices[num - 1].description}
                      direction={this.props.direction}
                    />
                  )
                }
              })
            }
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
    addedValues: React.PropTypes.array.isRequired,
    initialOrder: React.PropTypes.array.isRequired
  }),
  direction: React.PropTypes.string
}
