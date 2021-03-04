/* eslint-disable eqeqeq */
/* eslint-disable no-redeclare */
/* eslint-disable curly */
/* eslint-disable camelcase */
/* eslint-disable no-trailing-spaces */
/* CONTROLLER FOLDER ========================================
The controller is the logical related to interaction and
'controlling' behaviour. In our serer-side code, the only
real controller elements are the 'router', so we create a
router folder
====================================================== */

const moment = require('moment');
const orm = require('../models/orm');
// const db = require('../config/connection.js')('chats_db', 'joseantonio')
//Runs when client connects

function router( app ){

    // app.get('/register', async function (req, res, next) {
    //     var users = await orm.getAllUsers()
    //     console.log('[Get] All users')
    //     res.send(users)
    // });
    // // to store user input detail on post request
    // app.post('/register', async function (req, res, next) {
    //      userData = req.body
    //     const result = await orm.addUser(userData)
    //     console.log("[Post] ",userData, result )
    //         res.render('registration-form', { alertMsg: msg });
    //     })
    //     res.redirect('./public/mainroom.html')
    // };
    // //Login
    // app.get('/public/login', function (req, res, next) {
    //     res.render('login-form');
    // });
    // app.post('/public/login', function (req, res) {
    //     var emailAddress = req.body.email_address;
    //     var password = req.body.password;
    //     var sql = 'SELECT * FROM users WHERE email_address =? AND password =?';
    //     db.query(sql, [emailAddress, password], function (err, data, fields) {
    //         if (err) throw err
    //         if (data.length > 0) {
    //             req.session.loggedinUser = true;
    //             req.session.emailAddress = emailAddress;
    //             res.redirect('/dashboard');
    //         } else {
    //             res.render('login-form', { alertMsg: 'Your Email Address or password is wrong' });
    //         }
    //     })
    // })
    
    // to display registration form 


    // app.get('/api/tasks/:due?', async function(req, res) {
    //     const due = req.params.due ? { due: req.params.due } : ''
    //     console.log( `[GET] getting list, due=${due}`)
    //     const list = await orm.getList( due )

    //     res.send( list )
    // })

    // app.post('/api/tasks', async function(req, res) {
    //     console.log( '[POST] we received this data:', req.body )
    //     const saveResult = await orm.insertTask( req.body.priority, req.body.info, req.body.due )
    //     console.log( `... insertId: ${saveResult.insertId} ` )

    //     res.send( { status: true, insertId: saveResult.insertId, message: 'Saved successfully' } )
    // });

    // app.put('/api/tasks', async function(req, res) {
    //     console.log( '[PUT] we received this data:', req.body )
    //     if( !req.body.id ) {
    //         res.status(404).send( { message: 'Invalid id' } )
    //     }

    //     const saveResult = await orm.updateTask( req.body.id, req.body.priority, req.body.info, req.body.due )
    //     console.log( '... ', saveResult )
    //     res.send( { status: true, message: 'Updated successfully' } )
    // });

    // app.delete('/api/tasks/:id', async function(req, res) {
    //     const taskId = req.params.id
    //     console.log( `[DELETE] id=${taskId}` )
    //     const deleteResult = await orm.deleteTask( taskId )
    //     console.log( '... ', deleteResult )

    //     res.send( { status: true, message: 'Deleted successfully' } )
    // });
}

module.exports = router
