import React from 'react'
import BatchViewContainer from './BatchView'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import './ReduceView.scss'

// import wedgesconfig from '../../../../config/wedges.config.js'

export const ReduceView = (props) => {
  const componentClasses = ['helpbox']
  // adding classes is used for animation
  if (!props.basketHidden) { componentClasses.push('hide-helpbox') }

  return (
    <div className='row'>
      <div className={componentClasses.join(' ')}>
        <p>Your decision task:</p>
        <ul>
          <li>
            Create a basket of 8 strategies based on your preferences.
          </li>
          <li>
            Take into account the perspectives you find relevant, e.g. environmental, economic, social, political.
          </li>
        </ul>
        <p>
          In this task the <b>starting point</b> is that you have <b>too many strategies</b> in your basket.
        </p>
        <Button className='confirmHelp' onClick={() => { props.showBasket() }}> Next </Button>
      </div>
      {(!props.basketHidden && props.reduceCount > 8)
        ? <div className='description text-center' style={{ fontSize: 22 + 'px' }}>
            You have {props.reduceCount} strategies in your basket. Please remove {props.reduceCount - 8}.
        </div> : ''}
      {(props.reduceCount === 8)
        ? <div className='description text-center helpbox' style={{ fontSize: 22 + 'px' }}>
            You now have the required number of strategies in your basket.
            You can still make changes. <br /> If you are happy with your basket, press confirm.
            <Link to='/middlepage'>
              <Button style={{ float: 'right' }} bsStyle='default'> Confirm </Button>
            </Link>
        </div> : ''}
      {(props.reduceCount < 8) ? <div className='description text-center' style={{ fontSize: 22 + 'px' }}>
          There are {8 - props.reduceCount} strategies missing from your basket.
        </div> : ''}
      <div className='col-sm-6 basket'>
        <h3>Removed strategies</h3>
        <p>Press the add button to return a strategy into the basket</p>
        {props.basketHidden ? ''
        : <BatchViewContainer direction={'reduce'} />
        }
      </div>
      <div className='col-sm-6 basket'>
        <h3>Basket</h3>
        <p>Press the remove button to remove a strategy from the basket</p>
        {props.basketHidden ? ''
        : <BatchViewContainer direction={'return'} />
        }
      </div>
    </div>
  )
}

import { connect } from 'react-redux'
import { showBasket } from '../modules/reduce'

const mapDispatchToProps = {
  showBasket
}

const mapStateToProps = (state) => ({
  basketHidden: state.reduce.basketHidden,
  reduceCount : state.reduce.reduceCount
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduceView)

ReduceView.propTypes = {
  basketHidden: React.PropTypes.bool.isRequired,
  reduceCount: React.PropTypes.number.isRequired,
  showBasket: React.PropTypes.func.isRequired
}
