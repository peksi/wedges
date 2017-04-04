import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './InfoBlock.scss'

export const InfoBlock = (props) => (
  <div
    className='infoblock'
  >
    <Button
      hidden={props.direction === 'reduce' ? false : true}
      bsStyle="danger"
      onClick={() => {
        props.removeValue(props.currentwedge)
        props.clearHighlight()
      }}
    >
      Add
    </Button>
    <Button
      hidden={props.direction === 'return' ? false : true}
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
  highlightedWedge: React.PropTypes.number,
  removeValue: React.PropTypes.func,
  restoreValue: React.PropTypes.func,
  clearHighlight: React.PropTypes.func,
  highlightedWedgeDirection: React.PropTypes.string
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
