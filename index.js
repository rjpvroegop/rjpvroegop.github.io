var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var map = require('./map').map;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

var initialized = false;
io.on('connection', function(socket){
    socket.on('up', function(msg){
        map.update('up', msg, getPlayer(socket));
        io.emit('update', map);
    });
    socket.on('down', function(msg){
        map.update('down', msg, getPlayer(socket));
        io.emit('update', map);
    });
    socket.on('left', function(msg){
        map.update('left', msg, getPlayer(socket));
        io.emit('update', map);
    });
    socket.on('right', function(msg){
        map.update('right', msg, getPlayer(socket));
        io.emit('update', map);
    });

    socket.on('initialize', function(){
        io.emit('update', map);
    });

    socket.on('reset', function(){
        map.player1score = 0;
        map.player2score = 0;
        io.emit('update', map);
    });

    if(!initialized) {
        setInterval(()=> {
            map.ball.update(map);
            io.emit('update', map);
        }, 300);
        initialized = true;
    }
});



http.listen(3000, function(){
    console.log('listening on http://localhost:3000');
});

function getPlayer(socket){
    return readCookie(socket.request.headers.cookie, 'player');
}

function readCookie(cookie, name) {
    if(cookie && name) {
        var nameEQ = encodeURIComponent(name) + "=";
        var ca = cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
    }
    return null;
}