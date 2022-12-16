import amqp from "amqplib/callback_api.js";

amqp.connect(process.env.RABBITMQ_URI, function (error0, connection) {
	if (error0) {
		throw error0;
	}
	connection.createChannel((error1, channel) => {
		if (error1) {
			throw error1;
		}
		var queue = "hello";
		var msg = "Hello world";

		channel.assertQueue(queue, {
			durable: false,
		});
		var email = "tejendradhanani@gmail.com";

		for (let i = 1; i < 20000; ++i)
			channel.sendToQueue(queue, Buffer.from(JSON.stringify({ email })));
		console.log(" [x] Sent %s", msg);
	});
});
