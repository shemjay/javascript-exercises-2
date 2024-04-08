const palindromes = function (str) {
    let reverseStr = str.split('').reverse().join('').toLowerCase()

    if(reverseStr === str) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
