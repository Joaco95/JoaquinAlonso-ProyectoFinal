////////////////////////////////////////////////////////
//Carga usuario,y guarda el usuario en un arrays,limpia los campos
function altaUsuarios() {
  let nameDom = document.getElementById("name");
  let emailDom = document.getElementById("email");
  let dateDom = document.getElementById("date");
  let passwordDom = document.getElementById("password");
  let user = new signup(
    nameDom.value,
    emailDom.value,
    dateDom.value,
    passwordDom.value
  );
  ////Dato capturado por input
  let domName = document.getElementById("name").value;
  let domEmail = document.getElementById("email").value;
  let domDate = document.getElementById("date").value;
  let domPass = document.getElementById("password").value;

  ////Test de verificacion de datos
  let testName =
    domName == null || domName.length == 0 || /^\s+$/.test(domName);

  if (testName == true) {
    errorNote(mensajeError, errorName);
    errorName = "";
    return;
  } else {
    document.getElementById("mensaje").innerHTML = "";
  }

  let testEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      domEmail
    );

  if (testEmail == true) {
    console.log("entro email");
  } else {
    errorNote(mensajeError, errorEmail);
    return;
  }

  let testPass =
    domPass == null || domPass.length == 0 || /^\s+$/.test(domPass);

  if (testPass == true) {
    errorNote(mensajeError, errorPass);
    return;
  } else {
    console.log("entro password");
  }

  //VERIFICO SI EL EMAIL ESTA REPETIDO
  let emailExistente = allUser.find((item) => item.email == email.value);

  if (emailExistente != undefined) {
    errorNote(mensajeError, existeEmail);
    existeEmail = "";
    document.getElementById("bienvenida").innerHTML = "";
    return;
  }

  //TEXTO DE CARGA DE USUARIO
  let mensaje = document.getElementById("bienvenida");
  let parrafo = document.createElement("h1");
  parrafo.innerHTML = `Bienvenido ${domName}`;
  parrafo.style.color = "white";
  parrafo.style.fontSize = "35px";
  mensaje.appendChild(parrafo);

  //CARGAR DEL USUARIO A LISTA

  allUser.push(user);

  //Transformo usuarios para almacernar en sessionStorage
  let usersJson = JSON.stringify(allUser);
  sessionStorage.setItem("USERS", usersJson);
  let usuario = sessionStorage.getItem("USERS");
  let parseUsuario = JSON.parse(usuario);
  console.log(parseUsuario);

  //Envio de usuario cargado a jsonplaceholder
  let url = "https://jsonplaceholder.typicode.com/posts";
  let infoEnviada = user;
  $.ajax({
    method: "POST",
    url: url,
    data: infoEnviada,
    success: function (respuesta) {
      console.log(respuesta);
    },
  });

  sessionStorage.setItem("Nombre", nameDom.value);
  sessionStorage.setItem("Email", emailDom.value);
  sessionStorage.setItem("Password", passwordDom.value);
  sessionStorage.setItem("FechaDeNacimiento", dateDom.value);

  //Vaciar Campos al crear Usuario
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("password").value = "";
}

//Mensaje de error de carga de campo
function errorNote(mensaje, msj) {
  let parrafo = document.createElement("h2");
  parrafo.innerHTML = msj;
  parrafo.style.color = "rgb(210, 217, 221)";
  parrafo.style.fontSize = "20px";
  mensaje.appendChild(parrafo);
}

//Objeto constructor
class signup {
  constructor(name, email, date, password) {
    this.name = name;
    this.email = email;
    this.date = date;
    this.password = password;
  }
}

//Objeto Contructor
class users {
  constructor(name_sS, email_sS) {
    this.name_sS = name_sS;
    this.email_sS = email_sS;
  }
}

//Array vacio
let allUser = [];

//Variables
let botonRegistrase = document.getElementById("registrarse");
botonRegistrase.addEventListener("click", altaUsuarios);

let existeEmail = "Ya hay usuario con este email";
let errorName = "No ingreso nombre";
let errorEmail = "No ingreso email";
let errorPass = "No ingreso contraseña";
let mensajeError = document.getElementById("mensaje");
