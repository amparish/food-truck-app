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

//export router
module.exports = router;


	////example of how we can interact with data from JSON in info column
