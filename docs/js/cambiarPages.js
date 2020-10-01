var identificadores = [
    "principal",
    "hombre_casual",
    "hombre_botas",
    "hombre_castellanos",
    "hombre_fiesta",
    "mujer_tacon",
    "mujer_plano",
    "mujer_fiesta",
    "ninos_colegial",
    "ninos_otros",
    "outlet",
];

var direccionPages = [
    "./pages/principal.html",
    "./pages/hombre_casual.html",
    "./pages/hombre_botas.html",
    "./pages/hombre_castellanos.html",
    "./pages/hombre_fiesta.html",
    "./pages/mujer_tacon.html", 
    "./pages/mujer_plano.html",
    "./pages/mujer_fiesta.html",
    "./pages/ninos_colegial.html",
    "./pages/ninos_otros.html",
    "./pages/outlet.html"

];

function cambia_enlace() {
    var nodoActivo = document.activeElement.id;
    for (var i = 0; i < identificadores.length; i++) {
        if (nodoActivo == identificadores[i]) {
            document.getElementById('enlace').src = direccionPages[i];
        }
    }
    //alert(nodoActivo);

}

// function cambia_enlace1() {
//     document.getElementById('enlace').src = "./pages/hombre_casual.html";
// }

// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }
// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }
// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }
// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }
// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }
// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }
// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }
// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }
// function cambia_enlace1() {
//     document.getElementById('enlace').src="./pages/casual.html";
// }