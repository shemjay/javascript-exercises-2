const fibonacci = function(n) {
    parseInt(n)
    let a = 0
    let b = 1
    if (+n === 1) {
        return 1
    } else if (+n === 0) {
        return 0
    } else if (+n < 0) {
        return "OOPS"
    } else if (+n !== 0 && +n !== 1) {
        for (let i = 0; i < n - 1; i++) {
            let nextNum = a + b
            a = b
            b = nextNum
        }
        return b
    } 

};

// Do not edit below this line
module.exports = fibonacci;
