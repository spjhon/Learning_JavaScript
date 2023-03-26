function Persona2(nombre = 'SinNombre', apellido = 'SinApellido', email = 'SinEmail'){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
    //ahora se puede utilizar en cualquier lado   
}

Persona2.prototype.tel = '443322';

let padre = new Persona2('Juan', 'Perez', 'spjhon@gmail.com');
padre.tel = '987654321';
console.log(padre);

let madre = new Persona2('Maria', 'Velez', 'maria@gmail.com');
console.log(madre.tel);
madre.tel = '';
console.log(madre);