$(document).ready(function(){
	//modal control
	$('.modal').modal();
	var counter = 0;
	var id=0;
	var totalArr = [];
	

	$(".addToCartBtn").on("click", function(e){
		e.preventDefault();
			var total = 0;
			console.log(this.name)
			var str = this.name;
			var arr = str.split(",");
			var fn = arr[0];
			var fd = arr[1];
			var p = arr[2];
			var obj = '{"foodName":"'+fn+'","foodDescription":"'+fd+'","price":"'+p+'","id":"'+id+'"}';
			console.log(obj)
			sessionStorage.setItem("menuItem",obj);
			var item = sessionStorage.getItem("menuItem");
			var cartItem = JSON.parse(item);
			var parsedPrice = parseFloat(cartItem.price);
			totalArr.push(parsedPrice);
			for(var i=0; i < totalArr.length; i++){
				total += totalArr[i];
				console.log(totalArr[i])
			}
			var tax = total * .0825;
			tax = parseFloat(tax);
			var totalSale = tax + total;
			totalSale = totalSale.toFixed(2);
			tax = tax.toFixed(2);
			console.log(totalSale);
			
			//sets up list of items in cart
			var display= "<table id="+cartItem.id+">";
			display += "<tr>";
			display += "<td class='col s4'>"+cartItem.foodName+"</td>";
			display += "<td class='col s6'>"+cartItem.foodDescription+"</td>";
			display += "<td class='col s2'>"+"$"+cartItem.price+"</td>";
			display += "</tr>";
			display += "</table>";
			$("#itemList").append(display);
			$("#totalPrice").html(
				"pre-tax: "+"$"+total+"   "+
				"tax: "+"$"+tax+"   "+
				"Total Price: $"+totalSale
			);
			counter += 1;
			if (counter > 1){
				$("#cartCounter").html("+"+counter);
			}else if (counter > 0){
				$("#cartCounter").html("+"+counter);
				$("#cartCounter").removeClass("hidden");
			}else{
				$("#cartCounter").addClass("hidden");
			}
			id+=1;
	});

	//this will actually be for delete just testing logic
	$(".navBtn").on("click", function(e){
		e.preventDefault();
		counter = counter -1;
					if (counter > 1){
				$("#cartCounter").html("+"+counter);
			}else if (counter > 0){
				$("#cartCounter").html("+"+counter);
				$("#cartCounter").removeClass("hidden");
			}else{
				$("#cartCounter").addClass("hidden");
			}
	})
});