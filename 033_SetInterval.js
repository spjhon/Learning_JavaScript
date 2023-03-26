//Esta funcion lo que hace es llamar la funcion cada cierto tiempo las veces que sea necesario

let reloj = () => {
    //Vamos a simular un reloj
    let fecha = new Date();
    console.log(fecha);
    console.log(`${(fecha.getHours())+1}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 3000); //Esto quiere decir que se va a ejecutar cada 3000 milisegundos
