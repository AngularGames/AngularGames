<<<<<<< HEAD
import { IsNumber, IsString, isString } from "class-validator";

export class CarritoDto{
    @IsNumber()
=======
export class CarritoDto{
    idCarrito:number;
>>>>>>> 3aeb0f5ddb19e7dd0d2e233b3d660f4173885e41
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