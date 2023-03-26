//Es para LLAMAR metodos que se encuentran en unos objetos desde otros objetos
let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'lara',
}

//uso de call

console.log(persona1.nombreCompleto());
console.log(persona1.nombreCompleto.call(persona2));

//PASO DE ARGUMENTOS A CALL
let persona3 = {
    nombre: 'cristiano',
    apellido: 'ronaldo',
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ' ' + tel;
    }
}
console.log(persona3.nombreCompleto.call(persona2, 'ingeniero', '98754321'));
console.log(persona3.nombreCompleto.call(persona1, 'lic', '123458'));


//METODO APPLY EN JAVASCRIPT

let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//la diferencia es que se pasa un arreglo con los argumentos
let arreglo = ['Inge', '55789'];
console.log(persona3.nombreCompleto.apply(persona3, arreglo));
