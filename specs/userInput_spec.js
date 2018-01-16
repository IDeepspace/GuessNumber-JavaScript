let GetInput = require('../src/getInput');

describe('inputTest', () => {

    let getInput;

    beforeEach(() => {
        getInput = new GetInput();
    });

    it('shouldInputStrOfLengthFour-1', () => {
        const str = '123';
        expect(getInput.getInputStringArr(str)).toEqual(false);
    });

    it('shouldInputStrOfLengthFour-2', () => {
        const str = '12345';
        expect(getInput.getInputStringArr(str)).toEqual(false);
    });

    it('shouldInput4Digits', () => {
        const str = '123#'; 
        expect(getInput.getInputStringArr(str)).toEqual(false);
    });

    it('shouldInputNoRepeat', () => {
        const str = '1233';
        expect(getInput.getInputStringArr(str)).toEqual(false);
    });

    it('rightInput', () => {
        const str = '1234';
        expect(getInput.getInputStringArr(str)).toEqual(true);
    });
});