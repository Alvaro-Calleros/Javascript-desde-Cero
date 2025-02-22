document.getElementById('comment-form').onsubmit = e => {
    e.preventDefault();
    
    let input = document.getElementById('comment-input');
    let texto = input.value.trim();
    
    if (!texto) return;
    
    let comentario = document.createElement('div');
    comentario.className = 'comment';
    comentario.innerHTML = `
        <p>${texto}</p>
        <small>${new Date().toLocaleString()}</small>
        <button onclick="this.parentElement.remove()">Eliminar</button>
    `;
    
    document.getElementById('comments-container').appendChild(comentario);
    input.value = '';
};