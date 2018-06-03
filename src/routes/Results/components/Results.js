import React from 'react'
import { Table } from 'react-bootstrap'
import './Results.scss'
import { browserHistory } from 'react-router'
import _ from 'lodash'

export class Results extends React.Component {
  constructor (...args) {
    super(...args)
    this.mockupResults = this.mockupResults.bind(this)
    this.getContent = this.getContent.bind(this)
    this.populateResults = this.populateResults.bind(this)
  }
  mockupResults = () => {
    return (
      [{"id":1,"resultBlob":{"log":[[1511874228304,"start"],[1511874238339,"reduce"],[1511874249860,"reduceEnd"],[1511874251872,"add"],[1511874263370,"addEnd"],[1511874266509,"submitBasketPreference"],[1511874284554,"finalSubmit"],[1511874299707,"finalSubmit"]],"survey":{"age":"11","sex":"male","costs":"2","degree":"bachelor","balance":"2","aboutyou":"studying","occupation":"healthcare","feasibility":"2","nationality":"AX","sustainability":"2","global_fairness":"2","basketPreference":"a","adding_strategies":"1","removing_strategies":"1"},"groupcode":"asegdsafgdsg","addedValues":[1,6,7,9,11,12,14,15],"reducedValues":[2,6,7,8,10,11,12,15],"addedBasketLog":[[1511874253515,"add",6],[1511874254732,"add",11],[1511874255821,"add",9],[1511874257250,"add",14],[1511874258623,"add",7],[1511874259579,"add",15],[1511874260760,"add",12],[1511874262358,"add",1]],"evaluationOrder":"reduce","initialAddOrder":[6,4,11,9,7,14,15,1,10,12,2,5,13,8,3],"reducedBasketLog":[[1511874240354,"reduce",9],[1511874241455,"reduce",3],[1511874242670,"reduce",1],[1511874244886,"reduce",5],[1511874246337,"reduce",4],[1511874247699,"reduce",13],[1511874248869,"reduce",14]],"orderOfProcedures":"reduce","initialReduceOrder":[9,3,1,5,13,4,14,7,10,15,8,2,12,6,11]},"createdAt":"2017-11-28T13:06:22.941Z","updatedAt":"2017-11-28T13:06:22.941Z"}]
    )
  }

  getContent = (url) => {
    // return new pending promise
    return new Promise((resolve, reject) => {
      // select http or https module, depending on reqested url
      const lib = url.startsWith('https') ? require('https') : require('http');
      const request = lib.get(url, (response) => {
        // handle http errors
        if (response.statusCode < 200 || response.statusCode > 299) {
           reject(new Error('Failed to load page, status code: ' + response.statusCode));
         }
        // temporary data holder
        const body = [];
        // on every content chunk, push it to the data array
        response.on('data', (chunk) => body.push(chunk));
        // we are done, resolve promise with those joined chunks
        response.on('end', () => resolve(body.join('')));
      });
      // handle connection errors of the request
      request.on('error', (err) => reject(err))
      })
  };

  populateResults = (data) => {
    let tempRow = ""

    function toTempRow (colEntry) {
      tempRow += '<td>' + colEntry + '</td>'
    }

    console.log(data)

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
      if( item.resultBlob.survey ) {
        toTempRow(item.resultBlob.survey.basketPreference)
        toTempRow(item.resultBlob.survey.adding_strategies)
        toTempRow(item.resultBlob.survey.removing_strategies)
        toTempRow(item.resultBlob.survey.synergies_add)
        toTempRow(item.resultBlob.survey.costs_add)
        toTempRow(item.resultBlob.survey.feasibility_add)
        toTempRow(item.resultBlob.survey.synergies_remove)
        toTempRow(item.resultBlob.survey.costs_remove)
        toTempRow(item.resultBlob.survey.feasibility_remove)
        toTempRow(item.resultBlob.survey.process_and_feelings_add)
        toTempRow(item.resultBlob.survey.process_and_feelings_remove)
        // personal data
        toTempRow(item.resultBlob.survey.aboutyou)
        toTempRow(item.resultBlob.survey.degree)
        toTempRow(item.resultBlob.survey.occupation)
        toTempRow(item.resultBlob.survey.nationality)
        toTempRow(item.resultBlob.survey.age)
        toTempRow(item.resultBlob.survey.sex)
      }

      // TODO: better logging

      function findTime (logBlob, item){
        for (var i = 0; i < logBlob.length; i++) {
          if (logBlob[i][1] === item){
            return logBlob[i][0]
          }
        }
      }

      function findFirstNotStart(logBlob){
        for (var i = 0; i < logBlob.length; i++) {
          if (logBlob[i][1] !== "start"){
            return logBlob[i][0]
          }
        }
      }

      function beforeSubmitBasketPreference(logBlob){
        for (var i = 0; i < logBlob.length; i++) {
          if (logBlob[i][1] == "submitBasketPreference"){
            return logBlob[i-1][0]
          }
        }
      }

      const logB = item.resultBlob.log

      toTempRow((findFirstNotStart(logB) - findTime(logB, 'start')) / 1000) // desc
      toTempRow((findTime(logB, 'addEnd') - findTime(logB, 'add')) / 1000) // add
      toTempRow((findTime(logB, 'reduceEnd') - findTime(logB, 'reduce')) / 1000) // reduce
      toTempRow((findTime(logB, 'finalSubmit') - beforeSubmitBasketPreference(logB)) / 1000) //survey
      toTempRow((findTime(logB, 'finalSubmit') - findTime(logB, 'start')) / 1000) // total

      // toTempRow((item.resultBlob.log[1][0] - item.resultBlob.log[0][0]) / 1000) // desc time
      // toTempRow((item.resultBlob.log[2][0] - item.resultBlob.log[1][0]) / 1000) // add
      // toTempRow((item.resultBlob.log[4][0] - item.resultBlob.log[3][0]) / 1000) // reduce
      // toTempRow((item.resultBlob.log[6][0] - item.resultBlob.log[4][0]) / 1000) // survey
      // toTempRow((item.resultBlob.log[6][0] - item.resultBlob.log[0][0]) / 1000) // total

      const addedBasketLogObj = item.resultBlob.addedBasketLog
      const reducedBasketLogObj = item.resultBlob.reducedBasketLog

      function ret2ndValOfArr (arr) {
        return arr[1]
      }

      toTempRow((_.groupBy(_.map(addedBasketLogObj, ret2ndValOfArr))).add.length)

      toTempRow((_.groupBy(_.map(reducedBasketLogObj, ret2ndValOfArr))).reduce.length)

      // log / time spent
      // toTempRow((item.resultBlob.log[1][0] - item.log[0][0]) / 1000)
      tempRow += '</tr>'
    })

    return tempRow
  }

  componentDidMount () {
    let tbody = document.getElementById('tbody')
    this.getContent('http://carbcut.aalto.fi/api').then((html) => {
      tbody.innerHTML += this.populateResults(JSON.parse(html))
    })
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
              <th colSpan='10'> Evaluation of procedures - Scale: 1, very easy/not at all - 5, very difficult/very much </th>
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
              <th>First procedure</th>
              <th colSpan='30'></th>
              <th>Basket a is</th>
              <th>Preferred basket</th>
              <th>adding strategies</th>
              <th>removing strategies</th>
              <th>synergies_add</th>
              <th>costs_add</th>
              <th>feasibility_add</th>
              <th>synergies_remove</th>
              <th>costs_remove</th>
              <th>feasibility_remove</th>
              <th>process_and_feelings_add</th>
              <th>process_and_feelings_remove</th>

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
              <th>Add basket movements</th>
              <th>Reduce basket movements</th>
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
