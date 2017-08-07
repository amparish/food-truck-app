var connection = require("../config/connection.js");
var Sequelize = require("Sequelize");

var Data= connection.define("data",{
  info: Sequelize.STRING,
  vendor: Sequelize.BOOLEAN
},{
  timestamps: false
})

module.exports = Data;