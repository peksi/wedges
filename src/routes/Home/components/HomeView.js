import React from 'react'
import { Link } from 'react-router'
import './HomeView.scss'

export const HomeView = () => (
  <div className='homeview'>
    <h4>Welcome!</h4>
    <p>This is a place for basic survey and to tell the motivation of this survey.</p>
    <Link to='/reduce' activeClassName='route--active'>
      <button>Continue</button>
    </Link>
  </div>
)

export default HomeView
