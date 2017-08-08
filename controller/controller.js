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
	var user = req.body;
	Client.create(user).then(function(data){
		res.redirect("/");
	});
});

//export router
module.exports = router;


	////example of how we can interact with data from JSON in info column
	Client.findAll({
		where:{
			id: 1
		},
		raw: true
	}).then(function(data){
		var obj = data[0].info;
		var data = JSON.parse(obj);
		var menuLength = data.menu.length;
		console.log("vendor info");
		console.log("----------------------------");
		console.log("name: " + data.name);
		console.log("location: " + data.location);
		console.log("phone number: " + data.phoneNumber);
		console.log("menu");
		console.log("****************************************");
		for (i=0;i < menuLength; i++){
			console.log("food name: "+data.menu[i].name);
			console.log("food description: " + data.menu[i].description);
			console.log("food price: " + data.menu[i].price);
			console.log("---------------------------------------");
		};
	});