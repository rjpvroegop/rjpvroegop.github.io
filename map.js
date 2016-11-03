var ball = require('./ball');

exports.map = {
    width : 20,
    height : 10,
    player1loc : 10,
    player2loc : 10,
    player1id: 1,
    player2id: 2,
    player1score:0,
    player2score:0,
    ball: ball.ball,

    update: function (e, pressed, id) {
        switch (e) {
            case 'left': // left
                if (pressed) {
                    if(id == this.player1id) {
                        if (this.player1loc > 0) {
                            this.player1loc--;
                        }
                    }
                    if(id == this.player2id) {
                        if (this.player2loc > 0) {
                            this.player2loc--;
                        }
                    }
                }
                break;

            case 'right': // up
                if (pressed) {
                    if(id == this.player1id) {
                        if (this.player1loc < this.width - 1) {
                            this.player1loc++;
                        }
                    }
                    if(id == this.player2id) {
                        if (this.player2loc < this.width - 1) {
                            this.player2loc++;
                        }
                    }
                }
                break;

            case 'up': // right
                break;

            case 'down': // down
                break;

            default:
                return; // exit this handler for other keys
        }
    }
}