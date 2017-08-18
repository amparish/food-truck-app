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
	//side nav control
	$(".button-collapse").sideNav();
	//set counter to 0
	var counter = 0;
	//set id to 0
	var id=0;
	var cart = [];

	$(".addToCartBtn").on("click", function(e){
		e.preventDefault();
			var key = "item"+id.toString();
			//set total to zero each time an item is added to menu
			var subTotal = 0;
			//set str as the name of the button
			var str = this.name;
			//split string by commas to create an array
			var arr = str.split(",");
			//first index in array is the food name
			var foodName = arr[0];
			//second index in the array is the food description
			var foodDescription = arr[1];
			//third index in the array is the price
			var price = parseFloat(arr[2]);

			// //sets up list of items in cart
			var display= "<table id="+key+">";
			display += "<tr>";
			display += "<td class='col s4'>"+foodName+"</td>";
			display += "<td class='col s6'>"+foodDescription+"</td>";
			display += "<td class='col s2'>"+"$"+price;
			display += "<button class='delete' value="+key+"><i class='material-icons'>delete</i></button></td>";
			display += "</tr>";
			display += "</table>";
			$("#itemList").append(display);

			//increase counter when an item is added
			counter += 1;
			//increment id for the next item 
			id+=1;
			//push item to cart
			cart.push({key,foodName,foodDescription,price});
			//update html
			updateTotals();
			updateCartCounter();
	});


		$(document).on("click",".delete",function(){
			//remove the table
			$("#"+this.value).remove();
			//decrement counter by 1
			counter = counter -1;
			//delete item from cart
			for (var i = 0; i < cart.length;i++){
				if (cart[i].key === this.value){
					console.log(i)
					cart.splice(i,i+1);
				}
			}
			//update html
			updateTotals();
			updateCartCounter();
		});

	function updateTotals(){
				var subTotal = 0;
				//loop through totalArr to get current total
				for (var i = 0; i < cart.length; i++){
					subTotal += cart[i].price;
				}
				//calculate tax
				var tax = subTotal * .0825;
				//calculate total
				var total = subTotal + tax;
				//update html
				$("#totalPrice").html(
					"\npre-tax: "+"$"+subTotal.toFixed(2)+
					"\ntax: "+"$"+tax.toFixed(2)+
					"\nTotal: $"+total.toFixed(2)
				);
	}

	function updateCartCounter(){
			if (counter > 1){
				$("#cartCounter").html("+"+counter);
			}else if (counter > 0){
				$("#cartCounter").html("+"+counter);
				$("#cartCounter").removeClass("hidden");
			}else{
				$("#cartCounter").addClass("hidden");
			}
	}

	$("#checkout").on("click", function(e){
		console.log(cart);
		var order = {
			orderArr: cart,
			request: null,
		}
		sessionStorage.setItem("order",JSON.stringify(order));
	});
});