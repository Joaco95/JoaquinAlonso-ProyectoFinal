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
  let domdate = document.getElementById("date").value;
  let domPass = document.getElementById("password").value;

  /*   let prueba = { name: "joaco", id: "5" };

  ////
  $("#registrarse").click(function () {
    console.log(prueba);
    $.post(url, prueba, function (data) {
      console.log(prueba);
    });
  });
 */
  ////Test de verificacion de datos
  let testName =
    domName == null || domName.length == 0 || /^\s+$/.test(domName);
  console.log(testName);
  console.log(domName);
  if (testName == true) {
    let mensaje = document.getElementById("mensaje");
    let parrafo = document.createElement("h1");
    parrafo.innerHTML = `NO INGRESO USUARIO`;
    parrafo.style.color = "white";
    parrafo.style.fontSize = "30px";
    mensaje.appendChild(parrafo);
    return;
  } else {
    console.log("entro nombre");
    /* let lista = document.getElementById("mensaje");
    lista.removeChild(lista.lastChild); */
  }
  console.log("Paso if de name");
  let testEmail =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(
      domEmail
    );
  console.log(testEmail);
  if (testEmail == true) {
    console.log("entro email");
    /* let lista = document.getElementById("mensaje");
    lista.removeChild(lista.lastChild); */
  } else {
    let mensaje = document.getElementById("mensaje");
    let parrafo = document.createElement("h1");
    parrafo.innerHTML = `NO INGRESO EMAIL`;
    parrafo.style.color = "white";
    parrafo.style.fontSize = "30px";
    mensaje.appendChild(parrafo);
    return;
  }
  console.log("Paso por if de email");
  let testPass =
    domPass == null || domPass.length == 0 || /^\s+$/.test(domPass);
  console.log(testPass);
  if (testPass == true) {
    let mensaje = document.getElementById("mensaje");
    let parrafo = document.createElement("h1");
    parrafo.innerHTML = `NO INGRESO PASSWORD`;
    parrafo.style.color = "white";
    parrafo.style.fontSize = "30px";
    mensaje.appendChild(parrafo);
    return;
  } else {
    console.log("entro password");
    /*let lista = document.getElementById("mensaje");
    lista.removeChild(lista.lastChild);*/
  }

  //TEXTO DE CARGA DE USUARIO
  let mensaje = document.getElementById("bienvenida");
  let parrafo = document.createElement("h1");
  parrafo.innerHTML = `Bienvenido ${domName}`;
  parrafo.style.color = "blue";
  parrafo.style.fontSize = "60px";
  mensaje.appendChild(parrafo);

  //CARGAR DEL USUARIO A LISTA
  console.log(user);
  allUser.push(user);

  //
  let url = "https://jsonplaceholder.typicode.com/posts";
  let infoEnviada = signup;
  let userpruea = {
    name: "joa",
    edad: "55",
  };

  $.post(infoEnviada, function (info) {
    console.log(info);
  });
  $.post(userpruea, function (info) {
    console.log(info);
  });
  //
  sessionStorage.setItem("Nombre", nameDom.value);
  sessionStorage.setItem("Email", emailDom.value);
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("date").value = "";
  document.getElementById("password").value = "";
}

//Muestra usuario y email del ultimo cargado
function nuevoUsuario() {
  console.log(allUser);
  let nombre = sessionStorage.getItem("Nombre");
  let correo = sessionStorage.getItem("Email");
  let sessionUser = new users(nombre, correo);
  NameAndEmail.push(sessionUser);
  console.log(NameAndEmail);
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
let NameAndEmail = [];

let botonRegistrase = document.getElementById("registrarse");
let botonNuevoUsuario = document.getElementById("nuevoUsuario");
botonRegistrase.addEventListener("click", altaUsuarios);
botonNuevoUsuario.addEventListener("click", nuevoUsuario);
