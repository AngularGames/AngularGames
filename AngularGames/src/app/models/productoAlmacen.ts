import { Juego } from "./Juego";

export class productoAlmacen{

  idProducto:string;
  tipo:string;
  cantidad:number;
  producto:object;

  constructor(idProducto:string,tipo:string,cantidad:number,producto?:object){

    this.idProducto=idProducto;
    this.tipo=tipo;
    this.producto=producto;
    this.cantidad=cantidad;
  }
}

