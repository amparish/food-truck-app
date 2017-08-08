$(document).ready(function(){
	//modal control
	$('.modal').modal();
	$(".addToCartBtn").on("click", function(){
		console.log(this.id);
		sessionStorage.setItem("foodName",this.id);
		var menuItem = "<div>";
		menuItem += sessionStorage.getItem("foodName");
		menuItem += "</div>";
		$(".modal-content").append(menuItem);
	});
});