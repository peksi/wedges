import React from 'react'
import BatchViewContainer from './BatchView'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import './AddView.scss'

export const AddView = (props) => (
  <div className='row'>
    {props.basketHidden
      ? <div className='helpbox'>
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
      : ''
    }
    {(props.addCount > 8)
      ? <div className='description text-center'>
          There are {props.addCount - 8} extra strategies in your basket.
        </div> : ''}
    {(props.addCount === 8)
      ? <div className='description text-center helpbox'>
      You now have the required number of strategies in your basket.
      You can still make changes. <br /> If you are happy with your basket, press confirm.
          <Link to='/thankyou'>
            <Button> Confirm </Button>
          </Link>
      </div> : ''}
    {(props.addCount < 8) ? <div className='description text-center' >
      You have {props.addCount} strategies in your basket. Please add {8 - props.addCount}.</div> : ''}
    <div className='col-sm-6'>
      <h3>Strategies available</h3>
      <p>Press the add button to select a strategy into the basket</p>
      <BatchViewContainer direction={'reduce'} />
    </div>
    <div className='col-sm-6'>
      <h3>Basket</h3>
      <p>Press the remove button to remove a strategy from the basket</p>
      <BatchViewContainer direction={'return'} />
    </div>
  </div>
)

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
