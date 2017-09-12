import React from 'react'
import BatchViewContainer from './BatchView'
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router'
import './AddView.scss'

export const AddView = (props) => {
  const componentClasses = ['helpbox', 'infobox']
  if (!props.basketHidden) { componentClasses.push('hide-helpbox') }

  return (
    <div>
      <div className='row'>
        <div className={componentClasses.join(' ')}>
          <Button
            className='confirmHelp btn-lg btn-primary'
            onClick={() => { props.showBasket() }}
          >
            Continue
          </Button>
          <p style={{'clear':'both'}}>
            <h1>Create the basket by adding strategies</h1>
            <span className='large-description-text'>
            <p>
              The starting point is that you initially have an empty basket and you need to add 8 strategies into it.
            </p>
            </span>
          </p>
        </div>
      </div>
      {props.basketHidden ? ''
        : <span>
          <div className=''>
            <div className='col-sm-12 fixed-alert-helper'>
              <Alert className='description text-center' bsStyle={(props.addCount === 8) ? 'success' : 'info'}>
                {(props.addCount > 8)
                  ? <span>You have {props.addCount} strategies in your basket. To reach a basket of 8 strategies <b> please remove {props.addCount - 8}. </b><br />
                  Scroll down to see all the strategies.</span>
                  : ''
                }
                {(props.addCount === 8)
                  ? <span>You now have the required number of strategies in your basket.
                  You can still make changes. <br />If you are happy with your basket, <b> press confirm.</b>
                    <Link to='/thankyou'>
                      <Button className='confirmbutton'> Confirm </Button>
                    </Link>
                  </span>
                  : ''}
                {(props.addCount < 8)
                  ? <span>
                      You have {props.addCount} strategies in your basket. To reach a basket of 8 strategies, <b>please add {8 - props.addCount}.</b> <br /> Scroll down to see all the strategies.
                  </span>
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
                <div><BatchViewContainer direction={'return'} />
                  {props.addCount === 0
                    ? <p style={{ padding: '4em', 'textAlign': 'center' }}>
                      Your basket is empty
                    </p> : ''}
                </div>
              </div>
            </div>
          </div>
        </span>
    }
    </div>
  )
}

AddView.propTypes = {
  addCount: React.PropTypes.number,
  basketHidden: React.PropTypes.bool,
  showBasket: React.PropTypes.func.isRequired
}

import { connect } from 'react-redux'
import { showBasket } from '../modules/add'

const mapDispatchToProps = {
  showBasket
}

const mapStateToProps = (state) => ({
  addCount : state.add.addCount,
  basketHidden: state.add.basketHidden
})

export default connect(mapStateToProps, mapDispatchToProps)(AddView)
