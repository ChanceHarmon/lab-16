'use strict';

const event = require('./modular-events/event.js');
require('./modular-events/files.js');
require('./modular-events/logger.js');

let file = process.argv.slice(2).shift();

const alterFile = (file) => {
  event.emit('readFile', file);
};
event.emit('readFile', file);
event.emit('writeFile', file);
event.emit('writeUpperCase', file);

alterFile(file);