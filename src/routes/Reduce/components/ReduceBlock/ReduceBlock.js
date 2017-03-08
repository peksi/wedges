import React from 'react'
// import { Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'
// import { IndexLink, Link } from 'react-router'
import './ReduceBlock.scss'
import InfoBlock from '../InfoBlock'

export const ReduceBlock = (props) => (
  <div
    className='wedgeblock col-xs-6'
    onClick={() => {
      if (props.name !== props.highlightedWedge) {
        props.highlightWedge(props.name, props.direction)
      }
    }}>
    {props.direction === 'reduce'
    ? //eslint-disable-line
      <div>
        {props.name}
        <div style={{ float: 'right' }}>
          {(props.name === props.highlightedWedge) ? <InfoBlock description={props.description} /> : ''}
        </div>
      </div>
    : //eslint-disable-line
      <div className='buttonSpan'>
        <strike> {props.name} </strike>
        {(props.name === props.highlightedWedge) ? <InfoBlock description={props.description} /> : ''}
      </div>
    }
  </div>
)

ReduceBlock.propTypes = {
  name: React.PropTypes.string.isRequired,
  direction: React.PropTypes.string.isRequired,
  highlightedWedge: React.PropTypes.string.isRequired,
  removeValue: React.PropTypes.func,
  restoreValue: React.PropTypes.func,
  highlightWedge: React.PropTypes.func,
  description: React.PropTypes.string.isRequired
}

export default ReduceBlock
