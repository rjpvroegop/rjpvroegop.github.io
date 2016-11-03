exports.ball = {
    x: 50,
    y: 50,
    right: true,
    up: true,
    scored: true,

    update: function (map) {
        if (this.y == 90) {
            this.up = false;
        } else if (this.y == 10) {
            this.up = true;
        }

        if (this.x == 190) {
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
        if(this.y == 20 || this.y == 80){
            this.scored = false;
        }
        if(!this.scored) {
            if (this.y == 10) {
                if (this.x / 10 != map.player1loc) {
                    this.scored = true;
                    map.player2score ++;
                }
            } else if (this.y == 90) {
                if (this.x / 10 != map.player2loc) {
                    this.scored = true;
                    map.player1score ++;
                }
            }
        }
    }
};