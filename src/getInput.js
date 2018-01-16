
class Input {

    static unique(arr) {
        return [...new Set(arr)];
    }

    static is4Digits(s) {
        if (s != null && s != "") {
            return !isNaN(s);
        }
        return false;
    }

    getInputStringArr(input) {
        let flag = true;
        for(let element of input) {
            if(!Input.is4Digits(element)) {
                flag = false;
                break;
            }
        }; 
        if (input.length === 4 && Input.unique(input).length === input.length && flag){
            return true;
        } else {
            return false;
        }
    }
}

module.exports = Input;