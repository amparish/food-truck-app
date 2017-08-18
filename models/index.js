var connection = require("../config/connection.js");
var Sequelize = require("Sequelize");

var Client= connection.define("clients",{
  companyName: Sequelize.STRING,
  clientEmail: Sequelize.STRING,
  clientPassword: Sequelize.STRING,
  phoneNumber: Sequelize.STRING,
  description: Sequelize.STRING,
  location: Sequelize.STRING,
  menu: Sequelize.STRING,
  photo: Sequelize.STRING
},{
  timestamps: false
})

module.exports = Client;