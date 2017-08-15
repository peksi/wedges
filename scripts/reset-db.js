var Sequelize = require('sequelize')
var pgConf = require('../config/postgres.config')

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

sequelize.sync({ force: true })
  .then(() => SurveyEntry.truncate())
  .then(() => sequelize.close())
  .then(() => console.log('Database reset finished.'))
  .catch(e => console.log(e))
