//vamos a utilizar funciones flecha pero se pueden utilizar funciones clasicas

const mostrarReloj = () =>{
    //variable que va a tener la fecha del dia de hoy
    let fecha = new Date();
    //de la fecha actual vamos a extraer cada elemento que necestiamos
    let hr = formatoHora(fecha.getHours());
    let min = formatoHora(fecha.getMinutes());
    let seg = formatoHora(fecha.getSeconds());
    document.getElementById('hora').innerHTML = `${hr}:${min}:${seg}`;
    //ahora vamos a tener dos arreglos separados para poder extraer correctamente la fecha, o almenos que sea mas facil
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const dias = ['Dom', 'Lun', 'Mar', 'Mie', 'Juev', 'Vie', 'Sab'];
    let diaSemana = dias[fecha.getDay()];//Lo que regresa este getDay es un valor numerico que representa el dia
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()]
    //ahora vamos a concatenar
    let fechaTexto = `${diaSemana}, ${dia} ${mes}`;
    document.getElementById('fecha').innerHTML = fechaTexto;

    //aqui vamos a recuperar todos los css aplicados al elemento contenedor y el interruptor toggle
    document.getElementById('contenedor').classList.toggle('animar');
}



//para darle formato a los numeros
const formatoHora = (parametro) =>{
    if(parametro < 10){
        parametro = "0" + parametro;
    
    }
    return parametro;
    };

//vamos a llamar la funcion de set interval para ejecutar el codigo cada cierto tiempo
setInterval(mostrarReloj, 1000);