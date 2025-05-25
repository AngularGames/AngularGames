export class productoAlmacen{

  idProducto:string;
  tipo:string;
  producto:object;
  cantidad:number;

  constructor(idProducto:string,tipo:string,producto:object,cantidad:number){

    this.idProducto=idProducto;
    this.tipo=tipo;
    this.producto=producto;
    this.cantidad=cantidad;
  }
}

