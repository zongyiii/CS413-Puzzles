var gameport = document.getElementById("gameport");



var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x5566ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture1 = PIXI.Texture.fromImage("assets/sillyfaceyellow.png");
var texture2 = PIXI.Texture.fromImage("assets/sillyfacered.png");
var texture3 = PIXI.Texture.fromImage("assets/sillyfaceyellow.png");


//add score board and time showing in the scene
var score = 0;
var scoreboard = new PIXI.Text("Score:" + score);
scoreboard.position.x = 280;
scoreboard.position.y = 0;
stage.addChild(scoreboard);

var times = 60;
var time = new PIXI.Text("Time:" + times);
time.position.x = 280;
time.position.y = 30;
stage.addChild(time);

var sprite1 = new PIXI.Sprite(texture1);

sprite1.anchor.x = 0.5;
sprite1.anchor.y = 0.5;

sprite1.position.x = 200;
sprite1.position.y = 200;

stage.addChild(sprite1);

var sprite2 = new PIXI.Sprite(texture2);

sprite2.anchor.x = 0.5;
sprite2.anchor.y = 0.5;

sprite2.position.x = 120;
sprite2.position.y = 120;

stage.addChild(sprite2);

var sprite3 = new PIXI.Sprite(texture3);
sprite3.anchor.x = 0.5;
sprite3.anchor.y = 0.5;
sprite3.position.x = 280;
sprite3.position.y = 280;
stage.addChild(sprite3);

 

function mouseHandler1(e) {
    var new_x1 = Math.floor(Math.random() * 200) + 100;
    var new_y1 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite1.position).to({x: new_x1, y: new_y1}, 1000, 
    createjs.Ease.bounceOut);
    score++;
    scoreboard.setText("Score:" + score);
}

function mouseHandler2(e) {
    var new_x2 = Math.floor(Math.random() * 200) + 100;
    var new_y2 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite2.position).to({x: new_x2, y: new_y2}, 1000, 
    createjs.Ease.bounceOut);
    score -= 2 ;
    scoreboard.setText("Score:" + score);
}

function mouseHandler3(e) {
    var new_x3 = Math.floor(Math.random() * 200) + 100;
    var new_y3 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite3.position).to({x: new_x3, y: new_y3}, 1000, 
    createjs.Ease.bounceOut);
    score++;
    scoreboard.setText("Score:" + score);
}

sprite1.interactive = true;
sprite2.interactive = true;
sprite3.interactive = true;
sprite1.on('mousedown', mouseHandler1);
sprite2.on('mousedown', mouseHandler2);
sprite3.on('mousedown', mouseHandler3);



function countdown() {
    var times = 60;
    function tick() {
        times--;
        time.setText("Time:" + times);
        time.innerHTML = "0:" + (times < 10 ? "0" : "") + String(times);
        if( times > 0 ) {
            setTimeout(tick, 1000);
        } else {
           
            alert("game over! your final score is: " + score);
        }
    }
    tick();
}



function animate() {
    requestAnimationFrame(animate);
    sprite1.rotation += 0.1;
    //var new_x1 = Math.floor(Math.random() * 300) + 100;
    //var new_y1 = Math.floor(Math.random() * 300) + 100;
    //createjs.Tween.get(sprite1.position).to({x: new_x1, y: new_y1}, 0, createjs.Ease.bounceOut);
    sprite2.rotation += 0.15;
    sprite3.rotation += 0.05;
    renderer.render(stage);
}



countdown();
animate();