 import React from 'react'
 import { Button } from 'react-bootstrap'
 import { Link } from 'react-router'
 import dia1 from '../assets/Dia1.png'
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
         <img src={dia1} />
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
