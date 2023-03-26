//HAY errores que se dejan corregir, hay otros que no

//Se utiliza la estructura try catch

"use strict"

try{
    x = 10;
    console.log('Se imprimio'); 
    //con el throw se arroja una nueva excepcion
    throw 'Mi error';
}
catch(error){
    console.log('Error en la variable...');
}
finally{
    //El finally siempre se va a ejecutar sin importar si hay catch o no y es opcional
    console.log('Termina la revicion de errores')
}

console.log('continuamos');
//de esta forma se atrapa el error y se continua con el programa


//Ejercicio

let resultado = '12';

try {
    //x = 10
    if (isNaN(resultado)) 
    throw 'No es un numero';
    else if(resultado === '') 
    throw 'Es cadena vacia';
    else if(resultado >= 0) 
    throw 'Error, mayor a 0;'
    
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally{
    console.log('Termina revicion')
}

