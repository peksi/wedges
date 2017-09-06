import React from 'react'
import BatchViewContainer from './BatchView'
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import './ReduceView.scss'

// import wedgesconfig from '../../../../config/wedges.config.js'

export const ReduceView = (props) => {
  const componentClasses = ['helpbox', 'infobox']
  // adding classes is used for animation
  if (!props.basketHidden) { componentClasses.push('hide-helpbox') }

  return (
    <div>
      <div className='row'>
        <div className={componentClasses.join(' ')}>
          <p><b>Your decision task starts here:</b></p>
          <ul>
            <li>
              Create a basket of 8 strategies based on your preferences.
            </li>
            <li>
              Take into account the perspectives you find relevant, e.g. environmental, economic, social, political.
            </li>
          </ul>
          <p>
            In this task the <b>starting point</b> is that you initially have <b>all the strategies</b> in your basket.
            You will need to remove 7.
            <br />
            <Button className='confirmHelp' onClick={() => { props.showBasket() }}> Continue </Button>
          </p>
        </div>
      </div>
      {props.basketHidden ? ''
      : <span>
        <div className=''>
          <div className='col-sm-12 fixed-alert-helper'>
            <Alert className='description text-center' bsStyle={(props.reduceCount === 8) ? 'success' : 'info'} >
              {(!props.basketHidden && props.reduceCount > 8)
              ? <span> You have {props.reduceCount} strategies in your basket.
                  <b> Please remove {props.reduceCount - 8}. </b><br />
                  Scroll down to see all the strategies.
              </span>
              : ''}
              {(props.reduceCount === 8)
              ? <span>
                You now have the required number of strategies in your basket.
                You can still make changes. <br />
                <b>If you are happy with your basket, press confirm.</b>
                <Link to='/middlepage'>
                  <Button className='confirmbutton' bsStyle='default'> Confirm </Button>
                </Link>
              </span>
              : ''}
              {(props.reduceCount < 8)
              ? <span> There are {8 - props.reduceCount} strategies missing from your basket. </span>
                : ''}
            </Alert>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='basket removal-basket'>
              <h3>Removed strategies</h3>
              <p> Press the box to inspect a strategy.
                  After inspection you can return it into the basket if you want.
              </p>
              <BatchViewContainer direction={'reduce'} />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='basket real-basket'>
              <h3>Basket</h3>
              <p>Press the box to inspect a strategy. After inspection you can remove it if you want.</p>
              <BatchViewContainer direction={'return'} />
            </div>
          </div>
        </div>
      </span>
}
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
