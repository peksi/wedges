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
  const { handleSubmit } = props

  return (
    <div>
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
          <label>About you</label>
          <div className='radio'>
            <label>
              <Field name='aboutyou' component='input' type='radio' value='professional' />
              I´m a professional
            </label>
          </div>
          <div className='radio'>
            <label>
              <Field name='aboutyou' component='input' type='radio' value='student' />
              I´m a student
            </label>
          </div>
          <div className='radio'>
            <label>
              <Field name='aboutyou' component='input' type='radio' value='no_answer' />
              No answer
            </label>
          </div>

        </div>

        <div>
          <label>If you are a student, select one</label>
          <div className='radio'>
            <label>
              <Field name='degree' component='input' type='radio' value='high_school' />
                High School
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
            <label><Field name='degree' component='input' type='radio' value='no answer' /> Other</label>
          </div>
          <div className='radio'>
            <label><Field name='degree' component='input' type='radio' value='no answer' /> No answer </label>
          </div>
        </div>
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
      </form>
    </div>
  )
}

FormView.propTypes = {
  handleSubmit: React.PropTypes.func
}

export default reduxForm({
  form: 'prerequisite',
  validate
})(FormView)
