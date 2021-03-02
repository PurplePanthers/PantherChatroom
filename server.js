
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { userInfo } = require('os');
const PORT = process.env.PORT || 8000;
const formatMessage = require('./utils/messages');
const {
    userJoin,
    getCurrentUser,
    userLeave,
    getRoomUsers
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/mainroom.html');
});

// THERE IS 3 WAYS TO SEND MESSAGES: 
// socket.emit()  ---> for the user
// socket.broadcast.emit() ---> for everyone except that user
// io.emit() ---> for everyone

io.on('connection', (socket) => {

    socket.on('joined room', ({ username, room }) => {
        const user = userJoin(socket.id, username, room)

        socket.join(user.room)
        //to welcome user
        socket.emit('message', formatMessage('PantherBot', 'Welcome to PantherChatroom!'));

        // Broadcast when a user connects
        socket.broadcast.to(user.room).emit('message', formatMessage('PantherBot', `${user.username} has joined the chat`));

        //Send users and room info
        io.to(user.room).emit('room users', {
            room: user.room, users: getRoomUsers(user.room)
        })
    });
    // console.log(`${socket.id} user connected`);
    // console.log(`user id: `,socket.id); 

    //When a chat is sent
    socket.on('chat message', (msg) => {
        const user = getCurrentUser(socket.id);
        io.to(user.room).emit('chat message', formatMessage(user.username, msg));
    });

    //When User disconnects
    socket.on('disconnect', () => {
        // console.log('user disconnected');
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('message', formatMessage('PantherBot', `${user.username} has left the chat`));
            io.to(user.room).emit('room users', {
                room: user.room, users: getRoomUsers(user.room)
            })
        }

    });

});


server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

