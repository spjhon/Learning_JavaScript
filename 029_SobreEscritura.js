//La sobre escritura es que la clase hija se puede REDEFINIR el metodo que se encuentra en los dos con el mismo nombre

class Empleado{
    constructor (nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        return this._nombre = nombre;
    }

    get sueldo(){
        return this._sueldo
    }

    set sueldo(sueldo){
        return this._sueldo = sueldo;
    }

    //Aqui vamos a ensayar la sobre escritura y el polimorfismo
    obtenerDetalles(){
        return `Empleado: Nombre: ${this._nombre}, sueldo: ${this._sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre = 'Nombre NO asigando', sueldo = 'Sueldo NO asigando', departamento = 'Departamento NO asigando'){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        return this._departamento = departamento
    }

    obtenerDetalles(){
        return `Gerente: Departamento: ${this._departamento} | ${super.obtenerDetalles()}`
    }
}

let gerente1 = new Gerente('Carlos', 5000, 'Sistemas');
console.log(gerente1.obtenerDetalles());

let empleado1  = new Empleado('Juan', 3000);
console.log(empleado1.obtenerDetalles());

//Vamos a crear un metodo independiente de ambas clases, polimormismo es multiples formas
function imprimir(referencia){
    //Esto es un metodo generico para aplicarle polimorfismoa los padres y a los hijos
    console.log(referencia.obtenerDetalles() + ' || Polimorfeado');
    //la palabra reservada INSTANCEOF es para preguntar el tipo de objeto que 
    //entra en la funcion generica que se le ha aplicado el polimorfismo
    //OJO se debe saber hacer la pregunta y colocar la clase de menor gerarquia ya que si se pregunta
    //de la clase tipo padre pues va a referenciar todos los hijos que son el de mayor jerarquia pues
    //por logica ya que todos los hijos pertenecen al padre
    if (referencia instanceof Gerente){
        console.log ('Objeto tipo Gerente');
    }
    else{
        console.log ('Objeto tipo Empleado')
    }

}
//La vuelta con el polimorfismo es que con una funcion dependiendo de como se utilice va a llamar diferentes funciones
imprimir(empleado1);
imprimir(gerente1);





