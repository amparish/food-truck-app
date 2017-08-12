$(document).ready(function(){
	//get item from session storage
var order = sessionStorage.getItem("order");
//parse the JSON to be used
var cartObj = JSON.parse(order);
//get the order array from json
var orderArr = cartObj.orderArr;
//set preTaxTotal to 0
var preTaxTotal = 0;
//loop through array to append each item and calculate pre tax total
for (var i=0;i<orderArr.length;i++){
	var displayItem = "<div>";
	displayItem += orderArr[i].name + "-  " + orderArr[i].description + "       $"+ orderArr[i].price;
	displayItem += "</div>";
	$(".order").append(displayItem)

	preTaxTotal += parseFloat(orderArr[i].price);
} 
//calculate tax
var tax = preTaxTotal.toFixed(2) * .0825;
var total = preTaxTotal + tax;

$(".preTax").html("sub total - "+"$"+preTaxTotal.toFixed(2));
$(".tax").html("tax - "+"$"+tax.toFixed(2));
$(".totalSale").html("total sale - "+"$"+total.toFixed(2));
$("#placeOrder").on("click", function(){
	var orderObj = {
		customerName: $(".name").val().trim(),
		customerPhone: $(".phone").val().trim(),
		order: orderArr,
	}

	$.post("/placeOrder",orderObj,function(){});
});
});
