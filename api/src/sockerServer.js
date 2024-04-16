const http = require('http');
const socketIO = require('socket.io');
const jwt = require("jsonwebtoken");
const config = require("./config");


const server = http.createServer();
const io = socketIO(server, {
  cors: {
    origin: '*',
  },
});

const connectedClients = new Map();

io.on('connection', (socket) => {
  const decodedToken = jwt.verify(socket?.handshake?.query?.cookie, config.secret);
  if (!connectedClients.has(decodedToken._id))
    connectedClients.set(decodedToken._id, socket.id);

  const valuesArray = Array.from(connectedClients.keys());
  io.emit("getConnectedUsers", valuesArray);

  socket.on('disconnect', () => {
    connectedClients.forEach((value, key) => {
      if (value === socket.id) {
          connectedClients.delete(key);
      }
  });
    const valuesArray = Array.from(connectedClients.keys());
    io.emit("getConnectedUsers", valuesArray);
  })
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});