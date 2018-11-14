const WebSocket = require('./structures/WebSocket.js');

var frameSocket = new WebSocket(7500); //run on port 7500
frameSocket.registerRoots(); //register roots