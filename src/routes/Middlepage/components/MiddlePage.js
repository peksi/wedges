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
     <div>
       <Link to={'/' + linkToNext} activeClassName='route--active'>
         <Button bsSize='large' bsStyle='primary' style={{'float': 'right'}}> Continue </Button>
       </Link>
       <div className='middlepage' style={{'clear':'both'}}>

         <h1>Thank you for completing the first stage.</h1>
         <p>Now, to relax and refresh your mind take a 2 min break. </p>
         <p>Please feel free to think of, e.g. other activities you have this week.</p>
         <br />
         <p>In the second stage we ask you to create the basket using another procedure.</p>

       </div>
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
