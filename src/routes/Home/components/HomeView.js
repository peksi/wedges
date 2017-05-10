import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import { Button } from 'react-bootstrap'

export const HomeView = () => (
  <div className='homeview'>
    <h4>Welcome to CarbCut</h4>
    <p>We are interested in how you would tackle the Climate Problem with existing stabilization technologies</p>
    <p>This decision process will take about 20 minutes</p>
    <p>This website is based on the “Stabilization Wedges” concept first presented in <br />
      "Stabilization Wedges: Solving the Climate Problem for the next 50 Years with Current Technologies," <br />
      S. Pacala and R. Socolow, Science, August 13, 2004. <br />
      We acknowledge the Carbon Mitigation Initiative, Princeton University</p>
    <Button className='next-button'>Next</Button>


    <Link to='/reduce' className='next-button'>
      <Button>Next</Button>
    </Link>
  </div>
)

export default HomeView
