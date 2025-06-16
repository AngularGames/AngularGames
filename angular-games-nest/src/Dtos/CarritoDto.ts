export class CarritoDto{
    idCarrito:number;
    numPedido:number;
    nombreArticulo:string;
    cantidad:number;
    precio:number;

    constructor(
        idCarrito?:number,
        numPedido?:number,
        nombreArticulo?:string,
        cantidad?:number,
        precio?:number,
    ){

        this.idCarrito=idCarrito;
        this.numPedido=numPedido;
        this.nombreArticulo=nombreArticulo;
        this.cantidad=cantidad;
        this.precio=precio;

    }


}