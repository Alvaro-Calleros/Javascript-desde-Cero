const boton = document.getElementById('cambiarContenido');
const titulo = document.getElementById('titulo');
const parrafo = document.getElementById('parrafo');

let contenidoCambiado = false;

function cambiarContenido() {
    if (!contenidoCambiado) {
        titulo.textContent = '¡Contenido actualizado!';
        parrafo.textContent = 'El contenido ha sido cambiado.';
        contenidoCambiado = true;
    } else {
        titulo.textContent = '¡Bienvenido a mi página!';
        parrafo.textContent = 'Este es el contenido inicial.';
        contenidoCambiado = false;
    }
}

boton.addEventListener('click', cambiarContenido);