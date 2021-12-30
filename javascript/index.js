////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Verifica si el usuario ingresado es el correcto.
function loginUser() {
  let emailDom = document.getElementById("email");
  let passwordDom = document.getElementById("password");
  let userPermitido = parseUsuario[0].email;
  let passPermitido = parseUsuario[0].contraseña;

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
  if (testEmail == true && testPass == false) {
    if (emailDom.value == userPermitido && passwordDom.value == passPermitido) {
      console.log("welcome");
      let mensaje = document.getElementById("welcome");
      let parrafo = document.createElement("h1");
      parrafo.innerHTML = `Bienvenido Alejandro`;
      parrafo.style.color = "white";
      parrafo.style.fontSize = "30px";
      mensaje.appendChild(parrafo);
      ////ANIMACION
      $("#error").hide();
    } else {
      console.log("Usuario o Contraseña incorrecta");
      let mensaje = document.getElementById("error");
      let parrafo = document.createElement("h1");
      parrafo.innerHTML = `Usuario o Contraseña incorrecta`;
      parrafo.style.color = "white";
      parrafo.style.fontSize = "30px";
      mensaje.appendChild(parrafo);
    }
  } else {
    console.log("No ingreso usuario o contraseña."); /*
    let mensaje = document.getElementById("error");
    let parrafo = document.createElement("h1");
    parrafo.innerHTML = `Usuario o Contraseña no ingresada`;
    parrafo.style.fontSize = "30px";
    mensaje.appendChild(parrafo); */
    $("#error").prepend(`
                        <h1 style="font-size: 30px;margin-bottom: 80px">Usuario o Contraseña no ingresada</h1>`);
  }
  //////////Animaciones
  $("html, body").animate(
    {
      scrollTop: $("#error").offset().top,
    },
    0200
  );
}

//Usuario predeterminado para ingresar
let users = [
  {
    id: "1",
    name: "Alejandro",
    email: "prueba@hotmail.com",
    contraseña: "123456",
  },
];

//Transformacion de storage a JSON
let usersJson = JSON.stringify(users);
localStorage.setItem("UsuarioRegistrado", usersJson);
let usuario = localStorage.getItem("UsuarioRegistrado");
let parseUsuario = JSON.parse(usuario);

//Evento de registro
let botonLogin = document.getElementById("login");
botonLogin.addEventListener("click", loginUser);

//JQUERY PARA DESAFIO
$("#Borrar").click(function () {
  let lista = document.getElementById("error");
  lista.removeChild(lista.lastChild);
});
$("#Borrar").on("mouseenter", function () {
  $("#Borrar").css("color", "blue");
  $("#Borrar").css("background-color", "rgb(32, 206, 206)");
});
$("#Borrar").on("mouseleave", function () {
  $("#Borrar").css("color", "white");
  $("#Borrar").css("background-color", "rgb(33,37,41)");
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
  $("#login").css("color", "white").slideUp(0300).delay(0100).slideDown(0300);

  //Se agrego nombre de ciudad y temperatura
  let url = navigator.geolocation.getCurrentPosition(informa);
  function informa(posicion) {
    let lati = posicion.coords.latitude;
    console.log(lati);
    let long = posicion.coords.longitude;
    console.log(long);
    let clima = `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=d3742193cd47d81bc403947b136a9ada`;
    $("#login").click(function () {
      $.get(clima, function (info) {
        console.log(info);
        console.log(info.name);
        let city = info.name;
        let temperatura = info.main.temp_max;
        let agregarMensaje = `<h3>${city}</h3>
        <h3>${temperatura}°F</h3> `;
        $("#welcome").append(agregarMensaje);
      });
    });
  }
});

$("#Borrar").on("click", function () {
  $("#Borrar").css("color", "white").slideUp(0500).delay(0100).slideDown(0500);
});
