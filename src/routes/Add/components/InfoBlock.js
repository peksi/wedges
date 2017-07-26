import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './InfoBlock.scss'

export const InfoBlock = (props) => {
  let infoblockClass = ''

  if (props.currentwedge === props.highlightedWedge) {
    infoblockClass = 'infoblock'
  } else {
    infoblockClass = 'infoblock infoblock-hidden'
  }

  return (
    <div
      className={infoblockClass}
    >
      <img src={require('./ReduceBlock/img/action' + (props.currentwedge) + '_description.png')} />
      <Button
        hidden={props.direction !== 'reduce'}
        bsStyle='primary'
        onClick={() => {
          props.removeValue(props.currentwedge)
          props.clearHighlight()
        }}
      >
        Add
      </Button>
      <Button
        bsStyle='primary'
        hidden={props.direction !== 'return'}
        onClick={() => {
          props.addValue(props.currentwedge)
          props.clearHighlight()
        }}
      >
        Remove
      </Button>
      <Button
        onClick={() => { props.clearHighlight() }}
      >
        Close
      </Button>
    </div>
  )
}

InfoBlock.propTypes = {
  removeValue: React.PropTypes.func,
  addValue: React.PropTypes.func,
  clearHighlight: React.PropTypes.func,
  direction: React.PropTypes.string,
  currentwedge: React.PropTypes.number,
  highlightedWedge: React.PropTypes.number
}

// Container
import { removeValue, addValue, highlightWedge, clearHighlight } from '../modules/add'

const mapDispatchToProps = {
  removeValue,
  addValue,
  highlightWedge,
  clearHighlight
}

const mapStateToProps = (state) => ({
  highlightedWedge : state.add.highlightedWedge,
  highlightedWedgeDirection: state.add.highlightedWedgeDirection
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoBlock)
