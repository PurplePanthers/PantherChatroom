async function addUser() {
    console.log('im here')
    inputData = {
        first_name: document.querySelector('#first_name').value,
        last_name: document.querySelector('#last_name').value,
        username: document.querySelector('#username').value,
        password: document.querySelector('#password').value,
        confirm_password: document.querySelector('#confirm_password').value,
        security_question: document.querySelector('#security_question').value,
        security_answer: document.querySelector('#security_answer').value
    }
    console.log(inputData)
    // eslint-disable-next-line eqeqeq
    if (inputData.confirm_password != inputData.password) {
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