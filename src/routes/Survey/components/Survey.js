import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import './Survey.scss'
import { browserHistory } from 'react-router'

const Survey = (props) => {

  return (
    <div className='formview text-center'>
      <p>Wololoo.</p>
    </div>
  )
}

import { addBetter, reduceBetter, equal } from '../modules/survey'

Survey.propTypes = {
}

const mapDispatchToProps = {
  addBetter, reduceBetter, equal
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Survey)
