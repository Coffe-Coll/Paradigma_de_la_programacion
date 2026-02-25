let nombre = "David";
let edad = "16";
let apellidos = "Coll";
let numero = 5;

function sumar(a, b) {
    return a + b;
}

function restar (a, b) {
    let operacion = a - b;
    return operacion;
}


console.log ("El resultado de la operacion es: " + sumar(numero, edad));
let ResultadoResta = restar(5, 7);

console.log ("ResultadoResta: " + ResultadoResta);
console.log("Nombre completo: " + nombre + " " + apellidos + " , Edad: " + edad);