var Sequelize = require("Sequelize");

var connection;
if (process.env.JAWSDB_URL) {
	connection = new Sequelize(process.env.JAWSDB_URL);
}else{
	connection = new Sequelize("foodtruck", "root", "", {
	  host: "localhost",
	  dialect: "mysql",
	  pool: {
	    max: 5,
	    min: 0,
	    idle: 10000
	  }
	});
}
module.exports = connection;