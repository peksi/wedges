import React from 'react'
import NationalityDropdown from './NationalityDropdown.js'
import { Field, reduxForm } from 'redux-form'
import { browserHistory } from 'react-router'
import './FormView.scss'

const BasketForm = (props) => {
  return (
    <div>
      <form
        className='basketform'
        style={{
          'width': 50 + '%',
          'display': 'block',
          'margin': 'auto'
        }}
      >
        <div>
          <label>You created a basket in two ways. Which one was easier to work with?</label>
          <div className='radio'>
            <label>
              <Field name='strategy' component='input' type='radio' value='add' />
              Starting with an empty basket and adding strategies into it.
            </label>
          </div>
          <div className='radio'>
            <label>
              <Field name='strategy' component='input' type='radio' value='reduce' />
              Starting with with too many strategies in the basket and reducing strategies from it.
            </label>
          </div>
          <div className='radio'>
            <label>
              <Field name='strategy' component='input' type='radio' value='no_preference' />
              There was no difference
            </label>
          </div>
          <div className='radio'>
            <label>
              <Field name='strategy' component='input' type='radio' value='no_answer' />
              No answer
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}

export default reduxForm({
  form: 'basket'
})(BasketForm)
