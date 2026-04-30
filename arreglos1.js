let edadesIzquierdo = [];
let edadesDerecho = [];

function agregarEdad(){
    let valor = document.getElementById("edad").value;
    // busca el input con id="edad" y lee lo que el usuario escribe 
    let numero = parseInt(valor);
    // Convierte "12" (texto) 12 (numero)
    edadesIzquierdo.push(numero);
    //agregar ese número al final del arreglo izquierdo 
    pintarArregloIzquierda();
    // actualiza la tabla en pantalla (lo hacemos en el punto 3)
} 
function pintarArregloIzquierda(){
    let tabla = document.getElementById("tablaIzquierda");
    //busca en el HTML el elemento y lo guarda en una variable para poder usarlo después 
    tabla.innerHTML = "";
    // borra todo, esto permite redibujar desde cero y asi no se duplican las filas 
    for(let i = 0; i < edadesIzquierdo.length; i++){
        //repite esto cada vez por cada elemento del arreglo
        let fila = "<tr>";
        //creacion de variable que construye el HTML de una fila de la tabla <tr> significa table row(fila de tabla)
        fila += "<td>" + edadesIzquierdo[i] + "</td>";
        //+= significa " agrega esto a lo que ya tenia" aquí añadimos una celda con el número. si i ¡, esto pone <td>12</td>
        fila += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i +")'>Eliminar</button></td>";
        //añadimos un boton eliminar, así en onclick sabe que fila eliminar 
        fila += "<td><button class='btn-mover' onclick='moverHaciaDerecha(" + i + ")'>➜</button></td>";
        //añadimos el boton de mover
        fila += "</tr>";
        //cerramos la fila
        tabla.innerHTML += fila;
        //Tomamos la fila que construimos y la pegamos dentro de la tabla en el HTML
    }
}
function eliminarIzquierdo(indice){
    edadesIzquierdo.splice(indice, 1);
    pintarArregloIzquierda();
}
function pintarArregloDerecha(){
    let tabla = document.getElementById("tablaDerecha");
    tabla.innerHTML = "";

    for(let i = 0; i < edadesDerecho.length; i++){
        let fila = "<tr>";
        fila += "<td><button class='btn-mover' onclick='moverHaciaIzquierda(" + i + ")'>⬅</button></td>";
        fila += "<td>" + edadesDerecho[i] + "</td>";
        fila += "<td><button class='btn-eliminar' onclick='eliminarDerecha(" + i + ")'>Eliminar</button></td>";
        fila += "</tr>";
        tabla.innerHTML += fila;
    }
}

function eliminarDerecho(indice){
    edadesDerecho.splice(indice, 1);
    pintarArregloDerecha();
}
