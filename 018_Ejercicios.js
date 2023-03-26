//Ejercicio de sumar todos los argumentos

let resultado = sumarTodo (5, 4, 13, 10, 9, 6);
console.log(resultado);

//Se va a utilizar arugmentos para obtener toda la informacion y lograr iterar
function sumarTodo(){
    let suma = 0;
    for (let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
        suma += arguments[i];
    }
    return suma;
}

//Paso por valor y paso por referencia

//Paso por valor cuando se utilizan tipos no numericos en los argumentos
let x = 10;  //Esto se le conoce como valor primitivo
//Un objeto tiene atributos y metodos

function cambiarValor (a){
    a = 20;
    return a;
}
//Paso por valor
cambiarValor(x);//10
console.log(x);

function cambiarValor2 (a){
    a = 20+a;
    return a;
}
//Paso por valor
cambiarValor2(x);//10
console.log(x);

//Este no es paso por valor
let y = cambiarValor2(x);
console.log(y);

//Este no es paso por valor
console.log(cambiarValor2(x));

//PASO POR REFERENCIA Y OBJETOS
//Creamos un objeto y se le pueden asociar propiedades y metodos
//La buena practica es definir una variable tipo constante y se le referencia un objeto

//Esto es un objeto, nombre y apellido son atributos y modificar desde otro metodo esos atributos
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}

//Paso por referencia
console.log(persona);
cambiarValorObjeto (persona);
console.log(persona);