let Game = require('./game');
let NumberGenerator = require('./numberGenerator');
let numberGenerator = new NumberGenerator();

class Main {
    startController() {
        let generator = numberGenerator.creatNumArr();
        let game = new Game(generator);
        let answer = game.gameController();
        let result = '4A0B';
        if(answer) {
            if(answer === result){
                console.log('you win!');
            }else {
                console.log(answer);
            }
        }else {
            this.startController();
        }
    }
    
    startGame() {
        let gameCounter = 6;
        while(gameCounter > 0) {
            gameCounter--;
            this.startController();
        }
        console.log('game over!');
    }

}

let main = new Main();
main.startGame();