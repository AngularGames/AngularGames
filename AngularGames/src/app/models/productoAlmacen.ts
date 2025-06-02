

export class productoAlmacen{
  idAlmacen:number;
  nombre:string;
  tipo:string;
  cantidad:number;

  constructor(idAlmacen?:number,nombre?:string,tipo?:string,cantidad?:number){
    this.idAlmacen=idAlmacen;
    this.nombre=nombre;
    this.tipo=tipo;
    this.cantidad=cantidad;
  }
}


