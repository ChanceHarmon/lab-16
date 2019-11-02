'use strict';


const { readFile, writeFile } = require('fs');
const event = require('./event.js');
require('./logger');
let file = process.argv.slice(2).shift();

const readFileAsync = async (text) => {
  await readFile(file, 'utf8', text, (error, data) => {
    if (error) { throw error }
  });

  const textToUpperCase = (text) => {
    text.toString().toUpperCase();
  };

  const writeFileAsync = async (text) => {
    await writeFile(file, Buffer.from(text), (error, data) => {
      if (error) { throw error }
    });
  };

  event.on('readFile', readFileAsync);
  event.on('writeFile', writeFileAsync);
  event.on('writeUpperCase', textToUpperCase);
  module.exports = {
    readFileAsync,
    writeFileAsync,
    textToUpperCase,
    alterFile,
  };
};