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

router.get("/admin", function(req,res){
res.redirect("admin.html");
});

router.get("/vendorUpdate", function(req,res){
res.render("vendorUpdate")
});

router.get("/menuUpdate", function(req,res){
res.render("menu");
});

router.get("/auth",function(req,res){
res.redirect("auth.html");
});

router.get("/vendorSignUp", function(req,res){
	res.render("vendorSignup");
})

router.get("/logIn", function(req,res){
	res.redirect("logIn.html");
});

router.post("/signUp/create", function(req,res){
	//****************will need to set up some auth handling here***************
	// Client.create(user).then(function(data){
		res.redirect("/browse");
	// });
});
router.get("/browse",function(req,res){
	Client.findAll({
	}).then(function(data){
		res.render("browse", { foodTruck: data});
	});
});

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

router.post("/confirmation",function(req,res){
	console.log(req.body);
	res.render("confirmation");
});

router.post("/placeOrder",function(req,res){
	console.log(req.body);
	var customerName = req.body.customerName;
	var customerPhone = req.body.customerPhone;
	var order = req.body.orderArr;
	var specialRequests = req.body.request;
	console.log(customerPhone, customerName, order, specialRequests);
	Order.sendText(customerName, customerPhone, order, specialRequests);
});

// router.post("/confirmation",function(req,res){
// 	// console.log(req.body);
// 	// var customerName = req.body.customerName;
// 	// var customerPhone = req.body.customerPhone;
// 	// var order = req.body.orderArr;
// 	// var specialRequests = req.body.request;
// 	// console.log(customerPhone,customerName,order,specialRequests)
// 	// Order.sendText("patrick","+15123503638","one crabby patty please","hold the plankton");
// })

//export router 
module.exports = router;


