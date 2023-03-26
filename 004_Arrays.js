//Los arrays in javascript son considerados objetos u objects//
var autos = ['BMW', 'Audi', 'Volvo'];
console.log(autos);
console.log(typeof autos);

//Asi asignamos una cadena vacia//
var z = '';
console.log(z);
console.log(typeof z);

//otra forma de recorrer arrays
// son tres parametros que pueden llevar cualquier nombre, el primero es el item, el segundo es el index y el tercero es todo el array
let y = '';
autos.forEach(function (index, i, a){
    console.log(i);
    y = index[0];
});

console.log(y);



