exports.ball = {
    x: 5,
    y: 5,
    right: true,
    up: true,
    scored: true,

    update: function (map) {
        if (this.y == 9) {
            this.up = false;
        } else if (this.y == 1) {
            this.up = true;
        }

        if (this.x == 19) {
            this.right = false;
        } else if (this.x == 0) {
            this.right = true;
        }

        if (this.up) {
            this.y++;
        } else {
            this.y--;
        }

        if (this.right) {
            this.x++;
        } else {
            this.x--;
        }

        this.updateScore(map);
    },
    updateScore: function(map){
        console.log(this.scored, map.player1score, map.player2score);
        if(this.y == 2 || this.y == 8){
            this.scored = false;
        }
        if(!this.scored) {
            if (this.y == 1) {
                if (this.x != map.player1loc) {
                    this.scored = true;
                    map.player2score ++;
                }
            } else if (this.y == 9) {
                if (this.x != map.player2loc) {
                    this.scored = true;
                    map.player1score ++;
                }
            }
        }
    }
};