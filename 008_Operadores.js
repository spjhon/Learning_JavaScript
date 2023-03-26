//OPERADORES EN JAVASCRIPT

let a = 3, b = 2;
let z = a + b;
console.log("Resultado de la suma: " + z);

z = a - b;
console.log("Resultado de la resta: " + z);

z = a * b;
console.log("Resultado de la resta: " + z);

z = a / b;
console.log("Resultado de la division: " + z);

z = a % b;
console.log("Resultado del modulo de la operacion o residuo" + z);

z = a ** b;
//otra forma de agregar un exponente es con math
//El primer parametro es la base y el segundo el exponente
let z2 = Math.pow(3, 2);
console.log(z2);
console.log("Resultado del exponenete o exponencial" + z);


//INCREMENTOS
a = 3, b = 2;
//Incremento
//Pre-Incremento (el operador ++ antes de la variable)
z = ++a; //el a tambien se incrementa
console.log(z);
//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(z);

b = 0
b++;
console.log(b);

b = 0
++b;
console.log(b);

//lo mismo con el decremento

//PRECEDENCIA DE OPERADORES
a = 3, b = 2;
let c = 1;

z = a * (b + c);
console.log(z);

//HAY UNA TABLA QUE DICE QUE LLEVA PRIORIDAD SOBRE QUE PARA LAS OPERACIONES

//OPERADORES DE ASIGNACION
let y = 1;

//Operador de asignacion compuesto
a = 0;
a += 1;
console.log(a);

/*
*=
/=
%=
*/


//OPERADORES DE COMPARACION//
a = 3, b = 2;
let t = "3";

//aqui se esta preguntando si a es igual a b
//Aqui los vale si es numero o cadena
let q = a == t;
console.log(q);

//ahora de manera estricta
//Este lo que haces es revizar el valor y los tipos tambien
//Como no es el mismo tipo entonces falso
q = a === t;
console.log(q);

//Operador DISTINTO, aqui tambien aplica lo del tipo con !==
q = a != b;
console.log(q);

//OPERADORES RELACIONALES
// es el mayor que o menor que
a = 1, b = 2;
let m = a <= b;
console.log(m);

//Operador AND &&, se va a utilizar un ejemplo de rango
let k = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax){
    console.log("Dentro de rango");
} 
else{
    console.log("Fuera de rango");
}

//Operador OR ||, pregutnar si un padre puede ir al juego del hijo si se cumple una U otra condicion
let vacaciones = false, diaDescanso = false;

if (vacaciones || diaDescanso){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre esta ocupado");
}

//Operador ternario, se le dice ternario ya que utiliza tres condiciones

let resultado = ( 3>2 ) ? "verdadero" : "falso";
console.log(resultado);

let numero = 9;
// vamos a preguntar si este numero es par o impar
resultado = (numero % 2 == 0) ? "Es par" : "Es impar";
console.log(resultado);

// Convertir de string a numero
let miNumero = "20";
//console.log(typeof miNumero);
let edad = Number (miNumero);
console.log(typeof edad);
if (edad >= 18){
    console.log("Puede votar")
}
else{
    console.log("Muy joven para votar")
}

resultado = (edad >= 18) ? "Puede votar" : "No puede votar";
console.log(resultado);

//Como verificar si una variable efectivamente tiene un numero NaN, not a number
// funcion isNaN, que significa "es un numero?"

if (isNaN(edad)){
    console.log("No es un numero");
}
else{
    if (edad >= 18){
        console.log("Puede votar")
    }
    else{
        console.log("Muy joven para votar")
    }
}


