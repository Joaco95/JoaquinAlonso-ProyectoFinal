//API CLIMA
let url = navigator.geolocation.getCurrentPosition(informa);
function informa(posicion) {
  let lati = posicion.coords.latitude;
  let long = posicion.coords.longitude;
  let clima = `http://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${long}&appid=d3742193cd47d81bc403947b136a9ada`;
  $.get(clima, function (info) {
    console.log(info);
    console.log(info.name);
    let city = info.name;
    let temperatura = info.main.temp_max;
    let gradosCenti = temperatura - 273.15;
    let agregarMensaje = `<h3>${city}</h3>
      <h3>${gradosCenti}°C</h3> `;
    $("#welcome").append(agregarMensaje);
  });
}

//API CHUCK NORRIS
function randomFact() {
  let xmlhttp = new XMLHttpRequest();
  let url = "https://api.chucknorris.io/jokes/random";
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let json = JSON.parse(this.responseText);
      parseJson(json);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
function parseJson(json) {
  let fact = "<b>" + json["value"] + "</b>";
  document.getElementById("chuck").innerHTML = fact;
}
document.getElementById("logo").addEventListener("click", function () {
  randomFact();
});

randomFact();

//Cambio de imagenes aleatorias
window.onload = choosePic;

let image = new Array(
  "../img/1.jpg",
  "../img/2.jpg",
  "../img/3.jpg",
  "../img/4.jpg"
);

function choosePic() {
  let randomNum = Math.floor(Math.random() * image.length);
  document.getElementById("imageChuck").src = image[randomNum];
}

//Cambio de color de fondo
$("#color").on("click", function () {
  console.log("click");
  $("#bodyHome").css("background-color", "#fbab7e");
  $("#bodyHome").css(
    "background-image",
    "linear-gradient(62deg, #fbab7e 0%, #f7ce68 100%)"
  );
});
