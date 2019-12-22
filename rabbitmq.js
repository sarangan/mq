const amqp = require('amqplib/callback_api');
const queue = 'msg-q';
const util = require('util');


function pingMQ(){
    const amqpPromise = util.promisify(amqp.connect);
    return amqpPromise;
}

async function publishMsg(msg){
    // try{
    //     const amqpPromise = util.promisify(amqp.connect);
    //     const connection = await amqpPromise('amqp://user:password@localhost');
    //     const channel = util.promisify(connection.createChannel);
    //     const createChannel = await channel();
    //     createChannel.assertQueue(queue, {
    //         durable: false
    //     });
    //     createChannel.sendToQueue(queue, Buffer.from(msg));
    //     console.log(" [x] Sent %s", msg);

    // }
    // catch(ex){
    //     console.log(ex);
    // }
    amqp.connect('amqp://user:password@localhost', function(error0, connection) {
        if (error0) {
            throw error0;
        }

        connection.createChannel(function(error1, channel) {
            if (error1) {
              throw error1;
            }
            
        
            channel.assertQueue(queue, {
              durable: false
            });
        
            channel.sendToQueue(queue, Buffer.from(msg));
            console.log(" [x] Sent %s", msg);
        });

    });

}

function receiveQ(){
    amqp.connect('amqp://user:password@localhost', function(error0, connection) {
    if (error0) {
        throw error0;
    }
    connection.createChannel(function(error1, channel) {
        if (error1) {
            throw error1;
        }

        channel.assertQueue(queue, {
            durable: false
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, function(msg) {
            console.log(" [x] Received %s", msg.content.toString());
        }, {
            noAck: true
        });

    });

    });
}

module.exports = {
    publish: publishMsg,
    receive: receiveQ
}