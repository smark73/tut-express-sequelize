const Sequelize = require('sequelize')
module.exports = new Sequelize('express_psql_app', 'dev', 'password', {
  host: 'localhost',
  dialect: 'postgres',
})