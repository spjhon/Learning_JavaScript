/*
Ejemplos de
tipos de datos en JavaScript
*/

//Tipo de dato string//
var nombre = "Carlos";
console.log(nombre);

nombre = 2000
console.log(nombre);
console.log(typeof nombre);

//Tipo de dato numerico//
var numero = 1000;
console.log(numero);

//Tipo de dato object, creo que esto es un diccionario en python//
var objeto = {
    nombre : "Juan",
    apellido : "Perez",
    telefono : "555542369"
}
 console.log(objeto);

 //Tipo de dato boolean (True, False)//
 var bandera = true;
console.log(bandera);
var bandera = false;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function//
function miFuncion(){};
console.log(miFuncion);
console.log(typeof miFuncion);

//Tipo de dato Symbol//
//Se utiliza para una variable unica//
var simbolo = Symbol("mi simbolo");
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una function//
class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(Persona);
console.log(typeof Persona);

//Tipo de dato undefined//
var x;
console.log(x);
console.log(typeof x);
//Tambien se puede definir su valor explicitamente//
x = undefined;


//null = aucencia de valor//
var y = null;
console.log(y);
console.log(typeof y);

