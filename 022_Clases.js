//Un objeto es una instancia de una clase
//UNA CLASE TIENE

//NOMBRE DE LA CLASE

//ATRIBUTOS
//las variables utilizadas, estos van con - en el UML

//OPERACIONES O METODOS
//estos son los metodos para obtener cosas o ejecutar funciones
//y hacer operaciones en general y se utiliza un + en los UML
//aqui tambien van los set y get para optener info o modificar valores

//la idea es que cada objeto tenga sus propios valores y el resto es compartido

//los nombres de clases deben empezar por mayuscula
class Persona{
    //Se le agrega constructor
    constructor (nombre, apellido){
        //metodos get o set para modificar o leer los atributos
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
}

//Esto es una instancia de clase
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);
let persona2 = new Persona('carlos', 'lara');
console.log(persona2);

console.log(persona1.nombre);

persona1.nombre = 'nuevo valor'; //aca se esta dando un set al atributo
console.log(persona1.nombre);

//HOISTING Y CLASES EN JAVASCRIPT
//hoisting es que no se sigue el orden del codigo con las funciones
//pero con las clases esto no funciona asi
//mirar arriba para poder ver como hacer el hoisting



/////////////////////////////////////////////////////////////



//Esta es una forma de crear clases y herencias pero sin tener que utilizar los constructores
class Human{
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    name = 'Max';
    gender = 'Female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();



///////////////////////////////////////////////

const Person = (first, last, age='sin edad', id='sin Id') => {
    this.firstName = first;
    this.lastName = last;
    this.agePerson = age;
    this.idPerson = id;
}

function Personas (first, last, age='sin edad', id){
    this.firstName = first;
    this.lastName = last;
    this.agePerson = age;
    this.idPerson = id;
}

let person1 = new Personas('Jhon', 'Doe');

console.log(person1);

///////////////////////////////////////////////////////////////

//CLOSURES


const add = (function () {
    let x = 1;
  
    console.log(x);
    let counter = 0;
    return function () {counter += 1; console.log(x); return counter}
  })   ();
  
  console.log(add());
  console.log(add());
  console.log(add());
  
  
  // console.log(counter);
  
  const add2 = (function () {return 23}) ();
  
  console.log(add2);

  /////////////////////////////////////////////////////////////////


  const UserClosure = ({firstName, lastName, age, occupation }) => {
    return ({
      describeSelf : () => {
        console.log(`My name is ${firstName} ${lastName}, I am ${age} years Old and i work as a ${occupation}`);
      },
      getAge: () => age +50
    })
  }
  const zainab = UserClosure({firstName: "Zaynab", lastName: "Olagunju", age: 30, occupation: "Economist"});
  zainab.describeSelf();
  
  let x = zainab.getAge();
  
  console.log(x);
  
  
  const personasClosure = ({first, last, age, id}) => {
    return ({
      getFirst: () => first,
      print: () => {console.log(`hi, data ingresada: ${first + last + age + id}`)}
  })
  }
  
  const person144 = personasClosure({first: 'Jhon', last: 'Doe', age: 23, id: 154777});
  
  person144.print()
  console.log(person144.getFirst());
  console.log(zainab.getAge());
  
  
  const personasClosure2 = (first, last, age, id) => {
    return ({
      getFirst: () => first
    })
  }
  
  const person2 = personasClosure2('Camilo', 'Aristizabal', 43, 0000);
  
  console.log(person2.getFirst());

  ///////////////////////////////////////////////////////////////////////////


  function Ninja() {

        var feints = 0;
    
        this.getFeints = function(){ 
        return feints; 
        }; 
    
        this.feint = function(){
        feints++; 
        }; 
        
    }
   
  
    var ninja1 = new Ninja();
  
    ninja1.feint();
     
    console.log(ninja1.getFeints());
    console.log(ninja1.getFeints());
  
    ninja1.feint();
  
    console.log(ninja1.getFeints());
  
    assert(ninja1.feints === undefined, 
    "And the private data is inaccessible to us.");
    assert(ninja1.getFeints()=== 2, 
    "We're able to access the internal feint count.");
    
    var ninja2 = new Ninja(); 
  
    ninja2.feint(); 
    ninja2.feint();
  
    console.log(ninja2.getFeints());
  
    ninja2.feint();
  
    console.log(ninja2.getFeints());
    assert(ninja2.getFeints()=== 3, 
    "The second ninja object gets its own feints variable.");
  
    console.log(feints);

//////////////////////////////////////////////////////////////////////

// esta es una pregunta tiquinuela de entrevista acerca de closures y la diferencia entre el var y el let
var i = 0

for (i = 0; i<3; i++){

  const log = () => {
    console.log(i);
  }

  setTimeout(log, 100);

  log();

}

//aqui se puede apreciar mejor el closure que es solo el aprovechamiento de las caracteristicas de
//scope y las propiedades tipo objeto del lenguaje de programamcion

function outer () {
  const fish = 'fish';
  
  let count = (function () {
    let count = 0;
    return count;
  }) ();
  
  function inner(){
    count ++;
    return `${count} ${fish}`
  }

  function inner2(){
    return "este es el inner2"
  }
  return {inner, inner2}
}

const fun = outer();
console.log(fun.inner());
console.log(fun.inner());
console.log(fun.inner());
console.log(fun.inner());
console.log(fun.inner2());

///////////////////////////////////////////////////////////////////////

//el this
x = 0;
y = this;
const obj = {
  name: 'clown',
  face: "clown face",
  age: 99,
  objetoThis: this,
  hello: function(){
    console.log(this)
    console.log(this.name);
  }
}

console.log(obj.objetoThis);

obj.hello();

///////////////////////////////////////////////////////////////////////////


let test = function () {
  return this;
};

console.log(test());

const test2 = () => {
  return this;
};

console.log(test2());


/* (function () {
  console.log(this)
  return this
}) (); */

///////////////////////////////////////////////////////////////////////


class Pet {
  constructor(name) {
    this.names = name;
    this.name2 = 'otro nombre'
    this.getName = () => name;
  }
}

const cat = new Pet('Fluffy');

console.log(cat.names);
console.log(cat.getName());

const { getName } = cat;
console.log(getName()); 

const { name2 } = cat;
console.log(name2);

function myCat({ names, name2 }) {
  let newName = names
  let newName2 = name2
  return newName + " + " + newName2;
}

const xs = myCat(cat);

console.log(xs);

const y = myCat(Pet);

console.log(y)

////////////////////////////////////////////////////////

//cambiando el contexto de this
const object = {
  message: 'Hello, World!'
};

function logMessage() {
  console.log(this.message); // "Hello, World!"
}

globalThis.message = 'no se ha cambiado el this'

logMessage.bind(object)();

logMessage.call(object)


/////////////////////////////////////////////////////////


//EL THIS
/* Trying to summarize 'this' after watching this video for at least 5th time:

For fns inside Objects: 'this' refers to the object calling the function.
For fns not called by objects - Eg call back functions -    'this' refers to the global object.
For fns defined using arrow functions - 'this' simple refers to the object that is executing the arrow 
function - Irrespective of object's scope. Meaning:  if the arrow function is called from a global scope? 
'this' will refer to the global object. If the arrow function is called with in a function which belongs to 
an object?'this' will refer to the calling function's scope and in this case the object itself. */

/////////////////////////////////////////////////////////////////////////////////

globalThis.length = 0;

length = 4;


function callbackp() {
  console.log(this.length); // What is logged?
}


const object2 = {
  length: 5,
  method (callbacksss) {
    callbacksss();
    arguments[0]();
    console.log(callbacksss)
    console.log(arguments);
    console.log(arguments.length)
  }
};


object2.method(callbackp, 1, 2, 3, 4, 5, 6);

///////////////////////////////////////////////////////////////////////////////////////

//con esta tecnica de console log se puede saber mas facil de donde es el contexto de this
const numbers = {
  numberA: 5,
  numberB: 10,
  sum: function() {
    console.log(this === numbers); // => true
    const calculate = () => {
      console.log(this === numbers); // => true
      console.log(this)
      return this.numberA + this.numberB;
    }
    return calculate();
  }
};
numbers.sum();


//////////////////////////////////////////////////////
//ENCAPSULAMIENTO CON CLOSURES

function createStack() {
  const items = [];
  return {
    push(item) {
      items.push(item);
    },
    pop() {
      return items.pop();
    }
  };
}


const stack = createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop()); // => 5

console.log(stack.items); // => [10]
stack.items = [10, 100, 1000];

/////////////////////////////////////////////////////////

//mas closures
function doAddition(x) {
  return function (y){
    return x+y;
  };
};

//aqui add5 esta ejecutando doAddition y guardando la referencia
//de la otra funcion anonima
var add5 = doAddition(4);
console.log(add5(5));

//esta es una forma mas resumida de utilizar los dos 
//parametros en las dos funciones
console.log(doAddition(5)(1));

////////////////////////////////////////////////////////////

// using closures to encapsulated info and emulate constructors

const UserClosure2 = ({firstName, lastName, age, occupation }) => {
  const hiddenVariable = 'hidden variable'
  const exposedVariable = 'exposed variable'
  return ({
    getExpouseVariable: () => exposedVariable,
    describeSelf : () => {
      console.log(`My name is ${firstName} ${lastName}, I am ${age} years Old and i work as a ${occupation} in ${hiddenVariable}`);
    },
    getAge: () => console.log(age)
  })
}

const object3 = UserClosure({firstName: "Zaynab", lastName: "Olagunju", age: 30, occupation: "Economist"});

const object4 = UserClosure({firstName: "Eric", lastName: "Manhunt", age: 45, occupation: "Pilot"});


const t = object3.getExpouseVariable();
console.log(t); //exposed variable

object3.describeSelf(); // My name is Zaynab Olagunju, I am 30 years Old and i work as a Economist in hidden variable
object3.getAge(); //30

object4.describeSelf(); // My name is Eric Manhunt, I am 45 years Old and i work as a Pilot in hidden variable 
object4.getAge(); //45
