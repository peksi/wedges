import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'

export const MiddlePage = () => (
  <div className='formview'>
    <h4>Welcome!</h4>
    <p>This is the middlepage.</p>
    <Link to='/add' activeClassName='route--active'>
      <Button> Continue </Button>
    </Link>
  </div>
)

export default MiddlePage
