let NumberGenerator = require('../src/numberGenerator');

describe('NumberGenerator', () => {

    let numberGenerator, arr;

    beforeEach(function () {
        numberGenerator = new NumberGenerator();
        arr = numberGenerator.creatNumArr();
    });

    it("shouldGenerateArrOfLengthFour", () => {
        const len = 4;
        expect(arr.length).toBe(len);
    });

    it('shouldGenerateArrNoRepeatNum', () => {
        const unique = (arr) => [...new Set(arr)];
        const result = unique(arr);
        expect(arr.length).toEqual(result.length);
    });

    it('shouldGenerate4Digits', () => {
        for(let i of arr) {
            expect(Number.isInteger(i)).toEqual(true);
        }
    });
});