console.log('Listado de personas');

//vamos a declarar un arreglo afuera de la funcion para llamarlo desde cualquier funcion

const personas = [  
    new Persona('Juan', 'Perez'),
    new Persona('Karla', 'Lara'),
    new Persona('Maria', 'Juarez')
];

function mostrarPersonas(){
    console.log('Mostrar personas...');
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML = texto;
};

function agregarPersona(){
    const forma = document.forms["forma"]; //Se esta recuperando el formulario y se agrega al arreglo
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];
    if (nombre.value != '' && apellido.value != ''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    }
    else{
        console.log('No hay informacion que agregar');
    };
    
};