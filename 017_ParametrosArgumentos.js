//Diferencia entre parametros y argumentos
//Las variables que entran en una funcion se le conoce como parametros
//Los argumentos son los valores que se le asigan a los variables que entran en la funcion

//Funciones de tipo expresion
//Lo que se ve aca es como imprimir los argumentos que se encuentran guardados en los
//parametros de entrada, ahora se puede utilizar arguments que dentro de la funcion
//hace las veces de array y se le puede dar indice
//Si no se pasan argumentos, a los parametros se le pueden dar valores por default
let x = function(a = 4, b = 4){
    console.log(arguments [0]);
    console.log(arguments [1]);
    return (a + b);
};

resultado = x();
console.log(resultado);