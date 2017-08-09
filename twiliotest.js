var order = require("");
var accountSid = 'account SID here'; // Account SID from www.twilio.com/console
var authToken = 'api key here';   // Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'NEW ORDER: ' + order.orderArr + 'Requests: ' + order.requestText + 'Total: $' + order.price,
    to: '+1' + vendorNum,  // Text this number
    from: '+15128793978' // From a valid Twilio number
}).then((message) => console.log(message.sid));

/*

if customer, text order confirmation in body?
	- or send to html page that displays confirmation message (would save on SMS cost)
else text order information (to vendor)

Separate JS files for message to customer and vendor?

Send same text to both?

*/