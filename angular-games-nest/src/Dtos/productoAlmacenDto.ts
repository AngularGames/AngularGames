
export class productoAlmacenDto{
  nombre:string;
  tipo:string;
  cantidad:number;
  

  constructor(nombre?:string,tipo?:string,cantidad?:number){

    this.nombre=nombre;
    this.tipo=tipo;
    this.cantidad=cantidad;
  }
}


