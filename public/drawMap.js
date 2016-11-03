function draw(canvas) {
    var c = canvas;
    var ctx = c.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(20 * map.ball.x + 10, 20 * map.ball.y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "#FF0000";
    ctx.fill();

    ctx.rect(20 * map.player1loc, 5, 20, 5);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.rect(20 * map.player2loc, 190, 20, 5);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();

    ctx.stroke();

    $('.score').html("p1: " + map.player1score + " p2: " + map.player2score);
}