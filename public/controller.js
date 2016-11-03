var map;

$('canvas')[0].width = 400;
$('canvas')[0].height = 200;

var socket = io();

socket.emit('initialize');

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
            socket.emit('left', true);
            break;

        case 38: // up
            socket.emit('up', true);
            break;

        case 39: // right
            socket.emit('right', true);
            break;

        case 40: // down
            socket.emit('down', true);
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

$(document).keyup(function(e) {
    switch(e.which) {
        case 37: // left
            socket.emit('left', false);
            break;

        case 38: // up
            socket.emit('up', false);
            break;

        case 39: // right
            socket.emit('right', false);
            break;

        case 40: // down
            socket.emit('down', false);
            break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

socket.on('update', function(msg){
    map = msg;
    draw($('canvas')[0]);
    console.log('update');
});

$('.player1').on('click', () => {
    eraseCookie("player");
    createCookie("player", "1", 10);
});

$('.player2').on('click', () => {
    eraseCookie("player");
    createCookie("player", "2", 10)
});

function createCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function eraseCookie(name) {
    createCookie(name, "", -1);
}