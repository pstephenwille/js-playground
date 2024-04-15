/*
*
* Input: arr = [1,2,3,4]
Output: "23:41"
*
* Input: arr = [5,5,5,5]
Output: ""
*
* */


const HOURS = [0,1,2,3];
const MINUTES = [0,1,2,3,4,5,6,7,8,9];

var largestTimeFromDigits = function(arr) {
    const hours = recurseForMaxTimeUnit(HOURS, [0], 0, 24);
    const minutes = recurseForMaxTimeUnit(MINUTES, [0], 0, 60);
    const resultDisplay = `${hours.join('')}:${minutes.join('')}`;

    return resultDisplay;
};

const recurseForMaxTimeUnit = (digits, timeUnit, index, maxTime)=>{
    // if(digits.length < 0) return hours;
    if(index  > digits.length) return timeUnit;

    let maxDigits = [];
    let oldHours = Number(timeUnit.join(''));
    const hDigit = digits.shift()

    for(var digit = 0; digit < digits.length; digit++){
        const hHours = Number(String(hDigit).concat(digits[digit]));
        const maxHours = (hHours < maxTime)? Math.max(hHours, oldHours): oldHours
        oldHours = maxHours;

        maxDigits = String(maxHours).split('');
    }

    digits.push(hDigit);

    return recurseForMaxTimeUnit(digits, maxDigits, index + 1, maxTime);
}


console.log(largestTimeFromDigits())
