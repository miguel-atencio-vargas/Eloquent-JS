const SCRIPTS = require('./scripts.js');


// 1. Aplanamiento:

let arrays = [[1, 2, 3], [4, 5], [6]];

const flatArray = arrays.reduce((acc, currentArray) => acc.concat(currentArray), []);
console.log(flatArray);

// → [1, 2, 3, 4, 5, 6]

// 2. Tu propio ciclo

function loop(start, test, update, body) {
    while(test(start)) {
        body(start);
        start = update(start);
    }
}
// solution book
function loop2(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
        body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

// 3. Cada
function every(array, test) {
    for(let item of array) {
        if(!test(item)) return false;
    }
    return true
}

function every2(array, test) {
    return !array.some((item) => !test(item));
}
console.log('=========');
console.log(every2([1, 3, 5], n => n < 10));
// → true
console.log(every2([2, 4, 16], n => n < 10));
// → false
console.log(every2([], n => n < 10));
// → true

console.log('=========');
// 4. Dirección de escritura dominante
function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
    return null;
}

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({ name, count: 1 });
        } else {
            counts[known].count++;
        }
    }
    return counts;
}
function dominantDirection(text) {
    let codes = countBy(text, char => {
        let code = characterScript(char.codePointAt(0));
        return code? code.direction : 'any';
    }).filter(({name}) => name != 'any');

    let total = codes.reduce((acc, {count: currentValue}) => acc + currentValue, 0);
    if (total === 0)  return 'Not found digits!'
    
    return codes.reduce((a,b) => {
        return a.count > b.count? a:b;
    }).name
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl