//Funciones callback es una funcion que tiene como parametros otra funcion
miFuncion1();
miFuncion2();
//Aqui se aprecia el hoisting

function miFuncion1(){
    console.log('funcion1');

}

function miFuncion2(){
    console.log('funcion2');
}


//Ahora las callback

function imprimir(parametro){
    console.log(`este es desde la primera variacion: ${parametro}`);
}

let varImpresion = function imprimir(parametro){
    console.log(`esto es desde una variante de impresion: ${parametro}`);
}

function sumar(op1, op2, parametroCallBack){
    let res = op1 + op2;
    parametroCallBack(`Resultado: ${res}`);
}

sumar(5,3,imprimir);
sumar(4,2,varImpresion);

//Los callback son utilizados mas que todo para proceso ASYNCRONOS
//con el uso de SETTIMEOUT

function miFuncionCallback (){
    console.log('saludo asincrono desuepues de 3 segundos')
}

setTimeout(miFuncionCallback, 3000); //el 3000 son milisegundos osea 3 segundos

//Otra forma de expresarlo
setTimeout(function(){console.log('saludo asincrono 2 despues de 5 segundos')}, 5000);

//Ahora con funciones flechas

setTimeout( () => console.log('Saludo asincrono 3 despues de 6 segundos'), 6000);

