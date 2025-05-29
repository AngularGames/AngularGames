import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

/// EL TYPEORM ES SOLAMENTE EN EL BACK? ///

@Entity("almacen")
export class productoAlmacen{
  @PrimaryGeneratedColumn()
  idArticulo:number;
  @Column()
  nombre:string;
  @Column()
  tipo:string;
  @Column()
  cantidad:number;

  constructor(idArticulo?:number,nombre?:string,tipo?:string,cantidad?:number){

    this.idArticulo=idArticulo;
    this.nombre=nombre;
    this.tipo=tipo;
    this.cantidad=cantidad;
  }
}


