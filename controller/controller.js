//require dependencies
var express = require("express");
var router = express.Router();
var Client = require("../models/index.js");
//landing page - inserts all burgers into handlebars
router.get("/",function(req,res){
	res.redirect("index.html");
});

router.get("/auth",function(req,res){
res.redirect("auth.html");
})

router.get("/vendorSignUp", function(req,res){
	res.redirect("vendorSignUp.html");
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
		console.log(data)
		var menuItem = JSON.parse(data[0].menu);
		res.render("truck", {foodTruck: data , menu: menuItem})
	});
});

router.get("/cart", function(req,res){
	console.log(req.body);
});

//export router
module.exports = router;

