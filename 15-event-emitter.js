const EventEmitter = require('events')

const customEmitter = new EventEmitter() // creating an instance of the Event Emitter

customEmitter.on('response', (name, id) => { // created a custom event called response
    console.log(`Data Received for user ${name} with id: ${id}`);
})

customEmitter.on('response', () => { // we can create as many as we want
    console.log(`some other logic`);
})

customEmitter.emit("response", 'John', 34) // broadcasted the custom event to get the data

// order matter, we first listen for an event using .on and then we broadcast the data related to that event using
// .emit, if .emit was executed first and then .on was executed, the output would'nt be displayed in the console