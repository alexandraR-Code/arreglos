let arreglosIzquierda = [];
let arreglosDerecha = [];

function agregarEdad(){
    let cmpEdad;
    let edad;
    cmpEdad = document.getElementById("edad");
    edad = parseInt("cmpEdad");

    arreglosIzquierda.push(edad);
    pintarArregloIzquierdo();
}