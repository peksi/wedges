import React from 'react'
import NationalityDropdown from './NationalityDropdown.js'
import { Field, reduxForm } from 'redux-form'
import { IndexLink, Link, browserHistory } from 'react-router'

let readyToSubmit = false

const validate = values => {
  const errors = {}
  if (!values.nationality) {
    errors.nationality = 'Required'
  }
  if (!values.age) {
    errors.age = 'Required'
  }
  if (!values.sex) {
    errors.sex = 'Required'
  }
  if (!values.occupation) {
    errors.occupation = 'Required'
  }
  return errors
}

const FormView = (props) => {
  const { handleSubmit, pristine, reset, submitting, valid } = props
  return (
    <form
      style={{
        'width': 50 + '%',
        'display': 'block',
        'margin': 'auto'
      }}
      onSubmit={handleSubmit((values) => {
        console.log(values)
        // TODO alter which site the user goes
        browserHistory.push('/')
      })}
    >
      <div>
        <label>Nationality</label>
        <div>
          <NationalityDropdown />
        </div>
      </div>

      <div>
        <label>Age</label>
        <div className='radio'>
          <label><Field name='age' component='input' type='radio' value='under18' /> under 18</label>
        </div>
        <div className='radio'>
          <label><Field name='age' component='input' type='radio' value='18-24' /> 18 - 24</label>
        </div>
        <div className='radio'>
          <label><Field name='age' component='input' type='radio' value='25-34' /> 25 - 34</label>
        </div>
        <div className='radio'>
          <label><Field name='age' component='input' type='radio' value='35-44' /> 35 - 44</label>
        </div>
        <div className='radio'>
          <label><Field name='age' component='input' type='radio' value='45-54' /> 45 - 54</label>
        </div>
        <div className='radio'>
          <label><Field name='age' component='input' type='radio' value='55-64' /> 55 - 64</label>
        </div>
        <div className='radio'>
          <label><Field name='age' component='input' type='radio' value='over64' /> over 64</label>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div className='radio'>
          <label><Field name='sex' component='input' type='radio' value='male' /> Male</label>
        </div>
        <div className='radio'>
          <label><Field name='sex' component='input' type='radio' value='female' /> Female</label>
        </div>
        <div className='radio'>
          <label><Field name='sex' component='input' type='radio' value='other' /> Other</label>
        </div>
      </div>
      <div>
        <label>Profession / study area / occupation</label>

        <div className='radio'>
          <label><Field name='occupation' component='input' type='radio' value='agricultural' /> Agricultural & Forestry</label>
        </div>

        <div className='radio'>
          <label><Field name='occupation' component='input' type='radio' value='business&commerce' /> Business & Commerce</label>
        </div>
        <div className='radio'>
          <label><Field name='occupation' component='input' type='radio' value='cultural&arts' />Cultural & Arts</label>
        </div>
        <div className='radio'>
          <label><Field name='occupation' component='input' type='radio' value='engineering' />Engineering & Science</label>
        </div>
        <div className='radio'>
          <label><Field name='occupation' component='input' type='radio' value='environmental' />Environmental</label>
        </div>
        <div className='radio'>
          <label><Field name='occupation' component='input' type='radio' value='social' />Social</label>
        </div>
        <div className='radio'>
          <label><Field name='occupation' component='input' type='radio' value='other' />Other</label>
        </div>
      </div>

      <div >
        <label>Group id</label>
        <Field
          className='form-control'
          name='groupId'
          component='input'
          type='text'
        />
        <p>Please enter group id if you are provided with one</p>
      </div>

      <div>
        <button className='btn' style={{ 'float':'right' }} type='submit' disabled={!valid}> Submit</button>
      </div>

    </form>
  )
}

export default reduxForm({
  form: 'prerequisite',
  validate
})(FormView)
