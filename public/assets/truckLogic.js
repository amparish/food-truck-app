$(document).ready(function(){
	//modal control
	$('.modal').modal();
	var counter = 0;
	$(".addToCartBtn").on("click", function(e){
		e.preventDefault();
			console.log(this.name)
			var str = this.name;
			var arr = str.split(",");
			var fn = arr[0];
			var fd = arr[1];
			var p = arr[2];
			var obj = '{"foodName":"'+fn+'","foodDescription":"'+fd+'","price":"'+p+'"}';
			sessionStorage.setItem("menuItem",obj);
			var item = sessionStorage.getItem("menuItem");
			var cartItem = JSON.parse(item);
			var display = "<table>";
			display += "<tr>";
			display += "<td>item</td><td>price</td>";
			display += "</tr>";
			display += "<tr>";
			display += "<td>"+cartItem.foodName+"</td>";
			// display += "<td>"+cartItem.foodDescription+"</td>";
			display += "<td>"+cartItem.price+"</td>";
			display += "</tr>";
			display += "</table>";
			$(".modal-content").append(display);
			counter += 1;
			console.log(counter);
			if (counter > 1){
				$("#cartCounter").html("+"+counter);
			}else if (counter > 0){
				$("#cartCounter").html("+"+counter);
				$("#cartCounter").removeClass("hidden");
			}else{
				$("#cartCounter").addClass("hidden");
			}
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