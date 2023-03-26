//Una funcion es un codigo reutilizable y se puede llamar cuantas veces necesite
//Declaracion de una funcion
function miFuncion(a, b){
    console.log("Suma: " + (a+b));
}

//Se llama o ejecuta la funcion
miFuncion(3, 5);

//LAS FUNCIONES SE DEFINEN ANTES O PRIEMRO, aunque esto lo hace javascript internamente

//Palabra return en las funciones
function miFuncion2(a, b){
    return (a+b);
}
console.log(miFuncion2(4,5));

//Funciones de tipo expresion
let x = function(a, b){
    return (a + b)
};

resultado = x(1, 2);
console.log(resultado);

//Funciones de tipo selfinvoking
//Funciones que se llaman a si mismas

(function (a, b){
    console.log('Ejecutando la funcion self-invoking: ' + (a + b));
})(3, 4);  //No es reutilizable

//Funciones como objetos
console.log(typeof miFuncion);

function miFuncion(a, b){
    console.log(arguments.length);
    return (a + b);
}

//Funcion o metodo es lo mismo, las fucniones se pueden definir como objeto con metodos y toda la cosa
let miFuncionTexto = miFuncion.toString();
console.log (miFuncionTexto);

//Funciones flecha
//Se introdujeron desde la version 6

const sumarFuncionTipoFlecha = (a, b) => a + b; //Esto es equivalente a la funcion tipo exprecion

resultado = sumarFuncionTipoFlecha(1,3);
console.log(resultado);


