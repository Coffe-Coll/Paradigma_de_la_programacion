function Suma(x) {
    let accion = x + 5;
    return accion;
};

console.log(Suma(7));

function Dividicion(x) {
    let accion = x/5;
    return accion;
};

console.log(Dividicion(25));


let resultado = 0;
function SumarPrecios(a, b) {
    return resultado = resultado + a * b;
};

console.log(SumarPrecios(4, 6));
console.log(SumarPrecios(2, 3));
console.log(SumarPrecios(5, 8));


let palabra = "";
function UniondePalabras(a) {
    return palabra = palabra + a; 
};

console.log(UniondePalabras("Hola Mundo"));
console.log(UniondePalabras("Bendiones pa la familia"));


function Multiplicar(a) {
    return a * a;
};

function SumaDeLaMultiplicaion(num1, num2) {
    return Multiplicar(num1) + Multiplicar(num2);
};

console.log(SumaDeLaMultiplicaion(3, 4));