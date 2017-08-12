$(document).ready(function(){
		      function initMap() {
		        var truckLocation = {lat: 30.286989, lng: -97.728915};
		        var map = new google.maps.Map(document.getElementById('map'), {
		          zoom: 15,
		          center: truckLocation
		        });
		        var marker = new google.maps.Marker({
		          position: truckLocation,
		          map: map
		        });
		      }	
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
				"pre-tax: "+"$"+total.toFixed(2)+"   "+
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

		$(document).on("click",".delete",function(){
			var total = 0;
			var self = this;
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
			var updatedCart = cart.filter(function(obj) {
				var objToDelete = self.value;
				objToDelete = parseInt(objToDelete);
				var objToKeep = obj.key;
				objToKeep = parseInt(objToKeep);
			    return objToKeep !== objToDelete;
			});
			cart = updatedCart;
			var index = parseInt(this.value);
				for (var i=totalArr.length-1; i>=0; i--) {
				    if (totalArr[i] === totalArr[index]) {
				        totalArr.splice(i, 1);
				    }
				}			
			for(var i=0; i < totalArr.length; i++){
				total += totalArr[i];
			}
			var tax = total * .0825;
			tax = parseFloat(tax);
			var totalSale = tax + total;
			totalSale = totalSale.toFixed(2);
			tax = tax.toFixed(2);
			$("#totalPrice").html(
				"pre-tax: "+"$"+total.toFixed(2)+"   "+
				"tax: "+"$"+tax+"   "+
				"Totalnew Price: $"+totalSale);
		});

	$("#checkout").on("click", function(e){
		console.log(cart);
		var order = {
			orderArr: cart,
			request: null,
		}
		sessionStorage.setItem("order",JSON.stringify(order));
	});
});