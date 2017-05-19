import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import { Button } from 'react-bootstrap'
import ppt1 from '../assets/ppt1.png'
import ppt2 from '../assets/ppt2.png'
import ppt3 from '../assets/ppt3.png'

export const HomeView = (props) => (
  <div className='homeview'>
    <div className='page1'>
      <h4>Welcome to CarbCut</h4>
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
        We acknowledge the Carbon Mitigation Initiative, Princeton University</p>
      <Button className='next-button' onClick={() => { props.goForward() }}>Next</Button>
    </div>
    <div className='page2'>
      <img src={ppt2} />
      <Button className='next-button'>Next</Button>
    </div>
    <div className='page3'>
      <img src={ppt3} />
      <Button className='next-button'>Next</Button>
    </div>
    <div className='page4'>
      <h3>When creating your basket</h3>
      <p>You will see descriptions of the possible strategies with cost estimates and challenges</p>
      <p>Consider different perspectives when deciding</p>
      <ul>
        <li>Environmental</li>
        <li>Economic</li>
        <li>Social</li>
        <li>Political</li>
      </ul>
      <Link to='/reduce' className='next-button'>
        <Button>Next</Button>
      </Link>
    </div>
  </div>
)

import { connect } from 'react-redux'
import { goForward } from '../modules/home'

const mapDispatchToProps = {
  goForward
}

const mapStateToProps = (state) => ({
})

HomeView.propTypes = {
  goForward: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
