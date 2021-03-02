const socket = io();

const messages = document.getElementById('messages');
const form = document.getElementById('form');
const input = document.getElementById('input');

//Get username and room from URL
const {username, room} = Qs.parse(location.search, {
    ignoreQueryPrefix:true})
console.log(username, room)

// Joined Room
socket.emit('joined room', { username, room });

// Get room users
// socket.on('room users',({room,users}) =>{
//     outputRoomName(room);
//     outputUsers(users);
// })

// const roomName = document.getElementById('room-name');
// const userList = document.getElementById('users');
// //Add room name to Dom
// function outputRoomName(room){
//     roomName.innerText = room;
// }
// //Add users to Dom
// function outputUsers(users){
//     userList.innerHTML = `
//     ${users.map(user => `<li>${user.username}</li>`),join('')}
//     `;
// }


form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
        input.focus();
    }
});

socket.on('message', message => {
    console.log(message);
})

socket.on('chat message', function (msg) {
    var item = document.createElement('li');
    const div = document.createElement('div');
    div.classList.add('message')
    div.innerHTML = `<p class ="meta"> ${msg.username} <span> ${msg.time}</span></p>
    <p class="text">${msg.text} </p>` ;
    // item.textContent =
    item.appendChild(div)
    messages.appendChild(item);
    window.scrollTo(0, document.body.scrollHeight);
});