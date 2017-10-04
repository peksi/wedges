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
      {(props.direction === 'reduce') ? 'Include in the basket' : 'Do not include in the basket'}
      <Button
        hidden={props.direction !== 'reduce'}
        bsStyle='primary'
        onClick={() => {
          props.removeValue(props.currentwedge)
          props.logTransfer(new Date().getTime(), 'add', props.currentwedge)
          props.clearHighlight()
        }}
      >
        Confirm
      </Button>
      <Button
        bsStyle='primary'
        hidden={props.direction !== 'return'}
        onClick={() => {
          props.restoreValue(props.currentwedge)
          props.logTransfer(new Date().getTime(), 'reduce', props.currentwedge)
          props.clearHighlight()
        }}
      >
        Confirm
      </Button>
      <Button
        bsStyle='default'
        onClick={() => {
          props.logTransfer(new Date().getTime(), 'cancel', props.currentwedge)
          props.clearHighlight()
        }}
      >
        Cancel
      </Button>
    </div>
  )
}

InfoBlock.propTypes = {
  logTransfer: React.PropTypes.func,
  removeValue: React.PropTypes.func,
  restoreValue: React.PropTypes.func,
  clearHighlight: React.PropTypes.func,
  currentwedge: React.PropTypes.number,
  direction: React.PropTypes.string,
  highlightedWedge: React.PropTypes.number
}

// Container
import { logTransfer, removeValue, restoreValue, highlightWedge, clearHighlight } from '../modules/reduce'

const mapDispatchToProps = {
  logTransfer,
  removeValue,
  restoreValue,
  highlightWedge,
  clearHighlight
}

const mapStateToProps = (state) => ({
  highlightedWedge : state.reduce.highlightedWedge,
  highlightedWedgeDirection: state.reduce.highlightedWedgeDirection
})

export default connect(mapStateToProps, mapDispatchToProps)(InfoBlock)
