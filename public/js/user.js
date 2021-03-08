async function addUser() {
    console.log('im here')
    inputData = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        username: document.querySelector('#username').value,
        login_pw: document.querySelector('#password').value,
        security_question: document.querySelector('#security_question').value,
        security_answer: document.querySelector('#security_answer').value
    }
    let confirm_password= document.querySelector('#confirm_password').value
    console.log(inputData)
    // eslint-disable-next-line eqeqeq
    if (confirm_password != inputData.login_pw) {
        alert('Password & Confirm Password have to match');
        return false;
    }    
    req = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(inputData),
    }
    console.log(req)
    await fetch('/register', req).then(r => r.json())
    console.log('blahhhh')
    window.document.location = '/login.html'
    // check unique username
    // if (inputData.confirm_password != inputData.password) {
    //     console.log('Password & Confirm Password have to match');
    // }


    // })
}
async function checkUser(username, password) {
    var sql = 'SELECT * FROM users WHERE username =? AND password =?';
    // db.query(sql, [username, password], async function (err, data, fields) {

    req = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',

        },
    }
    await fetch('/login',req)
    // if (data.length > 0) {
    //     req.session.loggedinUser = true;
    //     req.session.emailAddress = emailAddress;
    //     res.redirect('/mainroom.html');
    // } else {
    //     alert('Login information is wrong!')
    // }
}