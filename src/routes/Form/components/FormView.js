import React from 'react'
import NationalityDropdown from './NationalityDropdown.js'
import { Field, reduxForm } from 'redux-form'

const FormView = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nationality</label>
        <div>
          <Field name='firstName' component='input' type='text' placeholder='Age'/>
        </div>
      </div>

      <div>
        <label>Age</label>
        <div>
          <label><Field name='sex' component='input' type='radio' value='under18'/> under 18</label>
          <label><Field name='sex' component='input' type='radio' value='18-24'/> 18 - 24</label>
          <label><Field name='sex' component='input' type='radio' value='25-34'/> 25 - 34</label>
          <label><Field name='sex' component='input' type='radio' value='35-44'/> 35 - 44</label>
          <label><Field name='sex' component='input' type='radio' value='45-54'/> 45 - 54</label>
          <label><Field name='sex' component='input' type='radio' value='55-64'/> 55 - 64</label>
          <label><Field name='sex' component='input' type='radio' value='over64'/> over 64</label>
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field name='lastName' component='input' type='text' placeholder='Last Name'/>
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field name='email' component='input' type='email' placeholder='Email'/>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div>
          <label><Field name='sex' component='input' type='radio' value='male'/> Male</label>
          <label><Field name='sex' component='input' type='radio' value='female'/> Female</label>
          <label><Field name='sex' component='input' type='radio' value='other'/> Other</label>
        </div>
      </div>
      <div>
        <label>Favorite Color</label>
        <div>
          <Field name='favoriteColor' component='select'>
            <option></option>
            <option value='ff0000'>Red</option>
            <option value='00ff00'>Green</option>
            <option value='0000ff'>Blue</option>
          </Field>
        </div>
      </div>
      <div>
        <label htmlFor='employed'>Employed</label>
        <div>
          <Field name='employed' id='employed' component='input' type='checkbox'/>
        </div>
      </div>
      <div>
        <label>Notes</label>
        <div>
          <Field name='notes' component='textarea'/>
        </div>
      </div>
      <div>
        <button type='submit' disabled={pristine || submitting}>Submit</button>
        <button type='button' disabled={pristine || submitting} onClick={reset}>Clear Values</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'information'  // a unique identifier for this form
})(FormView)
