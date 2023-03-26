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
