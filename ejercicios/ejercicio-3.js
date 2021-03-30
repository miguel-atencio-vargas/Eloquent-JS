//Exercise 1

function generateArray(begin, end, step=1) {
    const array = [];
    
    if(begin > end) {
        for (let i = begin; i >= end; i += step) array.push(i);
    }

    for (let i = begin; i <= end; i += step) array.push(i);
    
    return array;
}

function sumArray(array) {
    let sum = 0;
    for (const el of array) sum += el;
    return sum;
}

//console.log(sumArray(generateArray(5,-2,-1)));


//Solution of eloquent :D
function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}



//Exercise 2
function reverseArray(array) {
    const newArray = [];
    array.forEach(e => newArray.unshift(e));
    return newArray;
}

function reverseArrayInPlace(array) {
    let aux, next;
    for(let i=0; i < array.length; i++){
        next = array.length - i - 1;
        if(i > next) break;
        aux = array[i];
        array[i] = array[next];
        array[next] = aux
    }
}


const values = [1, 2, 3, 4, 5,6];
reverseArrayInPlace(values);
// console.log(values);

// Exercise 3 List
function arrayToList(array) {
    if(array.length == 1){
        return {
            value: array.shift(),
            rest: null
        }
    }
    return {
        value: array.shift(),
        rest: arrayToList(array)
    }   
}


function listToArray(list) {
    const array = [];
    for(let node = list; node; node=node.rest) {
        array.push(node.value);
    }
    return array;
}

const list = arrayToList(generateArray(1,6));
// console.log(list)
// console.log(listToArray(list));


function prepend(value, list){
    if(list == null) return {value, rest: null};
    return {value, rest: list}
}

//console.log(prepend(10, prepend(20, null)));

function nth(list, pos) {
    if(pos == 0) return list.value;
    return nth(list.rest, pos-=1)
}

console.log(nth(arrayToList([10, 20, 30, 40]), 3));

// Solution of eloquent
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}