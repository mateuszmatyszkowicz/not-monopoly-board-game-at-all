import { Guid } from '../../shared/src/Utilities/Guid';
import { EventHandler } from './EventHandlers/eventHandler';

const webSocketsServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');
const { connection } = require('websocket');
// Spinning the http server and the websocket server.
const server = http.createServer();
server.listen(webSocketsServerPort);
const wsServer = new webSocketServer({
  httpServer: server
});



// I'm maintaining all active connections in this object
const clients = {};

wsServer.on('request', function(request) {
    var userID = Guid.newGuid();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
    // You can rewrite this part of the code to accept only the requests from allowed origin
    const connection = request.accept(null, request.origin);
    connection.on('message', (message) => {
      handleMessage(message, connection);
    });
    // connection.se
    clients[userID] = connection;
    console.log('connected: ' + userID + ' in ' + Object.getOwnPropertyNames(clients))
  });

  const handleMessage = (message, connection) => {
    const eventHandler = new EventHandler();
    eventHandler.handleMessage(message, connection, wsServer);
  }

// This code generates unique userid for everyuser.
// const getUniqueID = () => {
//   const s4 = () => Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
//   return s4() + s4() + '-' + s4();
// };

