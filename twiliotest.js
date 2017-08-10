var order = require(""); // require file that defines all the necessary order variables
var accountSid = 'ACfcad3f9f64cae52ab9d92ee23e854df0'; // Account SID from www.twilio.com/console
var authToken = 'f20bc5f3eb5d5f634bfe76ece7c1d93d';   // Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var vendorNum = order.vendorNum;

client.messages.create({
    body: 'NEW ORDER' + '\nName: ' + order.customerName + '\nPhone: ' + order.customerPhone + '\n' + order.orderArr + '\nRequests: ' + order.requestText + '\nTotal: $' + order.price,
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