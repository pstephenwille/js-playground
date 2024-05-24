const swapAndReverse = (astring) => {
    const digitsWithIndex = astring.split('')
        .reduce((accum, next, idx) => {
            if (/\d/.test(next)) {
                accum[idx] = next
            }

            return accum;
        }, {});

    const allLetters = astring.replaceAll(/\d/g, '');

    console.log('%c...', 'color:red', allLetters, digitsWithIndex)

}
swapAndReverse('a1b2c3')


/* dutch sort */
const dutchReverse = (astring)=>{
    let left = 0;
    let curr = 0;
    let right = astring.length - 1;
    let characters = astring.split('');
    const lettersRegex = new RegExp(/[a-zA-Z]+/g);

    for (curr; curr < characters.length; curr++) {
        const currentChar = characters[curr];

        if (lettersRegex.test(currentChar)) {

        }
    }

}



/* prime generator */
function* generatePrimes(num) {
    for (let i = 0; i < num; i++) {
        if (isPrime(i)) {
            yield i;
        }
    }
}

isPrime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

class Triple {
    static triple(n) {
        if (n === undefined) {
            n = 1;
        }
        return n * 3;
    }
}

class BiggerTriple extends Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

console.log(Triple.triple());        // 3
console.log(Triple.triple(6));       // 18

var tp = new Triple();

console.log(BiggerTriple.triple(3));
// 81 (not affected by parent's instantiation)

// console.log(tp.triple());

// console.log(tp.triple());
console.log('===================');

/* HR two string */
let letters = 'alkdjkllakjflakdjboeurqpwoeindf';
console.log('...ltrs ', [...new Set(letters)]);


/* HR - jumping cloudes ans = 46 */
let clouds = [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0];

function jumpingOnClouds(c) {
//    [ 0, 0, 1, 0, 0, 1, 0 ]
    let bigStepPattern = /(?<=0)00/g
    let bigSteps = bigStepPattern.test(c.join(''))
        ? c.join('').match(bigStepPattern).length
        : 0;

    let bigestSteps = /0000/.test(c.join(''))
        ? c.join('').match(/0000/g).length
        : 0;

    let smallSteps = c.join('').match(/0/g).length - 1;
    console.log(' ..,x ', smallSteps, bigSteps);

    return smallSteps - (bigSteps);
}

console.log('....clouds ', jumpingOnClouds(clouds));

/* async await promises */
async function testPromise() {
    return '..............';
}

testPromise().then((ugh) => console.log('ugh ', ugh));
console.log('..test promise ', testPromise());

// climb to top
/**
 * n  = 3*/

/* closure scope */
function woot() {
    /* encapsulate data */
    let ugh = 5;
    return function () {
        let ugh = 6;
        console.log(this, ugh);//this == window
        return function () {
            let ugh = 7;
            console.log('...this ', this, this.name);
        }.bind({name: 'ughx'})
    }
}

console.log('woot ', woot()()());

woot2 = {
    ugh: function () {
        console.log('...woot2 ugh ', this);// ugh
        return () => {
            console.log('...woot2 nested ', this);// ugh
        }
    }
};
console.log('...woot2 ', woot2.ugh()());


function delayedResolve(x) {
    return new Promise(resolve => {
        setTimeout(() => resolve(x), 2000)
    });
}

async function funcOne(x) {
    const a = await delayedResolve(5);
    const b = await delayedResolve(15);

    return x + a + b;
}

funcOne(10).then(v => console.log('one... ', v));


/* single uncoupled int; returns 5 */
[1, 2, 3, 5, 3, 2, 1].reduce((sum, num) => {
    return sum ^ num;
});

/* fibronacci O(n) - good */
const fibronaccci = num => {
    let a = 1, b = 0, temp;
    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
};
// console.log('..fib ', fibronaccci(12));

// console.log('..fib ', fib2(12));

function fib(num) {
    let arr = [0, 1];
    for (let i = 2; i < num + 1; i++) {
        arr.push(arr[i - 2] + arr[i - 1]);
    }
    return arr;
}

console.log('...fib ', fib(7));

let arr1 = [[1, 3], [2, 5], [7, 9], [10, 12], [11, 15]];

function inrange(arr) {
    let arr1 = arr;
    if (arr1.length === 1) return arr1;

    for (let i = 0; i < arr1.length; i++) {
        let max1 = arr1[i][1];
        let max2 = arr1[i + 1][0];

        if (max2 <= max1) {
            arr1[i] = arr1[i].concat(arr1[i + 1]);
            arr1.splice(i + 1, 1);
        }
    }

    return arr1;
}

var twoSum = function (nums, target) {
    let answer = [];
    nums.reduce((num, elem, index, arr) => {
        if (num + elem === target) {
            answer.push(arr.indexOf(num), arr.indexOf(elem));
            return arr[index + 1];
        }
        return num;
    });

    return answer;
};
console.log('res 1', twoSum([2, 5, 7, 11, 15, 5, 6, 3], 9));

// 1.) Traverse left subtree, 2.) root node, 3.) traverse right subtree.
function inOrder(node) {
    if (node === undefined) return [];

    return inOrder(node.left)
        .concat(node.x)
        .concat(inOrder(node.right));
}

function Node(data, x) {
    this.left;
    this.right;
    this.data = data;
    this.x = x;
}

node1 = new Node(0, '');
node1.left = new Node(1, 'a');
node1.left.left = new Node(2, 'b');
node1.left.left.left = new Node(3, 'c');
node1.right = new Node(5, 'd');
node1.right.right = new Node(6, 'e');
node1.right.right.right = new Node(7);

/*************/
[1, 1, 2, 2, 3, 4, 4, 5, 5].forEach((elm, index, arr) => {
    if (index === arr.indexOf(elm) && index === arr.lastIndexOf(elm)) {
        console.log('unique:', elm, index);
    }
});

/*********  longest sub array multiples of 3,2 *******/
count = 0;
[3, 2].forEach(elem => {
    let temp = 0;
    [2, 4, 6, 1, 3, 6, 16, 26].forEach(item => {
        if (item % elem === 0) {
            temp++;
            if (temp > count) {
                count = temp;
            } else {
                temp = 0;
            }
        }
    });
});
// console.log('count ', count);

var length = [2, 4, 6, 1, 3, 6, 16, 26];

function longestSubArray(arr) {
    let len = --arr.length;
    if (arr[--arr.length] % 3 === 0) {

        return longestSubArray([arr[--arr.length]]);
    }

    return;
}

longestSubArray(length);
console.log('lenght ', length);
/***********/
for (var i = 0; i < 5; i++) {
    (function () {
        // console.log('i,j:', i);
    }(i));
}

/**********************/
var myobj = {
    foo: 'bar',
    func: function () {
        var self = this;
        // console.log('outer ', this);
        (function () {
            // console.log('...inner', this);
            /* window obj */
        }());
    }
};

/*************/
function Animal() {
    this.eatsVeggies = true;
    this.eatsMeats = false;
    // console.log('animal ', this);
}

function Herbivore() {
    this.namex = 'herby';
    // console.log('herbivore ', this);
}

Herbivore.prototype = new Animal();

function Carnivor() {
    this.eatsMeats = true;
    // console.log('carnivor ', this);
}

Carnivor.prototype = new Animal();

var rabbit = new Herbivore();
var bear = new Carnivor();

// console.log('rabit ', rabbit.eatsMeats);
// console.log('bear ', bear.eatsMeats);

/*****************/
function traverse(element, callback) {
    callback(element);//do work
    var list = element.children;
    for (var i = 0; i < list.length; i++) {
        traverse(list[i], callback);// iterate over children
    }

}

var length = 10;

function fn() {
    console.log('..fn: ', this.length);
}

var obj = {
    length: 5,
    method: function (fn) {
        fn();
        this.nested.m2(fn),
            arguments[0]();
        console.log('..method: ', arguments);
    },
    nested: {
        length: 'x',
        m2: function (fn) {
            fn();
            console.log('..nexted: ');
        }
    }
};

var b = 1;

function outer() {
    var b = 2;

    function inner() {
        b++;
        console.log(`inner b `, b, this);
        var b = 3;
        console.log(`...inner b `, b);
    }

    inner();

}

(function () {
    var a = b = 3;
})();
console.log(b);

function foo1() {
    return {
        bar: 'bar1'
    };
}

function foo2() {
    return;
    /* auto inserted semi coln */
    {
        bar:'bar2';
    }
    ;
}

// customized promise
async function sayJoke() {
    // use mocked `fetch(url)`
    //needs to retun http req promise/fetch
    let res = await Promise.resolve({joke: {setup: 'two guys in a bar', punchline: 'too funny'}});
    let json = await res;
    let joke = json.joke;

    return {
        saySetup: () => joke.setup,
        sayPunchline: () => joke.punchline
    };
}

function isPallindrome(str) {
    // str.split('').reverse().join();
    let reversed = Array.prototype.slice.call(str).reverse().join('');
    return reversed === str;
}

function pallindrome(str) {
    return str.substr(str.length >> 1, Infinity).split('').reverse().every((s, i) => str[i] === s);
}

var isPalindrome2 = function (s) {
    let phrase = s.replace(/\W+/g, '').toLowerCase();
    let phraseReversed = phrase.split('').reverse().join('');

    return phrase === phraseReversed;
};


arr = [0, 111, 555, 12];
max = Math.max.apply(null, arr);
maxIndex = 0;

arr.forEach((item, index) => {
    if (item === max) {
        maxIndex = index;
    }
});

console.log('..max ', maxIndex);

$.get('html/google-results.html').done((data) => {
    $('google-results').append(data);
    // walkDomFragment($('google-results')[ 0 ], printNode);
});

// O(n^2)
let nestedLoops = function () {
    let arr1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
    let arr2 = ['1', '2', '3', '4', '5'];

    for (i = 0; i < arr1.length; i++) {
        for (j = arr2.length - 1; j >= 0; j--) {
            console.log('...inner ', arr2[j]);
        }
    }

};
// nestedLoops();

xarr = [0, 1, 1, 1, 2, 3, true];

function removeDups(str) {
    uniques = {};
    arr = Array.prototype.slice.call(str);
    arr.forEach(item => {
        uniques[item] = '';
    });
    uarr = Object.keys(uniques);
    return uarr.join('');

}

removeDuplicates = function (arr) {
    // implement here
    arr.forEach((item1, index1, myarray) => {
        myarray.forEach((item2, index2) => {
            if (index1 === index2) return;
            if (item1 === item2) {
                myarray.splice(index2, 1);
            }
        });
    });

};
removeDuplicates(xarr);
console.log('...xarr ', xarr);

function delayByOneSec(f) {
    let futureWork = f;
    let self = this;

    // To be implemented
    return function (name, ...greeting) {
        setTimeout(function () {
            futureWork.call(self, name, greeting);
        }, 1000);
    };
}

function work(name, greeting) {
    console.log('hello: ', name, '... ', greeting);
}

mydelay = delayByOneSec(work);
mydelay('woot', 'ugh', 'u-oh');

let walkDomFragment = function (node, callback) {
    // do work with node via callback
    callback(node);
    //move node inward
    let _node = node.firstChild;

    while (_node) {
        walkDomFragment(_node, callback);
        //move node downward
        _node = _node.nextSibling;
        noop();
    }
    console.log('..outside while');
};

let printNode = function (node) {
    console.log('...print ', node.tagName);
};

let noop = function () {
    console.log('...no-op');
};

// sum array
woot = [1, 2, 3, 4, 5];
woot.reduce((sum, val, index) => sum + val);
(() => {
    let sum = 0;
    return manualReducer = (arr) => {
        arr.forEach((item, index) => sum += item);
        return sum;
    };
})();

// ww = manualReducer(woot);

/*
 * leetcode; two sum */
nums = [2, 7, 11, 15];
target = 9;
twoSum = function (nums, target) {
    let ret = [];

    nums.forEach((num1, index1, arr1) => {
        if (arr1.indexOf(num1) !== index1) return;

        nums.forEach((num2, index2, arr2) => {
            if (ret.indexOf(index2) === index2) return;

            if ((num1 + num2) === target) {
                ret.push(index1, index2);
            }
        });
    });
    // return [ ...new Set(ret) ];
    return ret;
};
// console.log('...two sum ', twoSum(nums, target));

woot = [1, 0, 1, 0, 1, 2].filter((item, index, arr) => arr.indexOf(item) === index);
