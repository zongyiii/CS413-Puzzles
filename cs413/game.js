var gameport = document.getElementById("gameport");



var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x5566ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();


var play_screen = new PIXI.Container();
stage.addChild(play_screen);
var credit_screen = new PIXI.Container();
stage.addChild(credit_screen);
var end_screen = new PIXI.Container();
stage.addChild(end_screen);
var play_screen1 = new PIXI.Container();
stage.addChild(play_screen1);


var PlayButton = new PIXI.Text("Boring Mode");
var PlayButton1 = new PIXI.Text("Crazy Mode");
var CreditButton = new PIXI.Text("Credits");
stage.addChild(PlayButton1);
stage.addChild(PlayButton);
stage.addChild(CreditButton);


PlayButton.position.x = 120;
PlayButton.position.y = 200;

PlayButton1.position.x = 120;
PlayButton1.position.y = 250;
CreditButton.position.x = 150;
CreditButton.position.y = 300;

PlayButton.interactive = true;
PlayButton1.interactive = true;
CreditButton.interactive = true;
PlayButton.on('mousedown', changeView.bind(null, play_screen));
PlayButton1.on('mousedown', changeView.bind(null, play_screen1));
CreditButton.on('mousedown', changeView.bind(null, credit_screen));

var texture1 = PIXI.Texture.fromImage("assets/sillyfaceyellow.png");
var texture2 = PIXI.Texture.fromImage("assets/sillyfacered.png");
var texture3 = PIXI.Texture.fromImage("assets/sillyfaceyellow.png");


play_screen.visible = false;
play_screen.interactive = false;

credit_screen.visible = false;
credit_screen.interactive = false; 

play_screen1.visible = false;
play_screen1.interactive = false;

end_screen.visible = false;
end_screen.interactive = false;
 
stage.visible = true;


//end screen stuffs
var scoredisplay = new PIXI.Text("Your Final Scrore is:", + score)
scoredisplay.position.x = 100;
scoredisplay.position.y = 200;

end_screen.addChild(scoredisplay);




//*********************************************************************************
//play screen stuffs 
var score1 = 0;
var scoreboard = new PIXI.Text("Score:" + score1);
scoreboard.position.x = 280;
scoreboard.position.y = 0;
play_screen.addChild(scoreboard);


var times = 60;
var time = new PIXI.Text("Time:" + times);
time.position.x = 280;
time.position.y = 30;
play_screen.addChild(time);


var sprite1 = new PIXI.Sprite(texture1);
sprite1.anchor.x = 0.5;
sprite1.anchor.y = 0.5;
sprite1.position.x = 200;
sprite1.position.y = 200;
play_screen.addChild(sprite1);

var sprite2 = new PIXI.Sprite(texture2);
sprite2.anchor.x = 0.5;
sprite2.anchor.y = 0.5;
sprite2.position.x = 120;
sprite2.position.y = 120;
play_screen.addChild(sprite2);

var sprite3 = new PIXI.Sprite(texture3);
sprite3.anchor.x = 0.5;
sprite3.anchor.y = 0.5;
sprite3.position.x = 280;
sprite3.position.y = 280;
play_screen.addChild(sprite3);


function mouseHandler4(e) {
    //sprite1.position.x = sprite1.position.x + 100;
    //sprite1.position.y = sprite1.position.y + 100;
    var new_x1 = Math.floor(Math.random() * 300) + 100;
    var new_y1 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite1.position).to({x: new_x1, y: new_y1}, 1000, 
    createjs.Ease.bounceOut);
    score1++;
    scoreboard.setText("Score:" + score1);
}

function mouseHandler5(e) {
    var new_x2 = Math.floor(Math.random() * 300) + 100;
    var new_y2 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite2.position).to({x: new_x2, y: new_y2}, 1000, 
    createjs.Ease.bounceOut);
    score1 -= 2 ;
    scoreboard.setText("Score:" + score1);
}

function mouseHandler6(e) {
    var new_x3 = Math.floor(Math.random() * 300) + 100;
    var new_y3 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite3.position).to({x: new_x3, y: new_y3}, 1000, 
    createjs.Ease.bounceOut);
    score1++;
    scoreboard.setText("Score:" + score1);
}

sprite1.interactive = true;
sprite2.interactive = true;
sprite3.interactive = true;
sprite1.on('mousedown', mouseHandler4);
sprite2.on('mousedown', mouseHandler5);
sprite3.on('mousedown', mouseHandler6);



//*********************************************************************

var score = 0;
var scoreboard = new PIXI.Text("Score:" + score);
scoreboard.position.x = 280;
scoreboard.position.y = 0;
play_screen1.addChild(scoreboard);


var times = 60;
var time = new PIXI.Text("Time:" + times);
time.position.x = 280;
time.position.y = 30;
play_screen1.addChild(time);


var sprite1 = new PIXI.Sprite(texture1);
sprite1.anchor.x = 0.5;
sprite1.anchor.y = 0.5;
sprite1.position.x = 200;
sprite1.position.y = 200;
play_screen1.addChild(sprite1);

var sprite2 = new PIXI.Sprite(texture2);
sprite2.anchor.x = 0.5;
sprite2.anchor.y = 0.5;
sprite2.position.x = 120;
sprite2.position.y = 120;
play_screen1.addChild(sprite2);

var sprite3 = new PIXI.Sprite(texture3);
sprite3.anchor.x = 0.5;
sprite3.anchor.y = 0.5;
sprite3.position.x = 280;
sprite3.position.y = 280;
play_screen1.addChild(sprite3);



function mouseHandler1(e) {
    //sprite1.position.x = sprite1.position.x + 100;
    //sprite1.position.y = sprite1.position.y + 100;
    var new_x1 = Math.floor(Math.random() * 300) + 100;
    var new_y1 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite1.position).to({x: new_x1, y: new_y1}, 1000, 
    createjs.Ease.bounceOut);
    score++;
    scoreboard.setText("Score:" + score);
}

function mouseHandler2(e) {
    var new_x2 = Math.floor(Math.random() * 300) + 100;
    var new_y2 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite2.position).to({x: new_x2, y: new_y2}, 1000, 
    createjs.Ease.bounceOut);
    score -= 2 ;
    scoreboard.setText("Score:" + score);
}

function mouseHandler3(e) {
    var new_x3 = Math.floor(Math.random() * 300) + 100;
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

//*********************************************************************************

function countdown() {
    var times = 62;
    function tick() {
        times--;
        time.setText("Time:" + times);
        time.innerHTML = "0:" + (times < 10 ? "0" : "") + String(times);
        if( times > 0 ) {
            setTimeout(tick, 1000);
        } else {   
            alert("final score is:" + score);        
            play_screen.changeView.bind(null, end_screen);
            
        }
    }
    tick();
}



function animate() {
    requestAnimationFrame(animate);
    sprite1.rotation += 0.1;
    var new_x1 = Math.floor(Math.random() * 300) + 100;
    var new_y1 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite1.position).to({x: new_x1, y: new_y1}, 1000, 
    createjs.Ease.bounceOut);
    sprite2.rotation += 0.15;
    sprite3.rotation += 0.05;
    var new_x3 = Math.floor(Math.random() * 300) + 100;
    var new_y3 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite3.position).to({x: new_x3, y: new_y3}, 1000, 
    createjs.Ease.bounceOut);
    renderer.render(stage);
}

function changeView(view){
    for(var i = 0; i<stage.children.length; i++){
        stage.children[i].visible = false;
        stage.children[i].interactive = false;
    }
    view.visible = true;
    view.interative = true;
}

countdown();
animate();