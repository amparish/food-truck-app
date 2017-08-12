
var accountSid = 'ACfcad3f9f64cae52ab9d92ee23e854df0'; // Account SID from www.twilio.com/console
var authToken = 'f20bc5f3eb5d5f634bfe76ece7c1d93d';   // Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

var Order = {
	sendText: function(customerName,customerPhone,order,specialRequests){
		client.messages.create({
			body:'NEW ORDER' + '\nName: ' + customerName + '\nPhone: ' + customerPhone + '\n' + order,
			to: "+15123503638",
			from: '+15128793978',
		}).then((message) => console.log(message.sid));
	}
}

module.exports = Order;