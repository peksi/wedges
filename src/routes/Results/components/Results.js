import React from 'react'
import { Table } from 'react-bootstrap'
import './Results.scss'
import { browserHistory } from 'react-router'
import _ from 'lodash'

export class Results extends React.Component {
  constructor (...args) {
    super(...args)
    this.mockupResults = this.mockupResults.bind(this)
    this.populateResults = this.populateResults.bind(this)
  }
  mockupResults = () => {
    return (
      [
        {"groupcode":"gg","addedValues":[9,5,7,15,13,11,10,2],"reducedValues":[3,4,7,8,9,10,12,13],"orderOfProcedures":"reduce","initialAddOrder":[9,5,7,15,13,11,10,2,12,4,3,8,14,6,1],"initialReduceOrder":[5,15,14,11,6,1,2,8,9,7,4,13,3,12,10],"evaluationOrder":"reduce","survey":{"basketPreference":"a+","adding_strategies":"1","removing_strategies":"1","costs":"1","feasibility":"1","sustainability":"2","balance":"2","global_fairness":"2","comments":"gg","other":"asfdg","aboutyou":"working","degree":"high_school","occupation":"business&economics","nationality":"AD","age":"22","sex":"male"},"log":[[1511361013570,"start"],[1511361019427,"reduce"],[1511361029809,"reduceEnd"],[1511361032095,"add"],[1511361043616,"addEnd"],[1511361046323,"submitBasketPreference"]],"reducedBasketLog":[[1511361021363,"reduce",5],[1511361022511,"reduce",15],[1511361023500,"reduce",14],[1511361024602,"reduce",11],[1511361025826,"reduce",6],[1511361027589,"reduce",1],[1511361028818,"reduce",2]],"addedBasketLog":[[1511361033814,"add",9],[1511361035080,"add",5],[1511361036138,"add",7],[1511361037308,"add",15],[1511361038290,"add",13],[1511361039904,"add",11],[1511361041013,"add",10],[1511361042708,"add",2]]}
    ]
    )
  }

  populateResults = (data) => {
    let tempRow = ""

    function toTempRow (colEntry) {
      tempRow += '<td>' + colEntry + '</td>'
      console.log('laorsgiawr')
    }

    _.forEach(data, (item) => {
      toTempRow(item.id)
      toTempRow('timestamp')
      toTempRow(item.groupCode)
      // Final ADD basket with binary notation
      for (var i = 1; i <= 15; i++) {
        toTempRow(_.includes(item.addedValues, i) ? 1 : 0)
      }
      // Final REM basket with binary notation
      for (var j = 1; j <= 15; j++) {
        toTempRow(_.includes(item.reducedValues, j) ? 1 : 0)
      }
      // Similarity
      toTempRow(_.intersection(item.addedValues, item.reducedValues).length)
      // which came first
      toTempRow(item.orderOfProcedures)
      // initial order for add
      for (var k = 0; k < 15; k++) {
        toTempRow(item.initialAddOrder[k])
      }
      // initial order for reduce
      //TODO!! NB NB NB
      for (var k = 0; k < 15; k++) {
        toTempRow(item.initialReduceOrder[k])
      }
      toTempRow(item.evaluationOrder)
      toTempRow(item.survey.basketPreference)
      toTempRow(item.survey.adding_strategies)
      toTempRow(item.survey.removing_strategies)
      toTempRow(item.survey.costs)
      toTempRow(item.survey.feasibility)
      toTempRow(item.survey.sustainability)
      toTempRow(item.survey.balance)
      toTempRow(item.survey.global_fairness)
      toTempRow(item.survey.other)
      toTempRow(item.survey.comments)
      // personal data
      toTempRow(item.survey.aboutyou)
      toTempRow(item.survey.degree)
      toTempRow(item.survey.occupation)
      toTempRow(item.survey.nationality)
      toTempRow(item.survey.age)
      toTempRow(item.survey.sex)

      // log / time spent
      toTempRow((item.log[1][0] - item.log[0][0]) / 1000)
    })

    console.log('hree')
    console.log(tempRow)

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
              <th colSpan='5'> Evaluation of procedures</th>
              <th colSpan='5'> Personal data</th>

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
