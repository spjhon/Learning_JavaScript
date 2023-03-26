//CONCATENACION//

var nombre = 'Juan';
var apellido = 'Perez';

var nombreCompleto = nombre + apellido;
console.log(nombreCompleto);

var nombreCompleto2 = 'Carlos' + ' ' + 'Lara'
console.log(nombreCompleto2);

var x = nombre + 219 + 4 + 8;
console.log(x);

//Las expreciones en javascript lo lee de izquierda a derecha
//osea que si no se define pues de va a ir conviritiendo
//osea contexto string o contexto numero
//LO QUE PRIMERO ENCUENTRE o hayan parentesis.

x = nombre + (2+4);
console.log(x);

x = 2 + 4 + nombre;
console.log(x);