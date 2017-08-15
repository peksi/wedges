var express = require('express')
var router = express.Router()
var pgConf = require('../config/postgres.config')
var Sequelize = require('sequelize')
// var _ = require('lodash')

var sequelize = new Sequelize(
  pgConf.database,
  pgConf.user,
  pgConf.password, {
    host: 'localhost',
    dialect: 'postgres'
  }
)

const SurveyEntry = sequelize.define('entry', {
  entry: {
    type: Sequelize.JSON
  }
})

function testConnection () {
  sequelize.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err)
    })
}

function saveData (data) {
  SurveyEntry.sync().then(() => {
    return SurveyEntry.create({
      entry: data
    })
  })
}

// router.get('/', function (req, res) {
//   SurveyEntry.findAll().then(entries => {
//     res.send(_.map(entries, i => { return JSON.stringify(i.dataValues.entry) }))
//
//     console.log(
//       _.map(entries, i => { return JSON.stringify(i.dataValues.entry) })
//     )
//   })
// })

router.post('/', function (req, res) {
  try {
    testConnection()
    const data = req.body
    saveData(data)
  } catch (e) {
    res.send(e)
  } finally {
    res.send('Data saved')
  }
})

module.exports = router
