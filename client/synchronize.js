"use strict";
var Model = require("scuttlebutt/model");
var EventSynchronizer = require("./event-synchronizer");
var ScrollEventSynchronizer = require("./scroll-event-synchronizer");
var LocationEventSynchronizer = require("./location-event-synchronizer");
var InteractionEventSynchronizer = require("./interaction-event-syncronizer");
var FormSynchronizer = require("./form-synchronizer");

var state = new Model();

var synchronizer = new EventSynchronizer(state);

module.exports = function synchronize(stream) {
    window.state = state;
    var s = state.createStream();
    s.pipe(stream).pipe(s);

    synchronizer.register(ScrollEventSynchronizer);
    synchronizer.register(LocationEventSynchronizer);
    synchronizer.register(InteractionEventSynchronizer);
    synchronizer.register(FormSynchronizer);
};

