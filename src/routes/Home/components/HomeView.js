import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'
import { Button } from 'react-bootstrap'

export const HomeView = () => (
  <div className='homeview'>
    <h4>Welcome!</h4>
    <p>This is a place for basic survey and to tell the motivation of this survey.</p>
    <Link to='/form' activeClassName='route--active'>
      <Button>Continue</Button>
    </Link>
  </div>
)

export default HomeView
