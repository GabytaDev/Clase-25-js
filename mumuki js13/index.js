// Variables, datos  y operadores 
//Necesitamos un programa que pida ingresar la distancia de un recorrido, 
// mediante el mensaje:

// Ingresá la distancia del recorrido
// Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar 
// el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente
//  mensaje: Para la distancia {distancia} km en bicicleta el tiempo de viaje 
//  es {resultadoEnBicicleta} hora/s, a pie {resultadoAPie} hora/s y en auto {resultadoEnAuto} 
//  hora/s

// Las velocidades de los medio de transporte son:

// a pie : 5 km/ hs
// bicicleta : 10 km/ hs
// auto : 50 km/hs

let distancia = prompt("Ingresá la distancia del recorrido")

let resultadoEnBicicleta = (distancia / 10);
let resultadoAPie = (distancia / 5);
let resultadoEnAuto = (distancia / 50);

alert ("Para la distancia " + distancia + " km en bicicleta el tiempo de viaje es " + resultadoEnBicicleta + " hora/s, a pie " + resultadoAPie + " hora/s y en auto " + resultadoEnAuto + "hora/s");
