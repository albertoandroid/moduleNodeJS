const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('event', function(){
    console.log('Un evento ha ocurrido...');
})

emitter.emit('event');

