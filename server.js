<<<<<<< HEAD
const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const { userInfo } = require("os");
const moment = require("moment");
const PORT = process.env.PORT || 5000;
const db = require("./app/config/connection.js")("chats_db", "jbm12345");
const ormfnct = require("./app/models/orm");
const formatMessage = require("./utils/messages");
=======
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const { userInfo } = require('os');
const PORT = process.env.PORT || 8080;
const formatMessage = require('./utils/messages');
>>>>>>> saidmg
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  addFriend,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

let friends=[]
// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "index.html");
});

// THERE IS 3 WAYS TO SEND MESSAGES:
// socket.emit()  ---> for the user
// socket.broadcast.emit() ---> for everyone except that user
// io.emit() ---> for everyone
let randomRoomsArray = []

io.on('connection', (socket) => {
    // console.log('testing rooms',io.rooms)
    socket.emit('show friends', friends)
    socket.on('joined room', ({ username, room }) => {
        let isActive = true
        const user = userJoin(socket.id, username, room, isActive)
        socket.join(user.room)
        socket.emit('new room', user.room)
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

    socket.on('add friend',() => {
        const user = getCurrentUser(socket.id);
        socket.broadcast.to(user.room).emit('add friend', formatMessage(`${user.username}`, 'wants to Add you as friend'));
        socket.emit('add sent', formatMessage(`${user.username}`, 'You have sent a friend request'));

    })

    socket.on('added',()=>{
        const user = getCurrentUser(socket.id);
        socket.broadcast.to(user.room).emit('added', formatMessage(`${user.username}`, ' has accepted your friend request!'));
        console.log('added :',getRoomUsers(user.room))
        let user1 = getRoomUsers(user.room)[0].username
        let user2 = getRoomUsers(user.room)[1].username

        console.log(`${user1} and ${user2} are now friends`)
        friends.push({user1, user2})
        console.log('friends list',friends)
    })
    socket.on('rooms details', (room)=>{
        randomRoomsArray.push(room)
        // allRoomsArray.forEach(room=>{
        //     console.log(`eye${room.room}`)
        // })
        socket.emit('rooms details',randomRoomsArray)
    })

    //When User disconnects
    socket.on('disconnect', () => {
        // console.log('user disconnected');
        const user = userLeave(socket.id);
        if (user) {
            io.to(user.room).emit('message', formatMessage('PantherBot', `${user.username} has left the chat`));
            io.to(user.room).emit('room users', {
                room: user.room, users: getRoomUsers(user.room)
            })
            console.log(`testing room number ${randomRoomsArray[0]}`)
            // we get the rooms from databse later on to see if they still have users aftersomeone leave
            console.log('array before[randomRoomsArray]',randomRoomsArray)
            let filteredRandomRoom = randomRoomsArray.filter(function(item,pos,self){
                return self.indexOf(item) === pos;
            })
            console.log('array after[filteredRandomRoom]',filteredRandomRoom)
            filteredRandomRoom.forEach(room=>{
                console.log('Room:',room)
                let x = getRoomUsers(room)
                console.log('The users in this room',x)
                if (x<1){
                    console.log(`room ${room} is empty , need to be deleted from database`)
                }
            })
            console.log('The user that left and needs "isActive" to be changed to false in database is:',user)
            user.isActive = false
            console.log(user)

            // let x = getRoomUsers(filteredRandomRoom)
            // console.log(x)
            // x.forEach(user=>{
            //     console.log('users inside first room',user)
            // })
            // if (x === 1){
            //     console.log('There is one user in the room',filteredRandomRoom[0])
            // }
        }

    });
  });
  // console.log(`${socket.id} user connected`);
  // console.log(`user id: `,socket.id);

  //When a chat is sent
  socket.on("chat message", async (msg) => {
    const user = getCurrentUser(socket.id);
    // --- data base info and calls ------------------------
    let data = formatMessage(user.username, msg);
    let reciever = getRoomUsers(28);
    console.log(reciever);
    ormfnct.saveMsg(data.username, data.text, data.time);
    const allMessages = await ormfnct.allMesagesFromUser(user);
    console.log(allMessages);
    //----------------------------------------------------
    io.to(user.room).emit("chat message", formatMessage(user.username, msg));
  });

  socket.on("add friend", () => {
    const user = getCurrentUser(socket.id);
    socket.broadcast
      .to(user.room)
      .emit(
        "add friend",
        formatMessage(`${user.username}`, "wants to Add you as friend")
      );
    socket.emit(
      "add sent",
      formatMessage(`${user.username}`, "You have sent a friend request")
    );
  });

  socket.on("added", () => {
    const user = getCurrentUser(socket.id);
    socket.broadcast
      .to(user.room)
      .emit(
        "added",
        formatMessage(`${user.username}`, " has accepted your friend request!")
      );
  });
  //When User disconnects
  socket.on("disconnect", () => {
    // console.log('user disconnected');
    const user = userLeave(socket.id);
    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage("PantherBot", `${user.username} has left the chat`)
      );
      io.to(user.room).emit("room users", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
