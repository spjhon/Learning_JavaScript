//Concepto de reutilizacion de codigo de una clase padre a una clase hija
// se utiliza el extends en el diagrama de UML y senala a la clase padre en el diagrama

//ESTA SERIA LA CLASE PADRE
class Persona{

    //Vamos a definir argumentos estaticos
    static contadorObjetosPersona = 22222;
    //Como ejemplo se va a utilizar el contador para incrementar la variable
    //cada vez que se cree un objeto

    // Se pueden agregar atributos directamente a la clase
    email = 'Valor default email';

    //Se le agrega constructor
    constructor (nombre, apellido){
        //metodos get o set para modificar o leer los atributos
        this._nombre = nombre + 'k';
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
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
        return this._nombre + ' ' + this._apellido;
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
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1);

let empleado1 = new Empleado('Carlos', 'Llepez', 'Operaciones');
console.log(empleado1);

//HERENCIA DE METODOS

console.log(empleado1.nombreCompleto());


//SOBRE-ESCRITURA EN JAVASCRIPT

//Desde la clase hija se va a modificar el metodo de la clase padre

class Empleado2 extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); //Llamar al constructor padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }
    //SOBRE ESCRITURA
    // se deben utilizar los mismo paramtros sino es SOBRECARGA
    nombreCompleto(){
        return super.nombreCompleto() + ' ' + this._departamento;
    }
}

empleado1 = new Empleado2('Carlos', 'Llepez', 'Operaciones');
console.log(empleado1.nombreCompleto());

//CLASE OBJECT, SOBRECARGA Y POLIMORFISMO
//la clase object es la clase PADRE DE TODAS LAS CLASES DE JAVASCRITP
//y escondidito esta el extend Object

//En el PADRE SE VA A SOBRE ESCRIBIR EL OBJECT
//Esto es polimorfismo es cuando se puede llamar desde un objeto un metodo
// que se encuentre en diferentes clases, de acuerdo a como se cree en objeto.
console.log(empleado1.toString());

//console.log(persona1.saludar()); NO ES POSIBLE LLAMAR UN METODO ESTATICO DESDE UN OBJETO PERO SI DESDE UNA CLASE

Persona.saludar(); //Ver en consola

//a un metodo estatico si se le puede pasar un objeto como argumento
Persona.saludar2(persona1); //Ver en consola

//desde las clases hijas se puede llamar el metodo estatico
//OJO los metodos estaticos se asocian directamente a la clase mas no con el objeto
Empleado.saludar();
Empleado.saludar2(persona1);

Empleado2.saludar();
Empleado2.saludar2(empleado1);


//ATRIBUTOS ESTATICOS
//Son variables que se asocian a la clase mas no al objeto

console.log(persona1.contadorObjetosPersona); //Aqui no se ve
console.log(Empleado.contadorObjetosPersona);
console.log(Empleado2.contadorObjetosPersona);
console.log(Persona.contadorObjetosPersona);

//ATRIBUTOS ESTATICOS VS ATRIBUTOS NO ESTATICOS
// Se pueden agregar atributos directamente a la clase
//mirar arriba

//Vamos a acceder al atributo
//OJO, ACA SE ESTA MOSTRANDO ES EL OBJETO Y LLAMANDO EL ATRIBUTO A LA CLASE
console.log(empleado1.email);
console.log(persona1.email);

