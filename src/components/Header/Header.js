import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='header'>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/reduce' activeClassName='route--active'>
      Reduce
    </Link>
    {' · '}
    <Link to='/middlepage' activeClassName='route--active'>
      MiddlePage
    </Link>
    {' · '}
    <Link to='/add' activeClassName='route--active'>
      Add
    </Link>
    {' · '}
    <Link to='/thankyou' activeClassName='route--active'>
      Thank you
    </Link>
    {' · '}
    <Link to='/form' activeClassName='route--active'>
      Form
    </Link>
  </div>
)

export default Header
