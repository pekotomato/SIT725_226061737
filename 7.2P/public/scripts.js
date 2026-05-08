const socket = io();

document.getElementById('btn').addEventListener('click', () => {
  socket.emit('increment');
});

socket.on('count', (value) => {
  document.getElementById('count').innerText = value;
});