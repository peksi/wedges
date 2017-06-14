import React from 'react'
import './ReduceBlock.scss'
import InfoBlock from '../InfoBlock'

export const ReduceBlock = (props) => (
  <div
    className='wedgeblock col-xs-12'
    >
    <div>
      <div>
        <InfoBlock
          style={{ float: 'left' }}
          description={props.description}
          direction={props.direction}
          currentwedge={props.id}
          />
        {<img src={require('./img/action' + (props.id) + '.png')} />}
      </div>
    </div>
  </div>
)

ReduceBlock.propTypes = {
  id: React.PropTypes.number.isRequired,
  direction: React.PropTypes.string.isRequired,
  description: React.PropTypes.string
}

export default ReduceBlock
