const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log('a user got connected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })
    socket.on('chat message', (msg) => {
        console.log('message : ' + msg)
        io.emit('broadcast', msg)
    })
})

server.listen('3000', () => console.log('server is running on port: http://localhost:3000'))    