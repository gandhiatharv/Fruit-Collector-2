class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(0,displayHeight + 80);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(1000,displayHeight +80);
    player2.addImage("player2", player_img);

    players=[player1,player2];

        }
    
    play(){
        
                form.hide();
                form.showReset();

                if(player1.x < 80){
                    player1.x = 80;
                }

                if(player2.x < 80){
                    player2.x = 80;
                }

                if(player1.x > displayWidth-100){
                    player1.x = displayWidth-100;
                }

                if(player2.x > displayWidth-100){
                    player2.x = displayWidth-100;
                }


                Player.getPlayerInfo();
                Player.playerScore();
                 image(back_img, 0, 0, displayWidth, displayHeight-50);
                 var x =displayWidth/2;
                 var y=displayHeight;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = displayWidth/2-allPlayers[plr].distance;
                     y=displayHeight-150;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                        textSize(20);
                        fill("white");
                        strokeWeight(2);
                        stroke("blue");
                        text(allPlayers[plr].name, x-60, y+25);


                         
                     }
                    
                     textSize(20);
                     fill("white");
                     strokeWeight(2);
                     stroke("orange");
                     text(allPlayers.player1.name + "'s Score: "+allPlayers.player1.score,displayWidth/22,displayHeight/20);
                     text(allPlayers.player2.name + "'s Score: " + allPlayers.player2.score, displayWidth/22,displayHeight/12);
                     textSize(30);
                      text("The first player to get 20 points wins.", displayWidth/3, displayHeight/20);

                      if(a === 0){
                        if(allPlayers.player1.score >= 20){
                            gameState = 2;
                            playsound.stop();
                            endsound.play();
                            player.rank += 1;
                            console.log(player.rank);
                            swal({ title: allPlayers.player1.name + ` Wins!`, text: "Great effort!", imageUrl: "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png", imageSize: "100x100", confirmButtonText: "Ok", });
                        
                      
                    }
                    }
                
                        if(a === 0){
                        if(allPlayers.player2.score >= 20){
                            gameState = 2;
                            playsound.stop();
                            endsound.play();
                            player.rank += 1;
                            console.log(player.rank);
                            swal({ title: allPlayers.player2.name+` Wins!`, text: "Great effort!", imageUrl: "https://raw.githubusercontent.com/vishalgaddam873/p5-multiplayer-car-race-game/master/assets/cup.png", imageSize: "100x100", confirmButtonText: "Ok", });
                        }
                    }
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 25
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 25
                    player.update();
                }

            

                 if (frameCount % 60 === 0) {
                     fruits = createSprite(random(100, displayWidth-75), 0, 100, 100);
                     fruits.velocityY = (11+4*player.score/10);
                     var rand = Math.round(random(1,5));
                     switch(rand){
                         case 1: fruits.addImage("fruit1",fruit1_img);
                         break;
                         case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }
                     fruitGroup.add(fruits);
                     
                 }

            



                                  if (frameCount % 140 === 0) {
                     bomb = createSprite(random(100, displayWidth-75), 0, 100, 100);
                     bomb.velocityY = (11+4*player.score/10);
                     bomb.lifetime = 1000;
                     bomb.addImage(bombimg);
                     bomb.scale = 0.3;
                     bombGroup.add(bomb);
                     
                 }
                 
                  if (player.index !== null) {

                    

                    for (var i = 0; i < fruitGroup.length; i++) {

                        if (fruitGroup.get(i).isTouching(players)) {
                            fruitGroup.get(i).destroy();
                            player.score = player.score + 1;
                            gainpoint.play();
                        }
                        
                    }


                    for (var s = 0; s < fruitGroup.length; s++) {

                        if (fruitGroup.get(s).y > displayHeight-80) {
                            fruitGroup.get(s).destroy();
                            player.score = player.score - 1;
                            losepoint.play();
                        }
                        
                    }

                    for (var z = 0; z < bombGroup.length; z++) {

                        if (bombGroup.get(z).isTouching(players)) {
                            bombGroup.get(z).destroy();
                            player.score = player.score - 5;
                            bombhit.play();
                        }


                        
                    }

                    if(player.score < 0){
                        player.score = 0;
                    }

                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
       console.log(player.score);
    }
}
