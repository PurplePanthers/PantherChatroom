const dot =require( 'dotenv' ).config() // looks for .env ; process.env gets it's values
const express = require('express')
const apiRouter = require('./app/router/router')
const app = express()
const socketio = require('socket.io')

const PORT = process.env.PORT || 8080

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
io.on('connection', socket => {
    console.log('New connection...')
})
// for serving all the normal html
app.use( express.static('public') )

// for routes
apiRouter(app)

app.listen(PORT, function() {
    console.log( `Database (name=${process.env.DB_NAME}); Serving app on: https://localhost:${PORT}` )
})