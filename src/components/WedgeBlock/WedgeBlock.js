import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './WedgeBlock.scss'

export class WedgeBlock extends React.Component {
  render () {
    return (
      <div className='wedgeblock col-md-4 col-xs-6'>
        {this.props.name}
        <span className="glyphicon glyphicon-remove" style={{float:'right'}} aria-hidden="true"></span>
      </div>
    )
  }
}

WedgeBlock.proptypes = {
  name: React.PropTypes.string.isRequired
}

export default WedgeBlock
