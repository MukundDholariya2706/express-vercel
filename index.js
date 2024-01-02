const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const SimplePeer = require('simple-peer');
require('./config/dbConnection');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.get('/', (req, res) => {
  // res.sendFile(__dirname + '/index.html');
});

// io.on('connection', (socket) => {
//   console.log('User connected:', socket.id);

//   let peer;

//   // Event for initiating a call
//   socket.on('call', (targetSocketId) => {
//     peer = new SimplePeer({ initiator: true, trickle: false });

//     // Send the signaling data to the target user
//     io.to(targetSocketId).emit('offer', socket.id);

//     // Listen for the target user's answer
//     peer.on('signal', (data) => {
//       io.to(targetSocketId).emit('offer', data);
//     });

//     // Connect the peers
//     peer.on('connect', () => {
//       console.log('Peers connected');
//     });

//     // Handle data channel for audio
//     const audioDataChannel = peer.createDataChannel('audio');

//     audioDataChannel.onmessage = (event) => {
//       // Handle audio data received from the remote peer
//       io.to(targetSocketId).emit('audioData', event.data);
//     };

//     socket.on('audioData', (data) => {
//       // Send audio data to the remote peer
//       audioDataChannel.send(data);
//     });
//   });

//   // Event for answering a call
//   socket.on('answer', (callerSocketId) => {
//     peer = new SimplePeer({ initiator: false, trickle: false });

//     // Send the signaling data back to the caller
//     io.to(callerSocketId).emit('answer', socket.id);

//     // Listen for the caller's signaling data
//     peer.on('signal', (data) => {
//       io.to(callerSocketId).emit('answer', data);
//     });

//     // Connect the peers
//     peer.on('connect', () => {
//       console.log('Peers connected');
//     });

//     // Handle data channel for audio
//     const audioDataChannel = peer.createDataChannel('audio');

//     audioDataChannel.onmessage = (event) => {
//       // Handle audio data received from the remote peer
//       io.to(callerSocketId).emit('audioData', event.data);
//     };

//     socket.on('audioData', (data) => {
//       // Send audio data to the remote peer
//       audioDataChannel.send(data);
//     });
//   });

//   // Handle user disconnect
//   socket.on('disconnect', () => {
//     console.log('User disconnected:', socket.id);
//     if (peer) {
//       peer.destroy();
//     }
//   });
// });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
