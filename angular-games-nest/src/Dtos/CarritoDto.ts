export class CarritoDto{

    idArticulo:number;
    cantidad:number;
    idUsuario:number;

    constructor(
        idArticulo?:number,
        cantidad?:number,
        idUsuario?:number
    ){

        this.idArticulo=idArticulo;
        this.cantidad=cantidad;
        this.idUsuario=idUsuario;

    }


}