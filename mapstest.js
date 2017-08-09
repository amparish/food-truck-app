// TESTING GOOGLE MAPS GEOCODING API - not sure where to implement this code, might use AJAX call instead

var maps = require('@google/maps').createClient({
  key: 'AIzaSyBIy-qu_cTZvSFnBXxSM2yWC3NJHSmP2EE'
});

// "process.argv" for testing purposes only
var defaultAddress = process.argv[2];
var coordinates = [process.argv[2], process.argv[3]];

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
