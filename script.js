function entrar() {

let usuario = document.getElementById("usuario").value;
let clave = document.getElementById("clave").value;

if (usuario === "765324" && clave === "David123") {

document.getElementById("login").style.display = "none";
document.getElementById("panel").style.display = "block";

} else {

alert("Usuario o contraseña incorrectos");

}

}
