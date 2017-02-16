import React from 'react'
// import { IndexLink, Link } from 'react-router'
import './ReduceBlock.scss'

export const ReduceBlock = (props) => (
  <div
    className='wedgeblock col-md-4 col-xs-6'
    onClick={() => {
      props.removeValue(props.name)
      // console.log(props.name)
    }}>
    {props.name}
  </div>
)

// export const ReduceBlock = (props) => (
//   <div
//     className='wedgeblock col-md-4 col-xs-6'
//     onClick={() => {
//       // props.removeValue(props.name)
//       console.log(props.name)
//     }
//     }>
//     // { props.name }
//     Name
//     <span>
//       className='glyphicon glyphicon-remove'
//       style={{
//         float:'right'
//       }}
//       aria-hidden='true'>
//     </span>
//   </div>
// )

ReduceBlock.propTypes = {
  name: React.PropTypes.string.isRequired,
  removeValue: React.PropTypes.function
}

export default ReduceBlock
