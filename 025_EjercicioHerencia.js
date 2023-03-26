//Se utiliza el ejercicio de acuerdo al diagrama UML porporcionado (esta en la carpeta en jpg)

//Clase persona
class Persona{

    //Variable de tipo estatica, no se relaciona con los objetos sino con la clase
    static contadorPersonas = 0;

    //Constructor
    constructor (nombre = 'Nombre NO Porporcionado', apellido = 'Apellido NO Porporcionado', edad = 'Edad NO Proporcionada'){
        this._idPersona = ++Persona.contadorPersonas;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad (edad){
        this._edad = edad;
    }

    toString(){
        //La forma antigua de hacerlo
        return 'ID: ' + this._idPersona  + ': ' + 'Nombre: ' + this._nombre + ' ' + this.apellido + ' ' + 'Edad: ' + this._edad;
        //Otra forma de hacerlo
        /*return `ID: ${this._idPersona}: Nombre: ${this._nombre} Edad: ${this._edad}`;*/
        
    }
}


//Vamos a crear la clase Empleado
class Empleado extends Persona{
    static contadorEmpleado = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleado;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + ' Id Empleado: ' + this._idEmpleado + ' Sueldo: ' + this._sueldo;
    }
}

//Creacino clase empleado
class Cliente extends Persona{
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idcliente = ++Cliente.contadorClientes;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idcliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return `${super.toString()} Id Cliente: ${this._idcliente} Fecha de Registro: ${this._fechaRegistro}`;
    }
}

//Creacion objeto tipo persona
let persona1 = new Persona('Juan', 'Perez', '28');
console.log(persona1);
console.log(persona1.toString());

let persona2 = new Persona('Carlos', 'Ramirez', '35');
console.log(persona2.toString());

let empleado1 = new Empleado('Gerardo', 'Orjuela', '25', '$2.500');
console.log(empleado1);
console.log(empleado1.toString());

//Aqui se utiliza algo llamado new date
let cliente1 = new Cliente('Oscar', 'Sevilla', '25', new Date());
console.log(cliente1.toString());

