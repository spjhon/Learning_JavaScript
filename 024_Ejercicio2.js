
//Clase Padre
class Persona{

    //Argumentos estaticos
    static contadorPersona = 0;

    //Aqui se va a aplicar el concepto de variables estaticas,
    //No se puede utilizar el const
    //Entonces se crea un metodo estatico que solo deje leer esa variable
    static get MAX_OBJ(){
        return 4;
    }

    //Se le agrega constructor
    constructor (nombre, apellido){
        //Asociando argumentos a varialbes dentro de la clase
        this._nombre = nombre + ' k';
        this._apellido = apellido;
        //Ahora vamos a preguntar si la creacion de objetos se encuentra dentro del MAX_OBJ
        if (Persona.contadorPersona < Persona.MAX_OBJ){
            Persona.contadorPersona++;
            this.idPersona = Persona.contadorPersona;
        }
        else{
            console.log('se ha superado el maximo');
        }
        
        //Aqui lo que esta haciendo es que cada vez que se cree un id
        //se va a sumar el contador y como no tiene ni getter ni setter 
        //entonces no se puede acceder desde afura y de esta forma asigandole un id
        //unico a cada objeto o en este caso persona creada fuera de la clase
        //y por eso no se le coloca el _.
    }

    get nombre(){
        return this._nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellido(apellido){
        this._apellido = nombre;
    }

    //Dentro de una clase no es necesario el function
    nombreCompleto(){
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido;
    }

    //Sobre-escribien el metodo de la clase padre (Object)
    toString(){
        //Se aplica el polimorfismo (multiples formas en tiempo de ejecucion)
        //EL metodo quse ejecuta depende cuando se crea el objeto y si se manda a llamar el padre o el hijo
        return this.nombreCompleto();
    }

    //Static es que solo se va a asociar con esta clase y nada mas
    static saludar(){
        console.log('Saludos desde este metodo static');
    }

    static saludar2(cualquierNombre){
        console.log(cualquierNombre.departamento);
    }
}


//vamos a crear la clase hija
class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //Llamar al constructor padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamente = departamento;
    }

    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento + '  sfsdsf';
    }
}

//Creacion de objetos
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let persona2 = new Persona('Ezequiel', 'Rolando');
console.log(persona2.toString());

let empleado1 = new Empleado('Carlos', 'Llepez', 'Operaciones');
console.log(empleado1.toString());

console.log(Persona.contadorPersona);

console.log(Persona.MAX_OBJ);

let persona3 = new Persona('Mariano', 'Lara');
console.log(persona3.toString());

console.log(Persona.contadorPersona);

let persona4 = new Persona('Carlos', 'Restrepo'); //Como pueden observar aqui muestra un error
console.log(persona4.toString());