const EventEmitter = require('events');

const events = new EventEmitter();

events.on('response', (name, number) => {
	console.log('hello response' + ' ' + name + ' ' + number);
});

events.on('response', () => {
	console.log('hello response 2');
});

events.emit('response', 'aki', 34);
events.emit('response');
events.emit('response');
