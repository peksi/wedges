import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import './MiddlePage.scss'

export const MiddlePage = () => (
  <div className='middlepage'>
    <h1>Thank you for completing the first stage.</h1>
    <p>In the second stage we ask you to create the basket using another procedure.</p>
    <Link to='/add' activeClassName='route--active'>
      <Button bsSize='large' bsStyle='primary'> Continue </Button>
    </Link>
  </div>
)

export default MiddlePage
