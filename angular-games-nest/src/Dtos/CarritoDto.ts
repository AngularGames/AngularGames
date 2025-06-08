export class CarritoDto{

    nombreArticulo:string;
    cantidad:number;
    precio:number;
    idUsuario:number;

    constructor(
        nombreArticulo?:string,
        cantidad?:number,
        precio?:number,
        idUsuario?:number
    ){

        this.nombreArticulo=nombreArticulo;
        this.cantidad=cantidad;
        this.precio=precio;
        this.idUsuario=idUsuario;

    }


}