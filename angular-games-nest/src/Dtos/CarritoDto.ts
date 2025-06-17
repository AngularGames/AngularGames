import { IsNumber, IsString, isString } from "class-validator";

export class CarritoDto{
    @IsNumber()
    numPedido:number;
    @IsString()
    nombreArticulo:string;
    @IsNumber()
    cantidad:number;
    @IsNumber()
    precio:number;

    constructor(
        numPedido?:number,
        nombreArticulo?:string,
        cantidad?:number,
        precio?:number,
    ){

        this.numPedido=numPedido;
        this.nombreArticulo=nombreArticulo;
        this.cantidad=cantidad;
        this.precio=precio;

    }


}