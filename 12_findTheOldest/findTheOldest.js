const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        const ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
        const ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
        return ageB - ageA; 
    });
    return arr[0].name; 
};

// Do not edit below this line
module.exports = findTheOldest;
