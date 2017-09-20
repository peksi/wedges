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
  let linkToNext = ''
  if (props.firstStrategySurvey === 'add' && props.addExists) {
    linkToNext = '/thankyou'
  } else {
    linkToNext = '/middlepage'
  }

  return (
    <div>
      <div className='row'>
        <div className={componentClasses.join(' ')}>
          <Button
            className='confirmHelp btn-lg btn-primary'
            onClick={() => { props.showBasket() }}
            style={{ 'float': 'right' }}
          >
            Continue
          </Button>
          <br />
          <div className='large-description-text' style={{ 'clear':'both' }}>
            <h1 className='text-center'>Create the basket by removing strategies</h1>
            <p>The starting point is that you initially have all the 15 strategies in
            your basket and you need to remove 7 strategies from it.</p>
          </div>
        </div>
      </div>
      {props.basketHidden ? ''
      : <span>
        <div className=''>
          <div className='col-sm-12 fixed-alert-helper'>
            <Alert className='description text-center' bsStyle={(props.reduceCount === 8) ? 'success' : 'info'} >
              {(!props.basketHidden && props.reduceCount > 8)
              ? <span> You have {props.reduceCount} strategies in your basket. To reach a basket of 8 strategies
                  <b> please remove {props.reduceCount - 8}. </b><br />
                  Scroll down to see all the strategies.
              </span>
              : ''}
              {(props.reduceCount === 8)
              ? <span>
                You now have the required number of strategies in your basket.
                You can still make changes. <br />
                <b>If you are happy with your basket, press confirm.</b>
                <Link to={linkToNext}>
                  <Button className='confirmbutton' bsStyle='default'> Confirm </Button>
                </Link>
              </span>
              : ''}
              {(props.reduceCount < 8)
              ? <span> You have {props.reduceCount} strategies in your basket. To reach a basket of 8 strategies,
              please add {8 - props.reduceCount} strategies. <br />
              Scroll down to see all the strategies. </span>
                : ''}
            </Alert>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm-6'>
            <div className='basket removal-basket'>
              <h3 className='text-center'>Strategies not included in the basket</h3>
              <p className='text-center'> Click on strategy to add it into the basket. </p>
              <BatchViewContainer direction={'reduce'} />
            </div>
          </div>
          <div className='col-sm-6'>
            <div className='basket real-basket'>
              <h1 className='text-center'>Your basket of strategies</h1>
              <p className='text-center'>Click on strategy to remove it from the basket.</p>
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

const mapStateToProps = (state) => {
  const checkIfAddExists = typeof state.add !== 'undefined'

  return ({
    basketHidden: state.reduce.basketHidden,
    reduceCount : state.reduce.reduceCount,
    firstStrategySurvey: state.home.first,
    addExists: checkIfAddExists
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduceView)

ReduceView.propTypes = {
  firstStrategySurvey: React.PropTypes.string,
  addExists: React.PropTypes.bool,
  basketHidden: React.PropTypes.bool.isRequired,
  reduceCount: React.PropTypes.number.isRequired,
  showBasket: React.PropTypes.func.isRequired
}
