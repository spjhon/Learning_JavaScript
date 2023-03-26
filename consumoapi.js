

//Consumo de api con async y fetch, el fetch es para pedir informacion de una url o una api expuesta
async function consumoApi(){
    const response = await fetch('http://api.plos.org/search?q=title:"Drosophila" AND body:"RNA"&fl=id,abstract');
    //tambien se puede con .json();
    const json = await response.text();
    console.log(JSON.parse(json));
}

consumoApi();


//Continuacino de la sitaxis completa del fetch con el then

async function consumoApi2(){
    await fetch('http://api.plos.org/search?q=title:"Drosophila" AND body:"RNA"&fl=id,abstract')
    //con el .then es para buscar informacion especifica dela api consumida lo que significa algo asi como despues, osea que devuelve una promesa para saber si ha tenido exito o no
    .then(response => response.json())
    .then(json=>console.log(json))
    .catch(error=>console.log('Solicitud Fallida', error))
}

consumoApi2();
