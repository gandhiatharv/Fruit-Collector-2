class Form{
    constructor(){
 this.input = createInput("").attribute("placeholder", "Nickname");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.greeting2 = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.leave = createButton('Leave');
    }
    hide() {
        this.greeting.hide();
        this.greeting2.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("FRUIT CATCHER RACE");
        this.title.position(displayWidth/5.5, displayHeight/50);
        this.title.style('font-size', '80px');
        this.title.style('color', 'skyblue');
        this.input.position(displayWidth/2.35,displayHeight/2.6);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(displayWidth/2.35,displayHeight/2);
        this.button.style('width', '200px');
        this.button.style('height', '50px');
        this.button.style('background', 'lightpink');
        this.reset.hide();
        this.leave.show();
        this.leave.position(displayWidth/1.12,displayHeight/50);
        this.leave.hide();
        this.leave.style('width', '100px');
        this.leave.style('height', '50px');
        this.leave.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.leave.show();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hi " + player.name+"!")
            this.greeting.position(displayWidth/2.5,displayHeight/3);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
            this.greeting2.html("Please wait for another person to join.")
            this.greeting2.position(displayWidth/5,displayHeight/2.5);
            this.greeting2.style('color', 'white');
            this.greeting2.style('font-size', '50px');
        });

        this.reset.mousePressed(() => {
           player.updateCount(0);
           game.update(0);
           var playerInfoRef = database.ref('players');
           playerInfoRef.remove();
           Player.updateCarsAtEnd(0);
           location.reload();
        });

        this.leave.mousePressed(() => {
            player.updateCount(playerCount-1);
            location.reload();
         });

    }

    showReset(){
        this.reset.position(displayWidth/20,displayHeight/50);
        this.reset.show();
        this.reset.style('width', '100px');
        this.reset.style('height', '50px');
        this.reset.style('background', 'lightpink');
    }
}
