import React from 'react'
import BatchViewContainer from './BatchView'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import './AddView.scss'

export const AddView = (props) => {
  const componentClasses = ['helpbox', 'infobox']
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
          In this task the <b>starting point</b> is that you have <b>no strategies</b> in your basket.
        </p>
        <Button className='confirmHelp' onClick={() => { console.log('show'); props.showBasket() }}> Next </Button>
      </div>
      {(props.addCount > 8)
        ? <div className='description text-center'>
            There are {props.addCount - 8} extra strategies in your basket.
          </div> : ''}
      {(props.addCount === 8)
        ? <div className='description text-center helpbox'>
        You now have the required number of strategies in your basket.
        You can still make changes. <br />If you are happy with your basket, <b> press confirm.</b>
          <Link to='/thankyou'>
            <Button> Confirm </Button>
          </Link>
        </div> : ''}
      {props.basketHidden ? ''
      : <span> {(props.addCount < 8) ? <div className='description text-center' >
        You have {props.addCount} strategies in your basket. <b>Please add {8 - props.addCount}.</b></div> : ''}
        <div className='col-sm-6'>
          <div className='basket removal-basket'>
            <h3>Strategies available</h3>
            <p>Press the add button to select a strategy into the basket</p>
            <BatchViewContainer direction={'reduce'} />
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='basket real-basket'>
            <h3>Basket</h3>
            <p>Press the remove button to remove a strategy from the basket</p>
            <div><BatchViewContainer direction={'return'} />
              {props.addCount === 0
                ? <p style={{ padding: '4em', 'textAlign': 'center' }}>
                  Your basket is empty
                </p> : ''}
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
