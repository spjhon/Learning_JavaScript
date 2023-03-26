let condicion = true;
console.log(typeof condicion);

if(condicion){
    console.log("condicion verdadera")
}
else{
    console.log("condicion falsa")
}
//si se tiene una sola linea de codigo entonces se pueden eliminar los corchetes

//EJEMPLO
let numero = 3;

if (numero == 1){
    console.log("Numero uno")
}
else if(numero == 2){
    console.log("Numero dos")
}
else if(numero == 3){
    console.log("Numero tres")
}
else if(numero == 4){
    console.log("Numero cuatro")
}
else{
    console.log("Numero desconocido")
}

//Ejercicio calculo de estacion del ano
let mes = 4;
let estacion;

if (mes == 1 || mes == 2 || mes == 12){
    estacion = "Invierno";
}

else if (mes == 3 || mes == 4 || mes == 5){
    estacion = "Primavera";
}
else if (mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
}
else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "Otono";
}
else{
    estacion = "Valor incorrecto";
}

console.log(estacion);

//enviar mensaje dependiendo de la hora del dia
/*
6am-11pm - Buenos dias
12pm-18pm - Buenas Tardes
19pm-24pm - Buenas noches
0am-6am - Durmiendo
*/

let horaDia = 9;
let mensaje;

if(horaDia >= 6 && horaDia <= 11){
    mensaje = "Buenos Dias";
}
else if (horaDia >= 12 && horaDia <= 18){
    mensaje = "Buenas Tardes";
}
else if (horaDia >= 19 && horaDia <= 24){
    mensaje = "Buenas Noches";
}
else if (horaDia >= 0 && horaDia < 6){
    mensaje = "Durmiendo";
}
console.log(mensaje);