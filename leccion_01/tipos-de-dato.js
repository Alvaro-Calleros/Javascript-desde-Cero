console.log("Hello World");

// Declaración de variables de diferentes tipos de datos primitivos
typeofVariables();

function typeofVariables() {
    let edad = 18;
    let nombre = 'Alvaro';
    let negativo = -666;
    let booleanoVerdadero = true;
    let cero = 0;
    let cadenaVacia = '';
    let nulo = null;
    let indefinido;
    let booleanoFalso = false;
    
    // Ejemplos adicionales
    let decimal = 3.14;
    let simbolo = Symbol('simbolo');
    let bigIntEjemplo = 9007199254740991n;
    
    // Impresión de tipos y valores
    console.log(typeof edad, edad);
    console.log(typeof nombre, nombre);
    console.log(typeof negativo, negativo);
    console.log(typeof booleanoVerdadero, booleanoVerdadero);
    console.log(typeof cero, cero);
    console.log(typeof cadenaVacia, cadenaVacia);
    console.log(typeof nulo, nulo);
    console.log(typeof indefinido, indefinido);
    console.log(typeof booleanoFalso, booleanoFalso);
    console.log(typeof decimal, decimal);
    console.log(typeof simbolo, simbolo);
    console.log(typeof bigIntEjemplo, bigIntEjemplo);
}
