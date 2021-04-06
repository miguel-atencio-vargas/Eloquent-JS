const SCRIPTS = require('./scripts.js');
// Array.prototype.filter()
// function filter(array, proof) {
//   let passed = [];
//   for( let element of array) {
//     if(proof(element)) passed.push(element);
//   }
//   return passed;
// }

const resultFilter = SCRIPTS.filter(item => item.direction == 'ttb' && item.living)

console.log(resultFilter);

// Mapear(transformar) un array - Array.prototype.map()
function map(array, transform) {
  let mapped = [];
  for(let item of array) {
    mapped.push(transform(item))
  }
  return mapped;
}

let rightToLeftCodes = SCRIPTS.filter(({direction}) => direction == 'rtl');
const resultMap = map(rightToLeftCodes, item => item.name);
console.log(resultMap);

// Array.prototype.reduce()
function reduce(array, combine, init) {
  let actual = init;
  for(let item of array) {
    actual = combine(actual, item);
  }
  return actual;
}

console.log(reduce([1,2,3,4,5], (a, b) => a + b, 0));

// Encontrar el idioma con la mayor cantidad de caracteres:
function countOfChars(idiom) {
  return idiom.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0)
}

const longestIdiomChars = SCRIPTS.reduce((a,b) => {
  return countOfChars(a) < countOfChars(b) ? b : a;
});
console.log(longestIdiomChars);






function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

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
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function textScripts(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : "none";
  }).filter(({name}) => name != "none");

  let total = scripts.reduce((n, {count}) => n + count, 0);
  if (total == 0) return "No scripts found";

  return scripts.map(({name, count}) => {
    return `${Math.round(count * 100 / total)}% ${name}`;
  }).join(", ");
}
