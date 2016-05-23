var gameport = document.getElementById("gameport");



var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x5566ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();
PIXI.SCALE_MODES.DEFAULT = PIXI.SCALE_MODES.NEAREST;
PIXI.loader
  .add("Yisound.mp3")
  .add("assets2.json")
  .load(ready);

var music;

function MouseHandler(e){
    music.play();
} 
  
function ready() {
    music = PIXI.audioManager.getAudio("Yisound.mp3");
    
    var black = new PIXI.Sprite(PIXI.Texture.fromFrame("blackface.png"));
    black.scale.x = 2;
    black.scale.y = 2;
    black.position.x = 150;
    black.position.y = 100;
    stage.addChild(black);
    black.interactive = true;
    black.on('mousedown',MouseHandler);
    
    
    var frames = [];
    frames.push(PIXI.Texture.fromFrame("cheeryellowface.png"));
    frames.push(PIXI.Texture.fromFrame("kissingyellowface.png"));
    frames.push(PIXI.Texture.fromFrame("sillyfaceyellow.png"));
    frames.push(PIXI.Texture.fromFrame("smileyellowface.png"));

    faces1 = new PIXI.extras.MovieClip(frames);
    faces1.scale.x = 2;
    faces1.scale.y = 2;
    faces1.position.x = 250;
    faces1.position.y = 100;
    faces1.animationSpeed = 0.02;
    faces1.play();
    stage.addChild(faces1);
    
     var frames1 = [];
    frames1.push(PIXI.Texture.fromFrame("sillyfacered.png"));
    frames1.push(PIXI.Texture.fromFrame("trickfacered.png"));

    faces2 = new PIXI.extras.MovieClip(frames1);
    faces2.scale.x = 2;
    faces2.scale.y = 2;
    faces2.position.x = 50;
    faces2.position.y = 100;
    faces2.animationSpeed = 0.05;
    faces2.play();
    stage.addChild(faces2);
}

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

var texture1 = PIXI.Texture.fromImage("sillyfaceyellow.png");
var texture2 = PIXI.Texture.fromImage("sillyfacered.png");
var texture3 = PIXI.Texture.fromImage("sillyfaceyellow.png");


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
var scoredisplay = new PIXI.Text("Thanks for Playing.");
scoredisplay.position.x = 160;
scoredisplay.position.y = 160;
end_screen.addChild(scoredisplay);

//credits screen stuffs
var arthor = new PIXI.Text("Arthor:\nYi Zong");
arthor.position.x = 130;
arthor.position.y = 30;
credit_screen.addChild(arthor);

var tools = new PIXI.Text("Tools:\nTexturePacker\nFetch\nfreac\nAseprite\nBosca Ceoil");
tools.position.x = 130;
tools.position.y = 120;
credit_screen.addChild(tools);

//*********************************************************************************
//play screen stuffs 
 var EndgameButton = new PIXI.Text("End the game");
EndgameButton.position.x = 210;
EndgameButton.position.y = 60;
play_screen.addChild(EndgameButton);

EndgameButton.interactive = false;
EndgameButton.on('mousedown', changeView.bind(null, end_screen));


var score1 = 0;
var scoreboard1 = new PIXI.Text("Score:" + score1);
scoreboard1.position.x = 280;
scoreboard1.position.y = 0;
play_screen.addChild(scoreboard1);


var times = 60;
var time = new PIXI.Text("Time:" + times);
time.position.x = 280;
time.position.y = 30;
play_screen.addChild(time);


var sprite4 = new PIXI.Sprite(texture1);
sprite4.anchor.x = 0.5;
sprite4.anchor.y = 0.5;
sprite4.position.x = 200;
sprite4.position.y = 200;
play_screen.addChild(sprite4);

var sprite5 = new PIXI.Sprite(texture2);
sprite5.anchor.x = 0.5;
sprite5.anchor.y = 0.5;
sprite5.position.x = 120;
sprite5.position.y = 120;
play_screen.addChild(sprite5);

var sprite6 = new PIXI.Sprite(texture3);
sprite6.anchor.x = 0.5;
sprite6.anchor.y = 0.5;
sprite6.position.x = 280;
sprite6.position.y = 280;
play_screen.addChild(sprite6);



function mouseHandler4(e) {
    //sprite1.position.x = sprite1.position.x + 100;
    //sprite1.position.y = sprite1.position.y + 100;
    var new_x1 = Math.floor(Math.random() * 300) + 100;
    var new_y1 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite4.position).to({x: new_x1, y: new_y1}, 1000, 
    createjs.Ease.bounceOut);
    score1++;
    scoreboard1.setText("Score:" + score1);
}

function mouseHandler5(e) {
    var new_x2 = Math.floor(Math.random() * 300) + 100;
    var new_y2 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite5.position).to({x: new_x2, y: new_y2}, 1000, 
    createjs.Ease.bounceOut);
    score1 -= 2 ;
    scoreboard1.setText("Score:" + score1);
}

function mouseHandler6(e) {
    var new_x3 = Math.floor(Math.random() * 300) + 100;
    var new_y3 = Math.floor(Math.random() * 300) + 100;
    createjs.Tween.get(sprite6.position).to({x: new_x3, y: new_y3}, 1000, 
    createjs.Ease.bounceOut);
    score1++;
    scoreboard1.setText("Score:" + score1);
}

sprite4.interactive = true;
sprite5.interactive = true;
sprite6.interactive = true;
sprite4.on('mousedown', mouseHandler4);
sprite5.on('mousedown', mouseHandler5);
sprite6.on('mousedown', mouseHandler6);


//*********************************************************************

var EndgameButton = new PIXI.Text("End the game");
EndgameButton.position.x = 210;
EndgameButton.position.y = 60;
play_screen1.addChild(EndgameButton);

EndgameButton.interactive = false;
EndgameButton.on('mousedown', changeView.bind(null, end_screen));


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
    var times = 60;
    function tick() {
        times--;
        time.setText("Time:" + times);
        time.innerHTML = "0:" + (times < 10 ? "0" : "") + String(times);
        if( times > 0 ) {
            setTimeout(tick, 1000);
        } else {           
            EndgameButton.interactive = true;
            
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
    sprite4.rotation += 0.1;
    sprite5.rotation += 0.15;
    sprite6.rotation += 0.05
    
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