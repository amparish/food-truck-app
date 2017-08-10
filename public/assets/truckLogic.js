$(document).ready(function(){
	//modal control
	$('.modal').modal();
	var counter = 0;
	var id=0;
	var totalArr = [];
	var cart = [];

	$(".addToCartBtn").on("click", function(e){
		e.preventDefault();
			var total = 0;
			var str = this.name;
			var arr = str.split(",");
			var fn = arr[0];
			var fd = arr[1];
			var p = arr[2];
			var obj = '{"foodName":"'+fn+'","foodDescription":"'+fd+'","price":"'+p+'","id":"'+id+'"}';
			sessionStorage.setItem("menuItem",obj);
			var item = sessionStorage.getItem("menuItem");
			var cartItem = JSON.parse(item);
			var parsedPrice = parseFloat(cartItem.price);
			totalArr.push(parsedPrice);
			for(var i=0; i < totalArr.length; i++){
				total += totalArr[i];
			}
			var tax = total * .0825;
			tax = parseFloat(tax);
			var totalSale = tax + total;
			totalSale = totalSale.toFixed(2);
			tax = tax.toFixed(2);
			var key = cartItem.id;
			var name = cartItem.foodName;
			var description = cartItem.foodDescription;
			var price = cartItem.price;
			
			//sets up list of items in cart
			var display= "<table id="+key+">";
			display += "<tr>";
			display += "<td class='col s4'>"+name+"</td>";
			display += "<td class='col s6'>"+description+"</td>";
			display += "<td class='col s2'>"+"$"+price;
			display += "<button class='delete' value="+key+"><i class='material-icons'>delete</i></button></td>";
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
			cart.push({key,name,description,price});
	});
	//this will actually be for delete just testing logic
	console.log(cart)


		// $(".delete").on("click", function(){
		// 	console.log("i can delete!" + this)
		// })
		$(document).on("click",".delete",function(){
			console.log(this.value)
			$("#"+this.value).remove();
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

	$("#cartNavBtn").on("click", function(e){
		e.preventDefault();
		console.log(cart);
		// $(document).on("click","#delete"+cart.i.key,function(){
		// 	console.log("i can delete this")
		// })
	})
});