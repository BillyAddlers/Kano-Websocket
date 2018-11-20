const WebSocket = require('./structures/WebSocket.js');
const config = require('./config.json');

var frameSocket = new WebSocket(config.port); //run on port 7500 as default
frameSocket.registerRoots(); //register roots
