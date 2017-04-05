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
        props.addValue(props.currentwedge)
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
  addValue: React.PropTypes.func,
  clearHighlight: React.PropTypes.func,
  highlightedWedgeDirection: React.PropTypes.string
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
