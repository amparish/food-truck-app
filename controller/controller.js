//require dependencies
var express = require("express");
var router = express.Router();
var Data = require("../models/index.js");

//landing page - inserts all burgers into handlebars
router.get("/",function(req,res){
	Data.findAll({
		where:{
			id: 8
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
		console.log("menu")
		console.log("****************************************")
		for (i=0;i < menuLength; i++){
			console.log("food name: "+data.menu[i].name);
			console.log("food description: " + data.menu[i].description);
			console.log("food price: " + data.menu[i].price);
			console.log("---------------------------------------");
		};
	});
	res.redirect("index.html");
});

router.get("/signUp",function(req,res){
	res.redirect("signUp.html");
});

router.get("/logIn", function(req,res){
	res.redirect("logIn.html");
})

//export router
module.exports = router;