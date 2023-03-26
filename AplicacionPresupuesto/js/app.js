
console.log('inicio de app');

//Creacion de arreglos, aqui es la logica de la aplicacion con las variables guardadas en las otras js

const ingresos = [
    new Ingreso ('Coche', 8000),
    new Ingreso ('Venta Coche', 1000)
];

const egresos = [
    new Egreso ('Renta departamento', 1000),
    new Egreso ('Ropa', 1000)
];


//Estos son los arrelgos con ejemplos de ojetos creados
//esta va a ser una funcion flecha
let cargarApp = () =>{
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

let totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos){
        totalIngreso += ingreso.valor;
    }
    return totalIngreso;
}

let totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos){
        totalEgreso += egreso.valor;
    }
    return totalEgreso;
}

let cargarCabecero = () =>{
    let presupuesto = totalIngresos() - totalEgresos();
    let porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}

//Para dar formato
const formatoMoneda = (valorACambiar) => {
    return valorACambiar.toLocaleString('en-US', {style:'currency', currency:'USD', minimumFractionDigits:2});
}

//Para dar formato porcentaje

const formatoPorcentaje = (valorAcambiar) => {
    return valorAcambiar.toLocaleString('en-US', {style: 'percent', minimumFractionDigits:2})
}

const cargarIngresos = () =>{
    let ingresosHTML = '';
    for(let ingreso of ingresos){
        //Aqui lo que vamos a hacer es que al iterar cada uno de los elementos, los vamos a meter a una funcion que va a crear en codigo html y mandarlo al front para reemplazar lo que ya hay
        ingresosHTML += crearIngresoHTML(ingreso);
    }

    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
}

const crearIngresoHTML = (ingreso) =>{
    let ingresoHTML = `
            <div class="elemento limpiarEstilos">
                <div class="elemento_descripcion">${ingreso.descripcion}</div>
                <div class="derecha limpiarEstilos">
                    <div class="elemento_valor"> + ${formatoMoneda(ingreso.valor)}</div>
                    
                    <div class="elemento_eliminar">
                        <button class="elemento_eliminar--btn">
                            <ion-icon name="close-outline"
                            onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
                        </button>
                    </div>
                </div>
            </div>

    `;
    return ingresoHTML;
}

const eliminarIngreso = (id) =>{
    //Aqui vamos a utilizar una funcion flecha con la herramienta findIndex colocando como parametro el index a buscar, donde dice ingreso puede ser cualquier nombre
    let indiceEliminar = ingresos.findIndex(ingreso => ingreso.id === id);
    //para eliminar me imagino todo el div se utiliza el splice, el segundo parametro dice cuantos elementos va a eliminar a partir del indice que encuentre
    ingresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarIngresos();
}

const cargarEgresos = () =>{
    let egresosHTML = '';
    for (let egreso of egresos){
        egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById('lista-egresos').innerHTML = egresosHTML;
}

const crearEgresoHTML = (egreso) =>{
    let egresoHTML = `
                <div class="elemento limpiarEstilos">
                    <div class="elemento_descripcion">${egreso.descripcion}</div>
                    <div class="derecha limpiarEstilos">
                        <div class="elemento_valor"> - ${formatoMoneda(egreso.valor)}</div>
                        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor/totalEgresos())}</div>
                        <div class="elemento_eliminar">
                            <button class="elemento_eliminar--btn">
                                <ion-icon name="close-outline"
                                onclick='eliminarEgreso(${egreso.id})'></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
    `;

    return egresoHTML;
}

let eliminarEgreso = (id)=>{
    //Aqui vamos a utilizar una funcion flecha con la herramienta findIndex colocando como parametro el index a buscar, donde dice ingreso puede ser cualquier nombre
    let indiceEliminar = egresos.findIndex(egreso => egreso.id === id);
    //para eliminar me imagino todo el div se utiliza el splice, el segundo parametro dice cuantos elementos va a eliminar a partir del indice que encuentre
    egresos.splice(indiceEliminar, 1);
    cargarCabecero();
    cargarEgresos();
}

let agregarDato = () =>{
    let forma = document.forms['forma'];
    let tipo = forma['tipo'];
    let descripcion = forma['descripcion'];
    let valor = forma['valor'];
    if (descripcion.value !== '' && valor.value !== ''){
        if (tipo.value === 'ingreso'){
            ingresos.push(new Ingreso(descripcion.value, Number(valor.value)))//Tambien se puede utilizar el + en lugar del number y los parentesis
            cargarCabecero();
            cargarIngresos();
        }
        else if(tipo.value === 'egreso'){
            egresos.push(new Egreso(descripcion.value, Number(valor.value)))//Tambien se puede utilizar el + en lugar del number y los parentesis
            cargarCabecero();
            cargarEgresos();
        }
    }
}