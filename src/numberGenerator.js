class NumberGenerator {
    static randomFn() {
        return Math.floor(Math.random() * 10);
    }
    creatNumArr() {
        let arr = [];
        while(arr.length< 4) {
            let num = NumberGenerator.randomFn();
            let onoff = true;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] === num) {
                    onoff = false;
                    break;
                } else {
                    onoff = true;
                }
            }
            if (onoff) {
                arr.push(num);
            }
        }
        return arr;
    }
}


module.exports = NumberGenerator;