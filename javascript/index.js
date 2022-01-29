////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verifica si el usuario ingresado es el correcto.
function loginUser() {
  let emailDom = document.getElementById("email");
  let passwordDom = document.getElementById("password");

  //Test de verificacion si ingreso email y contraseña
  let testEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      emailDom.value
    );
  console.log(testEmail);
  let testPass =
    passwordDom.value == null ||
    passwordDom.value.length == 0 ||
    /^\s+$/.test(passwordDom.value);
  console.log(testPass);

  //Validacion de usuario y contraseña

  for (let userRegistrados of usuariosJason) {
    if (testEmail == true && testPass == false) {
      if (
        emailDom.value == userRegistrados.email &&
        passwordDom.value == userRegistrados.password
      ) {
        noDato = "";
        tiempoDeEspera();
      } else {
        msjError(errorMensaje, noDato);
        noDato = "";
      }
    } else {
      console.log("Entro aca");
      msjError(errorMensaje, noDato);
      noDato = "";
    }
  }
  //////////Animaciones
  $("html, body").animate(
    {
      scrollTop: $("#error").offset().top,
    },
    0200
  );
}

//Evento de registro
let botonLogin = document.getElementById("login");
botonLogin.addEventListener("click", loginUser);
let usuariosJason = JSON.parse(sessionStorage.getItem("USERS"));

//JQUERY PARA DESAFIO
$("#Borrar").click(function () {
  let lista = document.getElementById("error");
  lista.removeChild(lista.lastChild);
});

$("#login").on("mouseenter", function () {
  $("#login").css("color", "blue");
  $("#login").css("background-color", "rgb(32, 206, 206)");
});
$("#login").on("mouseleave", function () {
  $("#login").css("color", "white");
  $("#login").css("background-color", "rgb(33,37,41)");
});

//ANIMACIONES
$("#login").on("click", function () {
  $("#login").css("color", "white").slideUp(0200).delay(0200).slideDown(0200);
});

function msjError(mensaje, msj) {
  console.log("Usuario o Contraseña incorrecta");
  let parrafo = document.createElement("h1");
  parrafo.innerHTML = msj;
  parrafo.style.color = "(rgb(210, 217, 221))";
  parrafo.style.fontSize = "25px";
  mensaje.appendChild(parrafo);
}

//Vuelve a index
function entrar() {
  window.location.href = "pages/home.html";
}
function tiempoDeEspera() {
  console.log("Pasas a index");
  let volverIndex = setTimeout(entrar, 1500);
}

let errorMensaje = document.getElementById("error");
let noDato = "Usuario o Contraseña incorrecta";
