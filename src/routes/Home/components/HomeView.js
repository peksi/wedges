import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import { Button } from 'react-bootstrap'
import ppt1 from '../assets/ppt1.png'
import ppt2 from '../assets/ppt2.png'
import ppt3 from '../assets/ppt3.png'

export const HomeView = (props) => (
  <div className='homeview'>
    {props.page === 0
      ? <div className='page1' style={{ 'display': (props.page === 0) ? 'hidden' : 'visible' }}>
        <h1>Welcome to CarbCut</h1>
        <p>
          We are interested in how you would tackle the Climate Problem with existing stabilization technologies
        </p>
        <p>
          This decision process will take about 20 minutes
        </p>
        <img src={ppt1} style={{ 'margin': 'auto', 'display':'block' }} />
        <p className='reference'>This website is based on the “Stabilization Wedges” concept first presented in <br />
          "Stabilization Wedges: Solving the Climate Problem for the next 50 Years with Current Technologies," <br />
          S. Pacala and R. Socolow, Science, August 13, 2004. <br />
          We acknowledge the <a href='https://cmi.princeton.edu/'>Carbon Mitigation Initiative</a>,
          Princeton University
        </p>
        <Button className='next-button' onClick={() => { props.goForward() }}>Next</Button>
      </div>
      : ''}
    {props.page === 1
      ? <div className='page2'>
        <img src={ppt2} />
        <Button className='prev-button' onClick={() => { props.goBack() }}>Previous</Button>
        <Button className='next-button' onClick={() => { props.goForward() }}>Next</Button>
      </div>
      : ''}
    {props.page === 2
      ? <div className='page3'>
        <img src={ppt3} />
        <Button className='prev-button' onClick={() => { props.goBack() }}>Previous</Button>
        <Button className='next-button' onClick={() => { props.goForward() }}>Next</Button>
      </div>
      : ''
    }
    {props.page === 3
      ? <div className='page4'>
        <h3>When creating your basket</h3>
        <p>You will see descriptions of the possible strategies with cost estimates and challenges</p>
        <p>Consider different perspectives when deciding</p>
        <ul>
          <li>Environmental</li>
          <li>Economic</li>
          <li>Social</li>
          <li>Political</li>
        </ul>
        <Button className='prev-button' onClick={() => { props.goBack() }}>Previous</Button>
        <Link to='/reduce' className='next-button'>
          <Button>Next</Button>
        </Link>
      </div>
      : ''
    }
  </div>
)

import { connect } from 'react-redux'
import { goForward, goBack } from '../modules/home'

const mapDispatchToProps = {
  goForward,
  goBack
}

const mapStateToProps = (state) => ({
  page: state.home.page
})

HomeView.propTypes = {
  goForward: React.PropTypes.func.isRequired,
  goBack: React.PropTypes.func.isRequired,
  page: React.PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
