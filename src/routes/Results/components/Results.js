import React from 'react'
import { Alert, Button, Form, FormControl } from 'react-bootstrap'
import './Results.scss'
import { browserHistory } from 'react-router'

export const Results = (props) => {
  return (
    <div>
      <h1>Migthy results page</h1>
    </div>
  )
}

import { } from '../modules/results'

Results.propTypes = {
}

import { connect } from 'react-redux'

const mapDispatchToProps = {
}

const mapStateToProps = (state) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
