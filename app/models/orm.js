/* eslint-disable curly */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* ORM FOLDER ========================================
We abstract our database and information-modelling code
into this section
====================================================== */

const db = require("../config/connection.js")("chats_db", "joseantonio");
// an external npm package we are using
const moment = require("moment");

// returns all users
function getAllUsers() {
  return db.query("SELECT * FROM USERS");
}
// this info is what will be shown at the top of a chat
function getChatHeader(email) {
  return db.query(
    "SELECT first_name, img_path FROM USERS WHERE email = ?;",
    email
  );
}
// add new user to db
function addUser(data) {
  let dataSet = {
    first_name: data.first_name,
    last_name: data.last_name,
    age: data.age,
    gender: data.gender,
    img_path: data.img_path,
    bio: data.bio,
    login_id: data.login_id,
    login_pw: data.login_pw,
    email: data.email,
    security_question: data.security_question,
    security_answer: data.security_answer,
  };
  let query = "INSERT INTO users SET ? ";
  return db.query(query, dataSet);
}
// returns fn, ln, username, email, bio and img path from users table
function getProfile(id) {
  return db.query(
    "SELECT first_name, last_name, login_id, email, bio, img_path FROM USERS WHERE id = ?;",
    id
  );
}
// delete a user from the users table
function deleteUser(id) {
  return db.query("DELETE FROM users WHERE id= ?", id);
}
//delete a chat from chats table
function deleteChat(id) {
  return db.query(("DELETE FROM chats WHERE id=?", id));
}

// function getList(criteria = {}) {
//     return db.query('SELECT * FROM tasks ' + (criteria ? 'WHERE ? ' : ''), criteria)
// }

// function insertTask(priority, info, due) {
//     if (priority === '') {
//         priority = 'primary'
//     }
//     // no due? set to 7 days from now
//     if (due === '') {
//         due = moment().add(7, 'days').format('YYYY-MM-DD')
//     }
//     console.log(' inserting task data: ', { priority, info, due })
//     return db.query('INSERT INTO tasks SET ? ',
//         { priority, info, due })
// }

// function updateTask(id, priority, info, due) {
//     return db.query('UPDATE tasks SET ? WHERE id=?',
//         [{ priority, info, due }, id])
// }

// function deleteTask(id) {
//     return db.query('DELETE FROM tasks WHERE id=?', [id])
// }

module.exports = {
  getAllUsers,
  getChatHeader,
  getProfile,
  deleteUser,
  deleteChat,
  addUser,
};
