//requir//require dependencies
var express = require("express");
var router = express.Router();
var Client = require("../models/index.js");
var geocode = require("../models/map.js");
var Order = require("../models/sms.js");
//landing page - inserts all burgers into handlebars
router.get("/",function(req,res){
	res.redirect("index.html");
});
//sends user to log in sign up page
router.get("/auth",function(req,res){
res.redirect("auth.html");
});
//sends user to login page
router.get("/logIn", function(req,res){
	res.redirect("logIn.html");
});
//sends user to sign up page
router.get("/vendorSignUp", function(req,res){
	res.render("vendorSignup");
})
//sends user to admin page where vendors can manipulate their data
router.get("/admin", function(req,res){
res.redirect("admin.html");
});
//sends user to page where they can update their company info
router.get("/vendorUpdate", function(req,res){
res.render("vendorUpdate")
});
//sends user to page where they can update their menu
router.get("/menuUpdate", function(req,res){
res.render("menu");
});
//sends user to page that displays trucks for browsing
router.get("/browse",function(req,res){
	Client.findAll({
	}).then(function(data){
		res.render("browse", { foodTruck: data});
		console.log(data);
	});
});
//sends user to specific truck page based off user input
router.get("/browse/truck/:id", function(req,res){
	var id = req.params.id;
	Client.findAll({
		where: {
			id: id
		}
	}).then(function(data){
		var defaultAddress = data[0].location;
		var menuItem = JSON.parse(data[0].menu);
		geocode.getCoord();
		res.render("truck", {foodTruck: data, menu: menuItem, truckLocation: defaultAddress});
	});
});
//sends user to confirmation page to confirm their order
router.post("/confirmation",function(req,res){
	console.log(req.body);
	res.render("confirmation");
});
//places order
router.post("/placeOrder",function(req,res){
	var customerName = req.body.customerName;
	var customerPhone = req.body.customerPhone;
	var order = req.body.order;

	var specialRequests = req.body.request;
	console.log(order);
	var message = "Order:";
	for (var i = 0; i < order.length;i++){
		message += "\n"+order[i].foodName;
	}
	if (specialRequests !== undefined){
		message += '\nRequests: ' + specialRequests;
	}
	console.log(message);

	Order.sendText(customerName, customerPhone, message);
});

//export router 
module.exports = router;


