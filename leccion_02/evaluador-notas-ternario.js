// Evaluador de Notas con Mensajes Personalizados usando Operador Ternario para practicarlo

// Declaración de la variable nota (puede ser un valor aleatorio entre 0 y 100)
let nota = Math.floor(Math.random() * 101);

// Evaluación de la nota con operador ternario
let mensaje = nota >= 90 ? `Nota: ${nota} - Excelente` :
              nota >= 75 ? `Nota: ${nota} - Bien` :
              nota >= 60 ? `Nota: ${nota} - Suficiente` :
                           `Nota: ${nota} - No aprobado`;
console.log(mensaje);

// Pruebas con valores específicos
const notasDePrueba = [45, 60, 75, 0];
notasDePrueba.forEach(notaPrueba => {
    let mensajePrueba = notaPrueba >= 90 ? `Nota: ${notaPrueba} - Excelente` :
                        notaPrueba >= 75 ? `Nota: ${notaPrueba} - Bien` :
                        notaPrueba >= 60 ? `Nota: ${notaPrueba} - Suficiente` :
                                          `Nota: ${notaPrueba} - No aprobado`;
    console.log(mensajePrueba);
});
