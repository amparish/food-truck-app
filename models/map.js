// TESTING GOOGLE MAPS GEOCODING API - not sure where to implement this code, might use AJAX call instead
var maps = require('@google/maps').createClient({
  key: 'AIzaSyBQF8ObbvuQLJDt-en7VICr5VEX18C13VU'
});

// Geocode an address.
var geocode = {
	getCoord: function(defaultAddress){
		maps.geocode({
			address: defaultAddress
		}, function(err, response) {
			if (!err) {
		    	console.log(response.json.results);
			}
			console.log(response);
		});
	},
	getAddr: function(){
		maps.reverseGeocode({
    		latlng: coordinates
		}, function(err, response) {
			if (!err) {
    			console.log(response.json.results);
			}
		});
	}
}

// Reverse geocode - turn dropped pin w/ latitude/longitude into address

module.exports = geocode;