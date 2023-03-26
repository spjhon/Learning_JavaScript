'use strict'
//aqui hay hoisting
//Esto es una funcion normal
miFuncion();

let miFuncion = function (){
    console.log('Saludos');
}


//OJO lo mas comun es que se utilice const para no tener la habilidad de cambiar la variable que
//contiene la funcion
const miFuncionFlecha = () => {
    console.log('Saludos desde la funcion flecha');
} //OJO con las funciones flechas no se aplica el hoisting

miFuncionFlecha();

//Definicion de la funcion en la misma linea
//const miFuncionFlecha2 = () => console.log('Saludos desde funcion flecha'); 

const saludar = () => {return 'saludos desde funcion flecha una sola linea'};
//tambien se puede escribir asi, solo si se regresa una linea o string
const saludar2 = () => 'saludos desde funcion flecha una sola linea';
console.log(saludar());

//Si es un objeto, la cosa cambia, hay que colocar los parentesis
const regresaObjeto = () => ({nombre: 'Juan'});
console.log(regresaObjeto());

//ahora con parametros
const funcionesConParametros = (parametro) => console.log(parametro);//Si es un solo parametro se pueden omitir el parentesis
funcionesConParametros('saludos desde funcion con parametros');

//Otro ejemplo de la forma clasica y la forma simplificada
//Forma larga
const funcionConVariosParametros = (op1, op2) => {
    let resultado = op1 + op2;
    return `Resultado: ${resultado}`;
}
console.log(funcionConVariosParametros(3,5));

//Forma corta
const funcionConVariosParametros2 = (op1, op2) => `Resultados: ${op1+op2}`;
console.log(funcionConVariosParametros2(3,5));


