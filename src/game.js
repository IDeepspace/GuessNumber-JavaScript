let GetInput = require('./getInput');
let NumberGenerator = require('./numberGenerator');

let getInput = new GetInput();
let numberGenerator = new NumberGenerator();

let readlineSync = require('readline-sync');

class Game {

    constructor(generator) {
        this.generator = generator;
    }

    static swithStringArrToNumArr(stringArr) {
        let numArr = [];
        for (let i of stringArr) {
            numArr.push(parseInt(i));
        }
        return numArr;
    }

    gameController() {
        // let generator = numberGenerator.creatNumArr();
        let userInput = readlineSync.question('please input a 4 digit number:\n').split('');
        let input;
        if (getInput.getInputStringArr(userInput)) {
            input = Game.swithStringArrToNumArr(userInput);
            let a = 0;
            let b = 0;
            for (let i = 0; i < this.generator.length; i++) {
                for (let j = 0; j < input.length; j++) {
                    if (input[j] === this.generator[i]) {
                        if (j === i) {
                            a++;
                        } else {
                            b++;
                        }
                    }
                }
            }
            return `${a}A${b}B`;
        }else {
            console.log('Invalid Input');
            return false;
        }
    }
}



module.exports = Game;