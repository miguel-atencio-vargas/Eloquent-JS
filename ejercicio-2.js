const minValue = (a,b) => a<b? a:b;

console.log(minValue(-2,0));

// 2. Es par ?  Recursivo

function esPar( num ) {
    if (num === 0) return true;
    else if (num === 1) return false;
    else if (num < 0) return esPar(-num);
    return esPar( num - 2 );
}

console.log(esPar(50));
console.log(esPar(75)); 
console.log(esPar(-1));

// 3. Conteo de frijoles

function contarFs(texto = '') {
    let c = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'F') {
            c++;
        }
    }
    return c;
}
console.log(contarFs('FfsdreifF'));


function contarCaracteres(cadena='', caracter='a') {
    let c = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (cadena[i] === caracter) {
            c++;
        }
    }
    return c;
}
console.log(contarCaracteres('Abbbc', 'A'));


function contarFsV2(texto = '') {
    return contarCaracteres(texto, 'F');
}

console.log(contarFsV2('FfsdreifF'));