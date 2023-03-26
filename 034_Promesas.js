//Las promesas es un codigo que tiene varios estados
//Se va a utilizar funciones flecha y callback

//Se lanza un codigo si la promesa se resuelve correctamente (.then())
//Y si hay problemas se manda a llamar el caso de rejected (.catch())

//Sintaxis basica

//Esta promesa va a tener dos parametros que son funciones callback, cuando sale bueno y cuando sale malo
let miPromesa = new Promise((resolvedd, rejectedd) => {
    //En caso de que sea exitoso con una simulacion de true y false
    let expresion = true;
    let z = 9;
    let t = 22;
    if (expresion)
        resolvedd(`Exito: ${expresion}`); //aqui se esta llamando al .then que entra a la promesa como callback
    else
        rejectedd('Se produjo un error');
});

//para llamarla
//Se reciven dos argumentos que son funciones de tipo flecha
miPromesa
    .then((valor) => {
    let a = 8;
    console.log(`${valor} ${a}`)
    }, //ojo con esto ya que esta sumando un true con el valor de a
    
    error => console.log(error))

//Ahora con catch, es lo mismo de arriba pero con otra sintaxis y creo que es mejor esta
miPromesa
.then(valor => console.log(valor))
.catch(error=>console.log(error));

//Mandar a llamar la funcion settimeout pero llamando promesas

//No es obligatorio manejar los dos argumentos
let promesa = new Promise((resolver) => {
    console.log('Inicio Promesa');
    setTimeout( () => resolver('Mensaje a pasar como parametro'), 3000);
    console.log('Fin Promesa');
    //Como se puede ver en el output, a pesar de que el codigo tiene un orden, el que tiene los 3000 va a eserar los 3000, el resto NO
})

promesa.then( (parametroQueVieneDelNewPromise) => console.log(parametroQueVieneDelNewPromise));

//Ejemplo de una promesa en una funcion

let userLeft = true;
let userWatchingCatMeme = true;

function watchTutorialPromise() {
    return new Promise ((resolve, rejected) => {
        if (userLeft){
            rejected({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme){
            rejected({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve ('Thumbs up and Subscribe')
        }
    })
}

 watchTutorialPromise()
 .then((message) => {
  console.log('Success: ' + message)
 })
 .catch((error) => console.log(error.name + ' ' + error.message))