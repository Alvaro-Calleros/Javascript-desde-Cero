const boton = document.getElementById('mostrarOcultar');
const contenido = document.getElementById('contenido');

function toggleContenido() {
    if (contenido.style.display === 'none') {
        contenido.style.display = 'block';
        boton.textContent = 'Ocultar contenido';
    } else {
        contenido.style.display = 'none'; 
        boton.textContent = 'Mostrar contenido';
    }
}

boton.addEventListener('click', toggleContenido);