let edadesIzquierdo = [];
let edadesDerecho = [];

function agregarEdad(){
    let valor = document.getElementById("edad").value;
    // busca el input con id="edad" y lee lo que el usuario escribe 
    let numero = parseInt(valor);
    // Convierte "12" (texto) 12 (numero)
    edadesIzquierdo.push(valor);
    //agregar ese número al final del arreglo izquierdo 
    pintarArregloIzquierda();
    // actualiza la tabla en pantalla (lo hacemos en el punto 3)
} 