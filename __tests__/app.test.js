
'use strict';

const files = require('../lib/files');
const EventEmitter = require('events').EventEmitter;

describe('Read Events', () => {
  it('should emit an some_event', () => {
    const event = new EventEmitter;
    event.emit('readFile', files.alterFile);
    event.on('readFile', files.readFileAsync);
    spyOn()
  })
});