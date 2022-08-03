const LETTERS_DIGITS={
    2: [ 'a', 'b', 'c' ],
    3: [ 'd', 'e', 'f' ],
    4: [ 'g', 'h', 'i' ],
    5: [ 'j', 'k', 'l' ],
    6: [ 'm', 'n', 'o' ],
    7: [ 'p', 'q', 'r', 's' ],
    8: [ 't', 'u', 'v' ],
    9: [ 'w', 'x', 'y', 'z' ],
}
const combos = []
let digits;
var letterCombinations = function(DIGITS) {
    // for each number
    // recurse for letters
    // if slate is length 3, add slate to results
    digits = DIGITS
    backtrack(0, '')

    console.log(combos)

    return combos;
};

const backtrack = (index, path)=>{
    if(path.length === digits.length){
        combos.push(path)
        return; //backtrack
    }

    let possibleLetters = LETTERS_DIGITS[digits.charAt(index)] || [];

    for(let letter of possibleLetters){
        path += letter;
        backtrack(index + 1, path);

        //backtrack by removing letter before moving on to next
        path = path.slice(0, -1);
    }

}

const foo = letterCombinations('239')
console.log('%c...foo', 'color:gold', foo)
