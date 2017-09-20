 import React from 'react'
 import { Button } from 'react-bootstrap'
 import { Link } from 'react-router'
 import './MiddlePage.scss'

 export const MiddlePage = (props) => {
   let linkToNext = ''
   if (props.first === 'add') {
     linkToNext = 'reduce'
   } else {
     linkToNext = 'add'
   }
   return (
     <div className='middlepage'>
       <h1>Thank you for completing the first stage.</h1>
       <p>In the second stage we ask you to create the basket using another procedure.</p>
       <Link to={'/' + linkToNext} activeClassName='route--active'>
         <Button bsSize='large' bsStyle='primary'> Continue </Button>
       </Link>
     </div>
   )
 }

 import { connect } from 'react-redux'

 const mapDispatchToProps = {
 }

 const mapStateToProps = (state) => ({
   first: state.home.first
 })

 MiddlePage.propTypes = {
   first: React.PropTypes.string
 }

 export default connect(mapStateToProps, mapDispatchToProps)(MiddlePage)
