// Es una forma simplificada de utilizar las promesas
//Si se coloca antes de la definicion de un metodo, este metodo se ve obligado a regresar una promesa

//asyn significa que una funcion va a regresar una promesa
async function miFuncionConPromesa (){
    //Entonces como esta funcion funcinoa como promesa entonces devuelve un .then y un .catch
    return 'saludos con promesa y async';
}

//Ojo, como es una funcion normal y no un objeto pues debe de llevar parentesis
//ya que se esta llamando la funcion mas no ejecutando un metodo
miFuncionConPromesa().then(valorQueVieneDeLaPromesa => console.log(valorQueVieneDeLaPromesa));


//AWAIT CON ASYNC CON PROMESAS
//PALABRA RESERVADA AWAIT

//async con await
async function funcionConPromesaYAwait(){
    // dentro de la funcion el return por defecto es el resolver positivo de la promesa
    let miPromesa = new Promise(resolver => {
        resolver('Promesa resuelta positiva con await');
    });
 
    console.log(`Impresion del parametro recivido como si fuera un .then -- ${await miPromesa}`);
}

//Ahora ya no se utiliza por separado sino que todo se va por aca.
funcionConPromesaYAwait();

//AHORA TODO JUNTO, SETTIME OUT, CON ASYNC, PORMESAS Y AWAIT

async function funcionConPromesaAwaitYTimeOut(){
    let miPromesa = new Promise(resolver =>{
        setTimeout(() => resolver('promesa con awayt y timeout'), 3000);
    });
    console.log(await miPromesa);
    //OJO con el await no se hace mucha sincronia que digamos
    //OJO await solo sirve dentro de async
}

funcionConPromesaAwaitYTimeOut();