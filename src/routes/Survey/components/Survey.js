import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'
import './Survey.scss'
import NationalityDropdown from './NationalityDropdown.js'
import { browserHistory } from 'react-router'

class Survey extends React.Component {
  render () {
    this.submitInfo = {
      reducedValues: this.props.reduce.reducedValues,
      reducedBasketLog: this.props.reduce.log,
      addedValues: this.props.add.addedValues,
      addedBasketLog: this.props.add.log,
      thankyou: {
        left: this.props.thankyou.first,
        better: this.props.thankyou.better
      },
      values: this.props.state.form.lol ? this.props.state.form.lol.values : null
    }

    this.asd = () => {
      console.log(this.submitInfo)
    }
    return (
      <div className='formview text-center'>

        <p>You have now completed your decision task. Please anwer the following questions.</p>
        <hr />
        <form
          className='surveyForm'
          style={{
            'width': 50 + '%',
            'display': 'block',
            'margin': 'auto',
            'textAlign': 'left'
          }}
          onSubmit={((values) => {
            console.log(values)
            // TODO alter which site the user goes
            // browserHistory.push('/')
          })}
        >
          <div className='page1' style={this.props.page === 1 ? { display: 'block' } : { display:'none' }}>
            <div>
              <label>When creating a basket of strategies, which procedure you felt more confident with?</label>
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
                  I don´t know / No answer
                </label>
              </div>
            </div>
            <hr />

            <Button
              style={{ 'float':'right' }}
              onClick={() => {
                this.props.goForward()
              }}
            > Go forward </Button>
          </div>
          <div className='page2' style={this.props.page === 2 ? { display: 'block' } : { display:'none' }}>
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

            <Button
              style={{ 'float':'right' }}
              bsStyle='success'
              onClick={() => this.asd()}
            >
              Send survey (currently does nothing)
            </Button>
          </div>
        </form>

      </div>
    )
  }

}

import { goForward } from '../modules/survey'

Survey.propTypes = {
  page: React.PropTypes.number
}

const mapDispatchToProps = {
  goForward
}

const mapStateToProps = (state) => ({
  page: state.survey.page,
  reduce : state.reduce,
  add: state.add,
  thankyou: state.thankyou,
  state: state
})

Survey = connect(mapStateToProps, mapDispatchToProps)(Survey) //eslint-disable-line

export default reduxForm({
  form: 'lol'
})(Survey)
