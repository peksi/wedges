import React from 'react'
import { Link } from 'react-router'
// import './HomeView.scss'

export const MiddlePage = () => (
  <div className='formview'>
    <h4>Welcome!</h4>
    <p>This is the middlepage.</p>
    <Link to='/reduce' activeClassName='route--active'>
      <button>Continue</button>
    </Link>
  </div>
)

export default MiddlePage
