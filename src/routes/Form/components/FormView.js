import React from 'react'
import { Link } from 'react-router'
import { Button } from 'react-bootstrap'

// import './HomeView.scss'

export const FormView = () => (
  <div className='formview'>
    <h4>Welcome!</h4>
    <p>This is the form.</p>
    <Link to='/reduce' activeClassName='route--active'>
      <Button>Continue</Button>
    </Link>
  </div>
)

export default FormView
