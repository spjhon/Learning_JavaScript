//Creacion

//Clase Padre

class DispositivoEntrada{
    constructor(tipoEntrada = 'Entrada NO asiganda', marca = 'Marca NO asiganda'){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        return this._marca = marca;
    }
}

//Clase HIJA Raton
class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones; //Por cada objeto que se cree se va a dar conteo
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: ${this._idRaton}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

//Vamos a probar la clase
let raton1 = new Raton ('USB', 'HP');
console.log(raton1.toString());
let raton2 = new Raton ('BlueTooth', 'Dell');
console.log(raton2.toString());

let dispositivo1 = new DispositivoEntrada ('SERIAL', 'ASUS');
console.log(dispositivo1.marca);

//Clase HIJA teclado

class Teclado extends DispositivoEntrada{
    static contadorTeclado = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);

        this._idTeclado = ++Teclado.contadorTeclado;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: ${this._idTeclado}, tipoEntrada: ${this._tipoEntrada}, Marca: ${this._marca}`;
    }
}

let teclado1 = new Teclado ('USB', 'MSI');
console.log(teclado1.toString());
let teclado2 = new Teclado ('BlueTooth', 'LogiTech');
console.log(teclado2.toString());

//Creacion clase monitor, es una clase independiente

class Monitor{
    static contadorMonitores = 0;
    

    constructor(marca = 'Marca NO asiganda', tamano = 'Tamano NO asigando'){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    toString(){
        return `Monitor: ${this.idMonitor}, Marca: ${this._marca}, Tamano: ${this._tamano}`
    }
}

//Ensayando
let monitor1 = new Monitor ('HP', 15);
let monitor2 = new Monitor ('ASUS', 27);

console.log(monitor1.toString());
console.log(monitor2.toString());

//CLASE COMPUTADORA

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre = 'Nombre NO asigando', monitor = 'Monitor NO asignado', raton = 'Raton NO asigando', teclado = 'Teclado No asigando'){
    this._idComputadora = ++Computadora.contadorComputadoras;
    this._nombre = nombre;
    this._monitor = monitor;
    this._raton = raton;
    this._teclado = teclado;
    //Esto es relacion de agregacion mas no de herencia, por eso los this
    }

    toString(){
        return `Computadora ${this._idComputadora}: Nombre: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

let computadora1 = new Computadora ('UBUNTU', monitor1, teclado1, raton1);
console.log(computadora1.toString());

//Clase de orden

class Orden{
    //Relacion de agregacion mas no de herencia
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadores = [];
    }

    get idOrder(){
        return this._idOrden;
    }

    agregarComputadora(referencia){
        this._computadores.push(referencia);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for (let computadora of this._computadores){
            computadorasOrden += `\n ${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let computadora2 = new Computadora();

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);

orden1.mostrarOrden();

