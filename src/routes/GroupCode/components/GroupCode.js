import React from 'react'
import { Alert, Button, Form, FormControl } from 'react-bootstrap'
import './GroupCode.scss'
import { browserHistory } from 'react-router'

export const GroupCode = (props) => {
  function useGroupCode(){
    props.saveGroupCode(document.getElementById('groupCodeInput').value)
    browserHistory.push('/' + props.first)
  }

  function validateGroupCode(){
    document.getElementById('groupCodeInput').value //check if groupCode exists
    ? useGroupCode()
    : document.getElementsByClassName('groupCodeAlert')[0].style.display = ''
  }

  return (
    <div>
      <h1>Group Code</h1>
      <Alert className='groupCodeAlert' style={{'display':'none'}}>Please enter groupcode</Alert>
      <p className='text-center'>
        If you have been provided a group code please enter it below
      </p>
      <input
        id='groupCodeInput'
        type='text'
        placeholder='Group Code'
        style={{ 'margin': 'auto' }}
      />{' '}
        <Button
          bsStyle='primary'
          onClick={() => {
            validateGroupCode()
          }}
        >
          Continue
        </Button>
          <Button
            bsStyle='primary'
            style={{'float':'right'}}
            onClick={() => {
              browserHistory.push('/' + props.first)
            }}
          >
            Continue without group code
          </Button>
    </div>
  )
}

import { saveGroupCode } from '../modules/groupcode'

GroupCode.propTypes = {
  first: React.PropTypes.string,
  saveGroupCode: React.PropTypes.func
}

import { connect } from 'react-redux'

const mapDispatchToProps = {
  saveGroupCode
}

const mapStateToProps = (state) => ({
  first: state.home.first
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupCode)
