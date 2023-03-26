//Primero se va a comenzar con la clase de producto ya que es la que 
//no tiene relacion con ninunga otra
//Variables subrayadas son variables estaticas

//Clase padre
class Producto{
    static contadorProductos = 0;

    constructor(nombre = 'Nombre No Asignado', precio = 'Precio No Asignado'){
        //Si no se utiliza el _ es por que no se va a hacer get o set
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;

    }

    get idProducto(){
        return this._idProducto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        //Es mas facil para dar formato
        return `ID-Producto: ${this._idProducto} Nombre-Producto: ${this._nombre} Precio: ${this._precio}`;
    }

}

let producto1 = new Producto('Pantalon', 200);
let producto2 = new Producto('Camisa', 100);

console.log(producto1.toString());
console.log(producto2.toString());

//Clase Orden que va a albergar cada producto
class Orden{
    static contadorOrdenes = 0;

    static get MAX_PROD(){
        return 5;
    }

    //OJO aqui no hay relacion de herencia sino relacion de agregacion
    //Osea que una orden puede tener varios productos asociados gracias al arreglo.
    constructor (){
    
        this._idOrden = ++Orden.contadorOrdenes;
        //Esta es una referencia de arreglo y preparandolo para empezar a albergar productos
        this._productos = [];
        //Este contador no se necesita gracias al push
        //sino se utilizaria la linea 80 donde dice otra sintaxis
        this._contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    //Metodo agregar producto
    agregarProducto(carrusel){
        if (this._productos.length < Orden.MAX_PROD){
            //Esta es la sintaxis mas conocida, sin embargo
            this._productos.push(carrusel);
            //Esta es otra sintaxis
            /*this._productos[this._contadorProductosAgregados++] = producto;*/
        }
        else{
            console.log('No se pueden agregar mas productos');
        }
    }

    //Metodo para clacular la suma total de lo que tenga el arreglo
    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto.precio; //totalVenta + prodcuto.precio;
        }
        return totalVenta;
    }

    //Metodo mostrar orden
    mostrarOrden(){
        //Vamos a convertirlo a cadena
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += '\n' + producto.toString() + ' ';
        }
        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, 
    Productos: ${productosOrden}`);
    }
}

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let producto3 = new Producto('Medias', 250);
let producto4 = new Producto('Arete', 50);
let producto5 = new Producto('Gorra', 70);
let producto6 = new Producto('Zapatos', 250);



let orden2 = new Orden();
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto4);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto5);
orden2.agregarProducto(producto6);

orden2.mostrarOrden();

