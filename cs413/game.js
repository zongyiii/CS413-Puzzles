var gameport = document.getElementById("gameport");

var renderer = PIXI.autoDetectRenderer(400, 400, {backgroundColor: 0x5566ee});
gameport.appendChild(renderer.view);

var stage = new PIXI.Container();

var texture1 = PIXI.Texture.fromImage("sillyfaceyellow.png");
var texture2 = PIXI.Texture.fromImage("sillyfacered.png");
var texture3 = PIXI.Texture.fromImage("sillyfaceyellow.png");

var score = 0;

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
    sprite1.position.x = Math.floor(Math.random() * 200) + 100;
    sprite1.position.y = Math.floor(Math.random() * 300) + 100;
    score++;
}

function mouseHandler2(e) {
    sprite2.position.x = Math.floor(Math.random() * 300) + 50;
    sprite2.position.y = Math.floor(Math.random() * 300) + 50;
    score -= 2 ;
}

function mouseHandler3(e) {
    sprite3.position.x = Math.floor(Math.random() * 200) + 100;
    sprite3.position.y = Math.floor(Math.random() * 300) + 100;
    score++;
}

sprite1.interactive = true;
sprite2.interactive = true;
sprite3.interactive = true;
sprite1.on('mousedown', mouseHandler1);
sprite2.on('mousedown', mouseHandler2);
sprite3.on('mousedown', mouseHandler3);


function countdown() {
    var seconds = 60;
    function tick() {
        var counter = document.getElementById("counter");
        seconds--;
        counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);
        if( seconds > 0 ) {
            setTimeout(tick, 1000);
        } else {
           
            alert("game over! your final score is: " + score);
        }
    }
    tick();
}

countdown();


function animate() {
    requestAnimationFrame(animate);
    sprite1.rotation += 0.1;
    sprite2.rotation += 0.15;
    sprite3.rotation += 0.05;
    renderer.render(stage);
}
animate();