import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div className='header'>
    <h1>Wedges game</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/form' activeClassName='route--active'>
      Form
    </Link>
    {' · '}
    <Link to='/reduce' activeClassName='route--active'>
      Reduce
    </Link>
    {' · '}
    <Link to='/middlepage' activeClassName='route--active'>
      MiddlePage
    </Link>

  </div>
)

export default Header
