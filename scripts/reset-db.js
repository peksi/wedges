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

console.log('magic')

sequelize.sync({ force: true })
  .then(() => sequelize.close())
  .then(() => console.log('Database reset finished.'))
