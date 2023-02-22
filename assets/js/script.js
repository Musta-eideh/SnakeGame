window.onload = function() {
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown",keyPush);
    setInterval(game, 85); //Velocidade da cobra

    const vel = 1; //Quantas casas a cobra anda
    var vx = vy = 0 
    var px = 10; //Cabeça da cobra
    var py = 15; // Calda da cobra
    var tp = 30;
    var qp = 20; //Quantidade de peças
    var ax = ay = 15;

    var trail = [];
    tail = 5;
    
    function game () {
        px += vx;
        py += vy;

        if(px < 0) {
            px = qp-1; 
        }

        if(px > qp-1) {
            px = 0;
        }
        if (py < 0){
            py = qp-1;
        }
        if(py > qp-1) {
            py = 0
        }

        ctx.fillStyle = "black"; //Tabuleiro
        ctx.fillReact(0,0, stage.width, stage.height);

        ctx.fillStyle = "red";
        ctx.fillReact(ax*tp, ay*tp, tp, tp);

        ctx.fillReact = "gray";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillReact(trail[i].x*tp, trail[i].y*tp, tp-1, tp-1);
            if(trail[i].x == px && trail[i].y == py){
                vx = vy = 0;
                tail = 5;
            }
        }
    }
}