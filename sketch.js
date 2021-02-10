var ball;

var mydatabase;

var playerCount, gameState =0;

var form, player,game;

//form - enter his name, click on a button say play- store the player info in database
//player - read and write player info from database
//game - store the game state, and control game 


function setup(){
    createCanvas(500,500);

    mydatabase = firebase.database();

    game = new Game();
    game.getState();
    game.start();
    

}

function draw(){
    background("white");

  
    drawSprites();
}



