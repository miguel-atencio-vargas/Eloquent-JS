

/* ===========1. Ciclo de un triángulo===========*/
console.log('Mi solución:');
let hashes='#';
for(let i=0; i<7; i++){
	console.log(hashes);
	hashes+='#';
}

console.log('Solución de la página:');
for (let line = "#"; line.length < 8; line += "#")
	console.log(line);

/* ===========2. FizzBuzz===========*/
// Parte Uno
for(let i=1; i<=100; i++){
	if (i % 3 === 0) {
		console.log(i +' '+'Fizz');
	}else if(i % 5 === 0){
		console.log(i+' '+'Buzz');
	}else{
		console.log(i);
	}
}

// Parte dos
console.log('Mi solución:');
for(let i=1; i<=100; i++){
	if (i % 3 === 0 && i % 5 === 0) {
		console.log('FizzBuzz');
	}else if(i % 3 === 0){
		console.log('Fizz')
	}else if(i % 5 === 0){
		console.log('Buzz');
	}else{
		console.log(i);
	}
}


console.log('Solución de la página:');

for (let n = 1; n <= 100; n++) {
	let output = "";
	if (n % 3 == 0) output += "Fizz";
	if (n % 5 == 0) output += "Buzz";
	console.log(output || n);
}

// 
/* ===========3. Tablero de ajedrez===========*/
console.log('Mi solución:');

let tam = 8, tablero='', first, second;

for(let i = 0; i < tam; i++){
	if (i % 2 === 0) first = ' ', second = '#';
	else first = '#', second = ' ';

	for(let j = 0; j< tam; j++){
		if (j % 2 === 0) tablero += first;
		else tablero += second;
	}
	tablero += '\n';
}
console.log(tablero);


console.log('Solución de la página:');

let board = "", size=8;

for (let y = 0; y < size; y++) {
	for (let x = 0; x < size; x++) {
    // x + y da el contexto de que si la linea es par o impar 🤯
		if ((x + y) % 2 == 0) {
			board += " ";
		} else {
			board += "#";
		}
	}
	board += "\n";
}

console.log(board);
