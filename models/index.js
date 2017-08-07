var connection = require("../config/connection.js");
var Sequelize = require("Sequelize");

var Client= connection.define("clients",{
  info: Sequelize.STRING,
  vendor: Sequelize.BOOLEAN,
  clientEmail: Sequelize.STRING,
  clientPassword: Sequelize.STRING
},{
  timestamps: false
})

module.exports = Client;