// TESTING GOOGLE MAPS GEOCODING API - not sure where to implement this code, might use AJAX call instead
var vendor = require(""); // require file that contains vendor locations as variables
var maps = require('@google/maps').createClient({
  key: 'AIzaSyBIy-qu_cTZvSFnBXxSM2yWC3NJHSmP2EE'
});

var defaultAddress = vendor.mainLocation; // string that contains full address info
var coordinates = vendor.tempLocation; // should be an array of two numbers that are latitude/longitude of the location

// Adding a Google Map to HTML page https://developers.google.com/maps/documentation/javascript/adding-a-google-map

// Geocode an address.
maps.geocode({
  address: defaultAddress
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});

// Reverse geocode - turn dropped pin w/ latitude/longitude into address
maps.reverseGeocode({
      latlng: coordinates
}, function(err, response) {
  if (!err) {
    console.log(response.json.results);
  }
});

// export this somewhere??