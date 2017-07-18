import React from 'react'
import './ReduceBlock.scss'
import InfoBlock from '../InfoBlock'

export const ReduceBlock = (props) => (
  <div
    className='wedgeblock col-xs-12'
    >
    <div>
      <div>
        <img
          onClick={() =>
            props.highlightedWedge === props.id
            ? props.clearHighlight()
            : props.highlightWedge(props.id)
          }

          src={require('./img/action' + (props.id) + '.png')}
        />
        <InfoBlock
          description={props.description}
          direction={props.direction}
          currentwedge={props.id}
        />
      </div>
    </div>
  </div>
)

ReduceBlock.propTypes = {
  id: React.PropTypes.number.isRequired,
  direction: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
  highlightedWedge: React.PropTypes.number,
  highlightWedge: React.PropTypes.func,
  clearHighlight: React.PropTypes.func
}

export default ReduceBlock
