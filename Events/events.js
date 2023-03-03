var events = require("events");
var eventsEmitter = new events.EventEmitter();

//! Create an event handler

var myEventHandler = function () {
  console.log("I hear a scream!");
};

eventsEmitter.on("scream", myEventHandler);

eventsEmitter.emit("scream");