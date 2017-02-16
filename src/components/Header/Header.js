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
    <Link to='/reduce' activeClassName='route--active'>
      Reduce
    </Link>
  </div>
)

export default Header
