const path = require('path');
const express = require('express');
const http = require('http');
const socketio = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

let count = 0;
//let message = 'Welcome';

const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname,'../public');

app.use(express.static(publicDirectoryPath));

io.on('connection',(socket) => {
    console.log('Web Socket Connection');
    // socket.emit('countUpdated',count);
    // socket.on('increment',() => {
    //     count++;
    //     socket.emit('countUpdated',count);
    //     io.emit('countUpdated',count);
    // });
    socket.emit('message','Welcome');
    socket.on('sendMessage',(message) => {
        io.emit('message',message);
    });

});


server.listen(port,() => {
    console.log('Server connected!!!');
});
