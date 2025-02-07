
let nota = Math.floor(Math.random() * 101); // Declaración de la variable ALEATORIA nota 

// Verificación y evaluación de la nota
if (nota >= 90) {
    console.log(`Nota: ${nota} - Excelente`);
} else if (nota >= 75) {
    console.log(`Nota: ${nota} - Bien`);
} else if (nota >= 60) {
    console.log(`Nota: ${nota} - Suficiente`);
} else {
    console.log(`Nota: ${nota} - No aprobado`);
}

// Pruebas con valores específicos

console.log('Prueba con valores especificos: ');

const notasDePrueba = [45, 60, 75, 0];
notasDePrueba.forEach(notaPrueba => {
    if (notaPrueba >= 90)
    {
        console.log(`Nota: ${notaPrueba} - Excelente`);
    } else if (notaPrueba >= 75){
        console.log(`Nota: ${notaPrueba} - Bien`);
    } else if (notaPrueba >= 60) {
        console.log(`Nota: ${notaPrueba} - Suficiente`);
    } else {
        console.log(`Nota: ${notaPrueba} - No aprobado`);
    }
});
