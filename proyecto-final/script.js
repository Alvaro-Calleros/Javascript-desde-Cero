const users = [
    { name: "Alvaro Calleros", username: "acalleros", password: "password", image: "https://static.wikia.nocookie.net/terminator/images/4/49/Christian_Bale.jpg/revision/latest?cb=20150715100348&path-prefix=es" },
    { name: "Admin", username: "admin", password: "password", image: "https://www.elcomercioonline.com.ar/imagenes/008048.jpg" },
    { name: "User", username: "user", password: "password", image: "https://www.azcentral.com/gcdn/presto/2020/12/08/PPHXS/39ec7e1d-be48-4599-93ee-7ad61750afde-Jaime_Camil_padre_lavoz.JPG?width=660&height=991&fit=crop&format=pjpg&auto=webp" },
    { name: "Alvarito", username: "alvarito", password: "password", image: "https://sm.ign.com/t/ign_latam/screenshot/default/tonystark_wny2.1280.jpg" }
  ];
  
  function logIn()
  {
    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
  
    const foundUser = users.find(
      (u) => u.username === usernameInput && u.password === passwordInput
    );
  
    if (foundUser)
    {
      errorMessage.style.display = "none";
      localStorage.setItem("loggedUser", JSON.stringify(foundUser));

      window.location.href = "home.html";
    } else {
      errorMessage.textContent = "Usuario o contraseña incorrectos";
      errorMessage.style.display = "block";
    }
  }
  