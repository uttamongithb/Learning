const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(path.join(__dirname, 'public')));

io.on('connection', (socket) => {
    console.log('New connection');

    socket.on('join', (username) => {
        socket.username = username;
        io.emit('userList', getConnectedUsers());
    });

    socket.on('chatMessage', (data) => {
        console.log(`Message from ${socket.username} to ${data.recipient}: ${data.message}`);

        // Send to sender
        socket.emit('message', {
            sender: socket.username,
            recipient: data.recipient,
            message: data.message,
            isOwn: true
        });

        // Send to recipient
        const recipientSocket = Array.from(io.sockets.sockets.values())
            .find(s => s.username === data.recipient);

        if (recipientSocket) {
            recipientSocket.emit('message', {
                sender: socket.username,
                recipient: data.recipient,
                message: data.message,
                isOwn: false
            });
        }
    });

    socket.on('disconnect', () => {
        io.emit('userList', getConnectedUsers());
    });
});

function getConnectedUsers() {
    return Array.from(io.sockets.sockets.values())
        .filter(s => s.username)
        .map(s => ({
            username: s.username,
            status: 'online'
        }));
}

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
