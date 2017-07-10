import React from 'react'
import NationalityDropdown from './NationalityDropdown.js'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import './FormView.scss'

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
  const { handleSubmit, valid } = props
  return (
    <div>
      <p className='helpbox' style={{ 'margin-bottom':'2em' }}>
        Thank you for your participation. As a part of the survey, we´d like to ask you some background information.
      </p>
      <form
        className='surveyForm'
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
          <label>Highest degree obtained</label>
          <div className='radio'>
            <label>
              <Field name='degree' component='input' type='radio' value='high_school' />
                High School
              </label>
          </div>
          <div className='radio'>
            <label><Field name='degree' component='input' type='radio' value='university' />
              University Student (not graduated)
            </label>
          </div>
          <div className='radio'>
            <label><Field name='degree' component='input' type='radio' value='occupational' />
              Occupational degree
            </label>
          </div>
          <div className='radio'>
            <label><Field name='degree' component='input' type='radio' value='bachelor' /> Bachelor </label>
          </div>
          <div className='radio'>
            <label><Field name='degree' component='input' type='radio' value='master' /> Master </label>
          </div>
          <div className='radio'>
            <label><Field name='degree' component='input' type='radio' value='doctoral' /> Doctoral degree </label>
          </div>
          <div className='radio'>
            <label><Field name='degree' component='input' type='radio' value='no degree' /> No degree </label>
          </div>
          <div className='radio'>
            <label><Field name='degree' component='input' type='radio' value='no answer' /> Other / No answer </label>
          </div>
        </div>
  {
    /*
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
  */
  }

        <div>
          <label>Field of studies / profession</label>
          <div className='radio'>
            <label>
              <Field
                name='occupation'
                component='input'
                type='radio'
                value='agricultural' />
                  Agricultural, Forestry
              </label>
          </div>

          <div className='radio'>
            <label>
              <Field
                name='occupation'
                component='input'
                type='radio'
                value='business&economics' />
                  Business, Economics
            </label>
          </div>
          <div className='radio'>
            <label><Field name='occupation' component='input' type='radio' value='culture&arts' />
              Culture, Arts
            </label>
          </div>
          <div className='radio'>
            <label><Field
              name='occupation'
              component='input'
              type='radio'
              value='education' />
                Education, Health, Medical
            </label>
          </div>
          <div className='radio'>
            <label>
              <Field
                name='occupation'
                component='input'
                type='radio'
                value='engineering' />
                  Engineering, Science
              </label>
          </div>
          <div className='radio'>
            <label>
              <Field
                name='occupation'
                component='input'
                type='radio'
                value='environmental' />
                  Environmental
              </label>
          </div>
          <div className='radio'>
            <label><Field
              name='occupation'
              component='input'
              type='radio'
              value='social' />
                Public Administration, Social
            </label>
          </div>
          <div className='radio'>
            <label><Field name='occupation' component='input' type='radio' value='other' />Other</label>
          </div>
          <div className='radio'>
            <label><Field name='occupation' component='input' type='radio' value='no_answer' />No answer</label>
          </div>
        </div>

        <div>
          <label>Your country</label>
          <div>
            <NationalityDropdown />
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
            <label><Field name='sex' component='input' type='radio' value='other' /> Other / No answer</label>
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
    </div>
  )
}

FormView.propTypes = {
  handleSubmit: React.PropTypes.func,
  valid: React.PropTypes.func
}

export default reduxForm({
  form: 'prerequisite',
  validate
})(FormView)
