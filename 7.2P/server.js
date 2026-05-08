const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

let count = 0;

app.use(express.static('public'));

io.on('connection', (socket) => {
  socket.emit('count', count);

  socket.on('increment', () => {
    count++;
    io.emit('count', count);
  });
});

http.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});