import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './InfoBlock.scss'

export const InfoBlock = (props) => (
  <div
    className='col-xs-12 infoblock'
  >
    {props.description}
    <Button
      hidden={props.highlightedWedgeDirection === 'reduce' ? false : true}
      bsStyle="danger"
      onClick={() => {
        props.removeValue(props.highlightedWedge)
        props.clearHighlight()
      }}
    >
      Remove from the list
    </Button>
    <Button
      hidden={props.highlightedWedgeDirection === 'return' ? false : true}
      onClick={() => {
        props.restoreValue(props.highlightedWedge)
        props.clearHighlight()
      }}
    >
      Add back to list
    </Button>
    <Button
      hidden={props.highlightedWedgeDirection.length === 0}
      onClick={() => {
        props.clearHighlight()
      }}
    >
      Close
    </Button>
  </div>
)

InfoBlock.propTypes = {
  highlightedWedge: React.PropTypes.string,
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
