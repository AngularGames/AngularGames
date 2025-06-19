
import { IsNumber, IsString, isString } from "class-validator";

export class CarritoDto{
    @IsNumber()
    idCarrito:number;
    @IsNumber()
    numPedido:number;
    @IsString()
    nombreArticulo:string;
    @IsNumber()
    cantidad:number;
    @IsNumber()
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