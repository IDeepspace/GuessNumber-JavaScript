let NumberGenerator = require('../src/numberGenerator');
let Game = require('../src/game');

describe('gameTest', () => {

    let numberGenerator, game, generator;

    beforeEach(() => {
        numberGenerator = new NumberGenerator();
    });

    it('hasbeencalled', () => {
        expect(numberGenerator.randomFn).toHaveBeenCalled;
    });
    
});