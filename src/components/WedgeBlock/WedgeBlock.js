import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './WedgeBlock.scss'

export const WedgeBlock = (props) => (
  <div
    className='wedgeblock col-md-4 col-xs-6'
    onClick={() => {
      props.reduce(props.key)
      console.log(props.name)

    }
    }>
    { props.name }
    <span
      className='glyphicon glyphicon-remove'
      style={{
        float:'right',
      }}
      aria-hidden='true'>
    </span>
  </div>
)

WedgeBlock.proptypes = {
  name: React.PropTypes.string.isRequired
}

export default WedgeBlock
