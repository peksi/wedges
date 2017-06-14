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
      bsStyle='danger'
      onClick={() => {
        props.removeValue(props.currentwedge)
        props.clearHighlight()
      }}
    >
      Add
    </Button>
    <Button
      hidden={props.direction !== 'return'}
      onClick={() => {
        props.addValue(props.currentwedge)
        props.clearHighlight()
      }}
    >
      Remove
    </Button>
  </div>
)

InfoBlock.propTypes = {
  removeValue: React.PropTypes.func,
  addValue: React.PropTypes.func,
  clearHighlight: React.PropTypes.func,
  direction: React.PropTypes.string,
  currentwedge: React.PropTypes.string
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
