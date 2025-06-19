<<<<<<< HEAD

=======
>>>>>>> 1bd1b2afeaaf035f4199a8fd9da4abbe167325e0
import { IsNumber, IsString, isString } from "class-validator";

export class CarritoDto{
    @IsNumber()
    idCarrito:number;
<<<<<<< HEAD
    @IsNumber()
=======
>>>>>>> 1bd1b2afeaaf035f4199a8fd9da4abbe167325e0
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