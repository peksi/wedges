import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './ReduceBlock.scss'

export const ReduceBlock = (props) => (
  <div
    className='wedgeblock col-md-4 col-xs-6'
    onClick={() => {
      props.highlightWedge(props.name, props.direction)
      // if (props.direction === 'reduce') {
      //   props.removeValue(props.name)
      // } else {
      //   props.restoreValue(props.name)
      // }
    }}>
    {props.direction === 'reduce' ? props.name : <strike> {props.name} </strike>}
    <span
      className='glyphicon glyphicon-remove'
      style={{
        float:'right'
      }}
      aria-hidden='true'
    />
  </div>
)

ReduceBlock.propTypes = {
  name: React.PropTypes.string.isRequired,
  direction: React.PropTypes.string.isRequired,
  removeValue: React.PropTypes.func,
  restoreValue: React.PropTypes.func,
  highlightWedge: React.PropTypes.func
}

export default ReduceBlock
