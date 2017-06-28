import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './InfoBlock.scss'

export const InfoBlock = (props) => (
  <div
    className='infoblock'
  >
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
      hidden={props.direction !== 'return'}
      bsStyle='primary'
      onClick={() => {
        props.restoreValue(props.currentwedge)
        props.clearHighlight()
      }}
    >
      Remove
    </Button>
  </div>
)

InfoBlock.propTypes = {
  removeValue: React.PropTypes.func,
  restoreValue: React.PropTypes.func,
  clearHighlight: React.PropTypes.func,
  currentwedge: React.PropTypes.string,
  direction: React.PropTypes.string
}

// Container
import { removeValue, restoreValue, highlightWedge, clearHighlight } from '../modules/reduce'

const mapDispatchToProps = {
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
