const socket = io();

//login funcitonality
function login() {
    var user = document.querySelector('#username').value;
    var pass = document.querySelector('#password').value;
    var question = document.querySelector('#question').value;
    if (user === 'lab18' && pass === 'lab18') {
        alert('Logged In');
        return false;
    } else {
        alert('wrong user/pass');
        return false;
    }
}