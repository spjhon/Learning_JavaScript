let numero = 3;
let numeroTexto = 'Valor Desconocido';
switch(numero){
    case 1:
        numeroTexto = 'Numero uno';
        break;
    case 2:
        numeroTexto = 'Numero dos';
        break;
    case 3:
        numeroTexto = 'Numero tres';
        break;
    case 4:
        numeroTexto = 'Numero Cuatro';
        break;
    default:
        numeroTexto = 'Caso no encontrado';
        break;
}

console.log(numeroTexto);

//Ejercicio calculo estacion del ano pero esta vez con switch

let mes = 120;
let estacion = 'Estacion desconocida';

//De esta forma se pueden agrupar los casos
switch(mes){
    case 1: case 2: case 12:
        estacion = 'Invienro';
        break;
    case 3: case 4: case 5:
        estacion = 'Primavera';
        break;
    case 6: case 7: case 8:
        estacion = 'Verano';
        break;
    case 9: case 10: case 11:
        estacion = 'Otono';
        break;
    default:
        estacion = 'Valor incorrecto';
}

console.log(estacion);
