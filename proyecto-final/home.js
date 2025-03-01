function postComment() {
    const commentText = document.getElementById("comment").value;
    const commentSection = document.getElementById("comment-section");
    const user = JSON.parse(localStorage.getItem("loggedUser"));
  
    if (!user) { // Si no hay usuario logueado, redirigimos al index
      alert("No estás autenticado. Redirigiendo al inicio...");
      window.location.href = "index.html";
      return;
    }
  
    if (commentText.trim() === "") { // Validar que el comentario no esté vacío
      alert("El comentario no puede ir vacío");
      return;
    }
  
    // Obtener fecha y hora local
    const fecha = new Date().toLocaleString();
  
    const comentarioSection = document.createElement("section");
    comentarioSection.classList.add("comentario");
  
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.style.marginLeft = "10px";
    deleteButton.onclick = () => comentarioSection.remove();
  
    //construir el contenido del comentario en formato html
    comentarioSection.innerHTML = `
      <div style="display:flex; align-items:center;">
        <img
          class="user-image"
          src="${user.image || 'https://via.placeholder.com/30'}"
          alt="user-image"
        />
        <strong>${user.name || 'Invitado'}</strong>
      </div>
      <p style="margin:0; font-size:0.8rem; color:gray;">${fecha}</p>
      <p style="margin-top:0.5rem;">${commentText}</p>
    `;
  
    comentarioSection.appendChild(deleteButton);
  
    commentSection.appendChild(comentarioSection);
  
    document.getElementById("comment").value = "";
  }
  