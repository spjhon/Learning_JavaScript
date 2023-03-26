//OBJETOS EN JAVASCRIPT

//La diferencia entre un primitivo (una variable con un valor) y un objeto
//es que el objeto posee atributos(propiedades) y metodos

let x = 10;

//Aca solo hay atributos, tambien se le pueden agregar metodos
let persona = {
    nombre: 'Juan',
    apellido: 'Aristizabal',
    email: 'jp@gmail.com',
    edad: 28,
    //Se va a agregar un metodo para imprimir nombre junto a apellido
    nombreCompleto: function(){
        //Aqui se va a utilizar los THIS, el mexicano lo llama un apuntador
        return this.nombre + " " + this.apellido;
    },
}

console.log(x);
console.log(persona.apellido);
console.log(persona.nombre);
console.log(persona.nombreCompleto());

//Creacion de objetos
//Con la palabra reservada new

let persona2 = new Object(); //Aqui se crea un objeto en memoria vacio y despues de la primera linea
//se le agrega las propiedades o atributos o funciones
persona2.nombre = 'Carlos';
persona2.apellido = 'Leal';
persona2.direccion = 'Saturno 15';
persona2.tel = "12345679";

console.log(persona2.tel);

//Acceder a las propiedades de los objetos
console.log(persona['nombre']); //Otra forma de acceder a la propiedad del objeto

//Utilizando un ciclo for especial se pueden recorrer las propiedades del objeto
// FOR IN

for (propiedad in persona){
    console.log(propiedad);
    //ahora para ingresar al valor de cada propiedad
    console.log(persona[propiedad]);
}

// AGREGAR O ELIMINAR PROPIEDADES DE LOS OBJETOS
persona.tel = '123456789';

for (propiedad in persona){
    console.log(propiedad);
    //ahora para ingresar al valor de cada propiedad
    console.log(persona[propiedad]);
}
//para eliminar se utiliza la palabra reservada delete
delete persona.tel;
for (propiedad in persona){
    console.log(propiedad);
    //ahora para ingresar al valor de cada propiedad
    console.log(persona[propiedad]);
}

//FORMAS DE IMPRIMIR OBJETOS EN JAVASCRIPT
// Forma mas sencilla con concatenacion
console.log(persona.nombre + ' ' + persona.apellido);

//Otra forma es con for in
for (propiedad in persona){
    console.log(persona[propiedad]);
}

//Otra forma es utilizando la sintaxis de object.values
let personaArray = Object.values(persona);
console.log(personaArray);


//Se puede utilizar una cadena
let personaString = JSON.stringify(persona);
console.log(personaString);


//METODO GET y SET EN LOS OBJETOS Y SON LAS MEJORES PRACTICAS
console.log(persona.nombreCompleto());

let persona3 = {
    nombre: 'Juan',
    apellido: 'Aristizabal',
    email: 'jp@gmail.com',
    edad: 28,
    idioma: 'mx',
    get lang (){
        return this.idioma.toUpperCase();
    },

    set lang (lang){
        return this.idioma = lang;
    },

    //el get lo que haces es simplificar la creacionde la funcion
    get nombreCompleto(){
        //Aqui se va a utilizar los THIS, el mexicano lo llama un apuntador
        return this.nombre + " " + this.apellido;
    },
}
console.log(persona3.nombreCompleto);

//Observemos unos ejercicos de validaciones con medio del set y combinarlo con el set
console.log(persona3.lang);
persona3.lang = 'dkdk'; //Aqui lo que se esta haciendo es llamar el set lang (lo reconoce gracisa a los =) y pasa parametros de forma quese pueda cambiar atributos internos
console.log(persona3.idioma);

//METODO CONSTRUCTOR
//Es mejor y buena practica crear constructores para reutilizar codigo
//Se utiliza en new
//Funcion constructor de objetos tipo persona
//osea que los atributos van en los parametros
function Persona(nombre = 'SinNombre', apellido = 'SinApellido', email = 'SinEmail'){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Se pueden agregar metodos aca para abajo
}

//Se pueden crear varios objetos con estas mismas variables

let padre = new Persona('Juan', 'Perez', 'spjhon@gmail.com');
console.log(padre);

let madre = new Persona('Maria', 'Velez', 'maria@gmail.com');
console.log(madre);

//Metodo constructor con metodos
function Persona2(nombre = 'SinNombre', apellido = 'SinApellido', email = 'SinEmail'){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
    //ahora se puede utilizar en cualquier lado   
}

padre = new Persona2();
console.log(padre.nombreCompleto());

//OTRAS FORMAS DE CREAR OBJETOS EN JAVASCRIPT
let miObjeto = new Object();
//la mejor forma es
let miObjeto2 = {};

let miCadena1 = new String('Hola');
//la mejor forma es
let miCadena2 = 'Hola';

let miNumero = new Number(1);
//la mejor forma es
let miNumero2 = 1;

// y a estos se les llama primitivos

let miBoolean = new Boolean(false);
//la mejor forma
miBoolean = false;

let miArreglo1 = new Array();
//la mejor forma es
let miArregleo2 = [];

let miFuncion = new Function();
//la mejor forma es
let miFuncion2 = function(){

}