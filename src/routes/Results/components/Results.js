import React from 'react'
import { Table } from 'react-bootstrap'
import './Results.scss'
import { browserHistory } from 'react-router'
import _ from 'lodash'

export class Results extends React.Component {
  constructor (...args) {
    super(...args)
    this.mockupResults = this.mockupResults.bind(this)
    this.pollResults = this.pollResults.bind(this)
    this.populateResults = this.populateResults.bind(this)
  }
  mockupResults = () => {
    return (
      [
        {"id":1,"resultBlob":{"log":[[1511433781603,"start"],[1511433788237,"add"],[1511433801509,"addEnd"],[1511433803152,"reduce"],[1511433815766,"reduceEnd"],[1511433819297,"submitBasketPreference"]],"survey":{"age":"11","sex":"male","costs":"3","other":"gg","degree":"high_school","balance":"3","aboutyou":"retired","comments":"agds","occupation":"culture&arts","feasibility":"3","nationality":"AF","sustainability":"3","global_fairness":"2","basketPreference":"b","adding_strategies":"3","removing_strategies":"3"},"groupcode":"asdf","addedValues":[1,2,3,7,9,11,13,14],"reducedValues":[1,3,6,7,8,12,13,14],"addedBasketLog":[[1511433790346,"add",13],[1511433791794,"add",7],[1511433792988,"add",3],[1511433794342,"add",11],[1511433796006,"add",2],[1511433797401,"add",14],[1511433798940,"add",9],[1511433800298,"add",1]],"evaluationOrder":"reduce","initialAddOrder":[13,7,3,11,2,14,9,1,10,5,12,4,8,15,6],"reducedBasketLog":[[1511433805288,"reduce",11],[1511433806932,"reduce",2],[1511433808394,"reduce",10],[1511433809894,"reduce",5],[1511433811336,"reduce",15],[1511433812832,"reduce",9],[1511433814137,"reduce",4]],"orderOfProcedures":"add","initialReduceOrder":[11,10,2,5,15,9,4,8,12,1,7,14,6,3,13]},"createdAt":"2017-11-23T10:44:08.955Z","updatedAt":"2017-11-23T10:44:08.955Z"},
        {"id":2,"resultBlob":{"log":[[1511433781603,"start"],[1511433788237,"add"],[1511433801509,"addEnd"],[1511433803152,"reduce"],[1511433815766,"reduceEnd"],[1511433819297,"submitBasketPreference"]],"survey":{"age":"11","sex":"male","costs":"3","other":"gg","degree":"high_school","balance":"3","aboutyou":"retired","comments":"agds","occupation":"culture&arts","feasibility":"3","nationality":"AF","sustainability":"3","global_fairness":"2","basketPreference":"b","adding_strategies":"3","removing_strategies":"3"},"groupcode":"asdf","addedValues":[1,2,3,7,9,11,13,14],"reducedValues":[1,3,6,7,8,12,13,14],"addedBasketLog":[[1511433790346,"add",13],[1511433791794,"add",7],[1511433792988,"add",3],[1511433794342,"add",11],[1511433796006,"add",2],[1511433797401,"add",14],[1511433798940,"add",9],[1511433800298,"add",1]],"evaluationOrder":"reduce","initialAddOrder":[13,7,3,11,2,14,9,1,10,5,12,4,8,15,6],"reducedBasketLog":[[1511433805288,"reduce",11],[1511433806932,"reduce",2],[1511433808394,"reduce",10],[1511433809894,"reduce",5],[1511433811336,"reduce",15],[1511433812832,"reduce",9],[1511433814137,"reduce",4]],"orderOfProcedures":"add","initialReduceOrder":[11,10,2,5,15,9,4,8,12,1,7,14,6,3,13]},"createdAt":"2017-11-23T10:44:19.270Z","updatedAt":"2017-11-23T10:44:19.270Z"}]
    )
  }

  pollResults = () => {

  }

  populateResults = (data) => {
    let tempRow = ""

    function toTempRow (colEntry) {
      tempRow += '<td>' + colEntry + '</td>'
    }

    _.forEach(data, (item) => {
      tempRow += '<tr>'
      toTempRow(item.id)
      toTempRow('timestamp')
      toTempRow(item.resultBlob.groupcode)
      // Final ADD basket with binary notation
      for (var i = 1; i <= 15; i++) {
        toTempRow(_.includes(item.resultBlob.addedValues, i) ? 1 : 0)
      }
      // Final REM basket with binary notation
      for (var j = 1; j <= 15; j++) {
        toTempRow(_.includes(item.resultBlob.reducedValues, j) ? 1 : 0)
      }
      // Similarity
      toTempRow(_.intersection(item.resultBlob.addedValues, item.resultBlob.reducedValues).length)
      // which came first
      toTempRow(item.resultBlob.orderOfProcedures)
      // initial order for add
      for (var k = 0; k < 15; k++) {
        toTempRow(item.resultBlob.initialAddOrder[k])
      }
      // // initial order for reduce
      // //TODO!! NB NB NB
      for (var k = 0; k < 15; k++) {
        toTempRow(item.resultBlob.initialReduceOrder[k])
      }
      toTempRow(item.resultBlob.evaluationOrder)
      toTempRow(item.resultBlob.survey.basketPreference)
      toTempRow(item.resultBlob.survey.adding_strategies)
      toTempRow(item.resultBlob.survey.removing_strategies)
      toTempRow(item.resultBlob.survey.costs)
      toTempRow(item.resultBlob.survey.feasibility)
      toTempRow(item.resultBlob.survey.sustainability)
      toTempRow(item.resultBlob.survey.balance)
      toTempRow(item.resultBlob.survey.global_fairness)
      toTempRow(item.resultBlob.survey.other)
      toTempRow(item.resultBlob.survey.comments)
      // personal data
      toTempRow(item.resultBlob.survey.aboutyou)
      toTempRow(item.resultBlob.survey.degree)
      toTempRow(item.resultBlob.survey.occupation)
      toTempRow(item.resultBlob.survey.nationality)
      toTempRow(item.resultBlob.survey.age)
      toTempRow(item.resultBlob.survey.sex)
      toTempRow((item.resultBlob.log[1][0] - item.resultBlob.log[0][0]) / 1000)
      toTempRow((item.resultBlob.log[2][0] - item.resultBlob.log[1][0]) / 1000)
      toTempRow((item.resultBlob.log[4][0] - item.resultBlob.log[3][0]) / 1000)
      //TODO: better logging
      toTempRow((item.resultBlob.log[5][0] - item.resultBlob.log[4][0]) / 1000)
      toTempRow((item.resultBlob.log[5][0] - item.resultBlob.log[4][0]) / 1000)

      // log / time spent
      // toTempRow((item.resultBlob.log[1][0] - item.log[0][0]) / 1000)
      tempRow += '</tr>'
    })

    return tempRow
  }

  componentDidMount () {
    let tbody = document.getElementById('tbody')
    tbody.innerHTML += this.populateResults(this.mockupResults())
  }

  render () {
    return (
      <div>
        <h1>Migthy results page</h1>

        <Table
          className='table'
        >
          <thead>
            <tr>
              <th colSpan='3'>Identification</th>
              <th colSpan='15'>ADD Procedure, Final Basket</th>
              <th colSpan='15'>REM Procedure, Final Basket</th>
              <th>Similarity</th>
              <th>Order of Procedures</th>
              <th colSpan='15'>Locations of strategies, ADD procedure</th>
              <th colSpan='15'>Locations of strategies, REM procedure</th>
              <th colSpan='2'> Evaluation of baskets</th>
              <th colSpan='9'> Evaluation of procedures</th>
              <th colSpan='6'> Personal data</th>
              <th>Log</th>

            </tr>
            <tr>
              <th>Id</th>
              <th>Timestamp</th>
              <th>Group code</th>
              <th>Strategy 1</th>
              <th>Strategy 2</th>
              <th>Strategy 3</th>
              <th>Strategy 4</th>
              <th>Strategy 5</th>
              <th>Strategy 6</th>
              <th>Strategy 7</th>
              <th>Strategy 8</th>
              <th>Strategy 9</th>
              <th>Strategy 10</th>
              <th>Strategy 11</th>
              <th>Strategy 12</th>
              <th>Strategy 13</th>
              <th>Strategy 14</th>
              <th>Strategy 15</th>
              <th>Strategy 1</th>
              <th>Strategy 2</th>
              <th>Strategy 3</th>
              <th>Strategy 4</th>
              <th>Strategy 5</th>
              <th>Strategy 6</th>
              <th>Strategy 7</th>
              <th>Strategy 8</th>
              <th>Strategy 9</th>
              <th>Strategy 10</th>
              <th>Strategy 11</th>
              <th>Strategy 12</th>
              <th>Strategy 13</th>
              <th>Strategy 14</th>
              <th>Strategy 15</th>
              <th>Number of common actions</th>
              <th>Order of Procedures</th>
              <th colSpan='41'>lol</th>
              <th>I am</th>
              <th>Highest degree</th>
              <th>Field of studies / Profession</th>
              <th>Country</th>
              <th>Age</th>
              <th>Sex</th>
              <th>Description of problem and strategies</th>
              <th>ADD procedure</th>
              <th>REM procedure</th>
              <th>Survey</th>
              <th>Total time spent</th>
            </tr>
          </thead>
          <tbody id='tbody'>
          </tbody>
        </Table>
      </div>
    )
  }
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
