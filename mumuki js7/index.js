// Necesitamos un programa que pida una cantidad de minutos con el siguiente mensaje:

// Ingresá una cantidad de minutos.
// Con esta información, el programa deberá mostrar el resultado de la conversión en segundos
//  mediante el mensaje: El resultado de la conversión de {minutos} minutos a segundos es: {resultado}


let minutos = prompt ("Ingresá una cantidad de minutos.")

let resultado = minutos / 60

alert ("El resultado de la conversión de " + minutos + " minutos a segundos es: " + resultado);