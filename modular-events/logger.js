'use strict';
const event = require('./event');

event.on('readFile', content => log('Read File', content));
event.on('writeFile', content => log('Write File', content));
event.on('error', error => log('Error', error));

function log(event, content) {
  let time = new Date();
  console.log({ event, time, content });
}