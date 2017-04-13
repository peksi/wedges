import React from 'react'
import NationalityDropdown from './NationalityDropdown.js'
import { Field, reduxForm } from 'redux-form'

const FormView = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form style={{
      'width': 30 + '%',
      'display': 'block',
      'margin': 'auto'
    }} onSubmit={handleSubmit}>
      <div>
        <label>Nationality</label>
        <div>
          <NationalityDropdown />
        </div>
      </div>

      <div>
        <label>Age</label>
        <div className="radio">
          <label><Field name='age' component='input' type='radio' value='under18'/> under 18</label>
        </div>
        <div className="radio">
          <label><Field name='age' component='input' type='radio' value='18-24'/> 18 - 24</label>
        </div>
        <div className="radio">
          <label><Field name='age' component='input' type='radio' value='25-34'/> 25 - 34</label>
        </div>
        <div className="radio">
          <label><Field name='age' component='input' type='radio' value='35-44'/> 35 - 44</label>
        </div>
        <div className="radio">
          <label><Field name='age' component='input' type='radio' value='45-54'/> 45 - 54</label>
        </div>
        <div className="radio">
          <label><Field name='age' component='input' type='radio' value='55-64'/> 55 - 64</label>
        </div>
        <div className="radio">
          <label><Field name='age' component='input' type='radio' value='over64'/> over 64</label>
        </div>
      </div>
      <div>
        <label>Sex</label>
        <div className='radio'>
          <label><Field name='sex' component='input' type='radio' value='male'/> Male</label>
        </div>
        <div className='radio'>
          <label><Field name='sex' component='input' type='radio' value='female'/> Female</label>
        </div>
        <div className='radio'>
          <label><Field name='sex' component='input' type='radio' value='other'/> Other</label>
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
      <div>
        <button className='btn' type='submit' disabled={pristine || submitting}>Submit</button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'prerequisite'  // a unique identifier for this form
})(FormView)
