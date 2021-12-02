const MyEventEmitter = require('./my_event_emitter');

const eventEmitter = new MyEventEmitter();

eventEmitter.on('greet', name => {
    console.log(`Hello my dear friend ${name}!`);
});

eventEmitter.on('greet', name => {
    console.log(`How are you doing ${name}?`);
});

eventEmitter.emit('greet', "Nasko");

eventEmitter.on('subscribe', (engineID) => {
    console.log(`Engine ${engineID} subscribed to channel.`);
});

eventEmitter.emit('subscribe', 1111);