const JOURNAL = require('./journal.js');

require('./journal.js');


var journal = [];
function addEntry(events, squirrel) {
    journal.push({ events, squirrel });
}

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    journal.forEach(entrada => {
        let index = 0;
        if (entrada.events.includes(event)) {
            index += 1;
        }
        if (entrada.squirrel) {
            index += 2;
        }
        table[index] += 1;
    });
    return table;
}
//console.log(tableFor('potatoes', JOURNAL));

// Obtiene todos los eventos que ocurrieron en un periodo de tiempo
function journalEvents(journal) {
    let events = [];
    journal.forEach( entry => {
        entry.events.forEach( event => {
            if (!events.includes(event)) {
                events.push(event);
            }
        })
    });
    return events;
}

journalEvents(JOURNAL).forEach((event) => {
    let correlation = phi(tableFor(event, JOURNAL));
    if(correlation > 0.1 || correlation < -0.1) {
        console.log(event + ":", correlation);
    }
});





function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}

var list = {
    value: 1,
    rest: {
        value: 2,
        rest: {
            value: 3,
            rest: null
        }
    }
};