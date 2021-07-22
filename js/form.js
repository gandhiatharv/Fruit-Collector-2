class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.greeting2 = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
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
        this.title.position(displayWidth/5-15, -50);
        this.title.style('font-size', '80px');
        this.title.style('color', 'skyblue');
        this.input.position(780,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(780,500);
        this.button.style('width', '200px');
        this.button.style('height', '50px');
        this.button.style('background', 'lightpink');
        this.reset.hide();

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name+"!")
            this.greeting.position(700,300);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '50px');
            this.greeting2.html("Please wait for another person to join.")
            this.greeting2.position(390,400);
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

    }

    showReset(){
        this.reset.position(displayWidth-150,10);
        this.reset.show();
        this.reset.style('width', '100px');
        this.reset.style('height', '50px');
        this.reset.style('background', 'lightpink');
    }
}
