import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { Button } from 'react-bootstrap'
import './Survey.scss'
import NationalityDropdown from './NationalityDropdown.js'
import { browserHistory } from 'react-router'

class Survey extends React.Component {
  constructor (...args) {
    super(...args)
    this.gatherSubmitInfo = this.gatherSubmitInfo.bind(this)
  }

  gatherSubmitInfo () {
    try {
      console.log(this.props.state.home.log)
      return {
        groupcode: this.props.state.groupcode.groupcode,
        // result values
        addedValues: this.props.add.addedValues,
        reducedValues: this.props.reduce.reducedValues,
        // which one was first
        orderOfProcedures: this.props.state.home.first,
        // locations of initial procedures
        initialAddOrder: this.props.add.initialOrder,
        initialReduceOrder: this.props.reduce.initialOrder,
        // evaluation of baskets
        evaluationOrder: this.props.thankyou.first,
        // NB: evaluation grade comes from the survey!
        // survey, if filled
        // includes evaluation and personal data
        survey: this.props.state.form.lol ? this.props.state.form.lol.values : null,
        // log of phases
        log: this.props.state.home.log,

        // irrelevant for now
        reducedBasketLog: this.props.reduce.log,
        addedBasketLog: this.props.add.log,
      }
    } catch (e) {
      console.log(e)
      return {
        'result': 'no data'
      }
    }
  }

  render () {
    return (
      <div className='formview text-center'>

        <form
          style={{
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
            <h2>You have now completed your decision task. Please answer the following questions.</h2>
            <hr />

            <div className='radioboxsurvey'>
              <div className='radioboxsurvey'>
                <div>
                  <h2>You created a basket of strategies following two procedures. Please rate procedures used.</h2>
                  <label>Adding strategies into the basket</label>
                  <div>
                    <span className='fieldWrapper'><Field name='adding_strategies' component='input' type='radio' value='1' /> very easy </span>
                    <span className='fieldWrapper'><Field name='adding_strategies' component='input' type='radio' value='2' /> easy </span>
                    <span className='fieldWrapper'><Field name='adding_strategies' component='input' type='radio' value='3' /> not easy nor difficult </span>
                    <span className='fieldWrapper'><Field name='adding_strategies' component='input' type='radio' value='4' /> difficult </span>
                    <span className='fieldWrapper'><Field name='adding_strategies' component='input' type='radio' value='5' /> very difficult </span>
                  </div>
                  <label>Removing extra strategies from the basket</label>
                  <div>
                    <span className='fieldWrapper'><Field name='removing_strategies' component='input' type='radio' value='1' /> very easy </span>
                    <span className='fieldWrapper'><Field name='removing_strategies' component='input' type='radio' value='2' /> easy </span>
                    <span className='fieldWrapper'><Field name='removing_strategies' component='input' type='radio' value='3' /> not easy nor difficult </span>
                    <span className='fieldWrapper'><Field name='removing_strategies' component='input' type='radio' value='4' /> difficult </span>
                    <span className='fieldWrapper'><Field name='removing_strategies' component='input' type='radio' value='5' /> very difficult </span>
                  </div>
                </div>
              </div>
              <hr />
              <h2>In the adding procedure, which of these perspectives did you consider when creating the basket?</h2>
              <div>
                <label>The positive and negative interactions or synergies between the strategies</label>
                <div>
                  <span className='fieldWrapper'><Field name='synergies_add' component='input' type='radio' value='1' /> not at all </span>
                  <span className='fieldWrapper'><Field name='synergies_add' component='input' type='radio' value='2' /> somewhat </span>
                  <span className='fieldWrapper'><Field name='synergies_add' component='input' type='radio' value='3' /> moderately </span>
                  <span className='fieldWrapper'><Field name='synergies_add' component='input' type='radio' value='4' /> much </span>
                  <span className='fieldWrapper'><Field name='synergies_add' component='input' type='radio' value='5' /> very much </span>
                </div>
              </div>
              <div>
                <label>Costs</label>
                <div>
                  <span className='fieldWrapper'><Field name='costs_add' component='input' type='radio' value='1' /> not at all </span>
                  <span className='fieldWrapper'><Field name='costs_add' component='input' type='radio' value='2' /> somewhat </span>
                  <span className='fieldWrapper'><Field name='costs_add' component='input' type='radio' value='3' /> moderately </span>
                  <span className='fieldWrapper'><Field name='costs_add' component='input' type='radio' value='4' /> much </span>
                  <span className='fieldWrapper'><Field name='costs_add' component='input' type='radio' value='5' /> very much </span>
                </div>
              </div>
              <div>
                <label>Feasibility</label>
                <div>
                  <span className='fieldWrapper'><Field name='feasibility_add' component='input' type='radio' value='1' /> not at all </span>
                  <span className='fieldWrapper'><Field name='feasibility_add' component='input' type='radio' value='2' /> somewhat </span>
                  <span className='fieldWrapper'><Field name='feasibility_add' component='input' type='radio' value='3' /> moderately </span>
                  <span className='fieldWrapper'><Field name='feasibility_add' component='input' type='radio' value='4' /> much </span>
                  <span className='fieldWrapper'><Field name='feasibility_add' component='input' type='radio' value='5' /> very much </span>
                </div>
              </div>
              <h2>In the removing procedure, which of these perspectives did you consider when creating the basket?</h2>
              <div>
                <label>The positive and negative interactions or synergies between the strategies</label>
                <div>
                  <span className='fieldWrapper'><Field name='synergies_remove' component='input' type='radio' value='1' /> not at all </span>
                  <span className='fieldWrapper'><Field name='synergies_remove' component='input' type='radio' value='2' /> somewhat </span>
                  <span className='fieldWrapper'><Field name='synergies_remove' component='input' type='radio' value='3' /> moderately </span>
                  <span className='fieldWrapper'><Field name='synergies_remove' component='input' type='radio' value='4' /> much </span>
                  <span className='fieldWrapper'><Field name='synergies_remove' component='input' type='radio' value='5' /> very much </span>
                </div>
              </div>
              <div>
                <label>Costs</label>
                <div>
                  <span className='fieldWrapper'><Field name='costs_remove' component='input' type='radio' value='1' /> not at all </span>
                  <span className='fieldWrapper'><Field name='costs_remove' component='input' type='radio' value='2' /> somewhat </span>
                  <span className='fieldWrapper'><Field name='costs_remove' component='input' type='radio' value='3' /> moderately </span>
                  <span className='fieldWrapper'><Field name='costs_remove' component='input' type='radio' value='4' /> much </span>
                  <span className='fieldWrapper'><Field name='costs_remove' component='input' type='radio' value='5' /> very much </span>
                </div>
              </div>
              <div>
                <label>Feasibility</label>
                <div>
                  <span className='fieldWrapper'><Field name='feasibility_remove' component='input' type='radio' value='1' /> not at all </span>
                  <span className='fieldWrapper'><Field name='feasibility_remove' component='input' type='radio' value='2' /> somewhat </span>
                  <span className='fieldWrapper'><Field name='feasibility_remove' component='input' type='radio' value='3' /> moderately </span>
                  <span className='fieldWrapper'><Field name='feasibility_remove' component='input' type='radio' value='4' /> much </span>
                  <span className='fieldWrapper'><Field name='feasibility_remove' component='input' type='radio' value='5' /> very much </span>
                </div>
              </div>
              <hr />
              <div>
                <label>Please try to explain your thought process and feelings when adding strategies into the basket.</label>
                <div>
                  <Field name='process_and_feelings_add' component='input' type='text' size='60' />
                </div>
              </div>
            </div>
            <hr />
            <div>
              <label>Please try to explain your thought process and feelings when removing strategies from the basket.</label>
              <div>
                <Field name='process_and_feelings_remove' component='input' type='text' size='60' />
              </div>
            </div>

            <Button
              style={{ 'float':'right' }}
              onClick={() => {
                this.props.goForward()
              }}
            > Go forward </Button>
          </div>
          <div className='page2' style={this.props.page === 2 ? { display: 'block' } : { display:'none' }}>
            <h2>Finally, please answer the following background questions.</h2>
            <hr />
            <div>
              <label>I am</label>
              <div className='radio'>
                <label>
                  <Field name='aboutyou' component='input' type='radio' value='working' />
                  Working
                </label>
              </div>
              <div className='radio'>
                <label>
                  <Field name='aboutyou' component='input' type='radio' value='studying' />
                  Studying
                </label>
              </div>
              <div className='radio'>
                <label>
                  <Field name='aboutyou' component='input' type='radio' value='retired' />
                  Retired
                </label>
              </div>
              <div className='radio'>
                <label>
                  <Field name='aboutyou' component='input' type='radio' value='no_answer' />
                  Other / No answer
                </label>
              </div>
            </div>

            <div>
              <label>Highest degree earned</label>
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
                <label><Field name='degree' component='input' type='radio' value='vocational' /> Vocational </label>
              </div>
              <div className='radio'>
                <label><Field name='degree' component='input' type='radio' value='master' /> Master´s </label>
              </div>
              <div className='radio'>
                <label><Field name='degree' component='input' type='radio' value='doctoral' /> Doctoral </label>
              </div>
              <div className='radio'>
                <label><Field name='degree' component='input' type='radio' value='no answer' /> Other / No answer</label>
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
                    Education
                </label>
              </div>
              <div className='radio'>
                <label><Field
                  name='occupation'
                  component='input'
                  type='radio'
                  value='healthcare' />
                    Healthcare
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
                <label><Field name='occupation' component='input' type='radio' value='other' />Other / No answer</label>
              </div>
            </div>

            <div>
              <label>Your country</label>
              <div>
                <NationalityDropdown />
              </div>
            </div>

            <div>
              <label>Age</label>
              <div>
                <Field component='input' type='number' name='age'></Field>
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
              onClick={() => {
                this.props.addToLog(new Date().getTime(), 'finalSubmit').then(() => {
                  console.log(this.gatherSubmitInfo())
                  var request = new XMLHttpRequest()
                  request.open('POST', '/api', true)
                  request.setRequestHeader('Content-Type', 'application/json')
                  request.send(JSON.stringify(this.gatherSubmitInfo()))
                  browserHistory.push('/aftersubmit')
                })
              }}
            >
              Send survey
            </Button>
          </div>
        </form>
      </div>
    )
  }
}

import { goForward } from '../modules/survey'
import { addToLog } from '../../Home/modules/home'

Survey.propTypes = {
  page: React.PropTypes.number,
  addToLog: React.PropTypes.func
}

const mapDispatchToProps = {
  goForward, addToLog
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
  form: 'lol',
  destroyOnUnmount: false
})(Survey)
