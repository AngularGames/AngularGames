import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

/// EL TYPEORM ES SOLAMENTE EN EL BACK? ///

@Entity("almacen")
export class productoAlmacen{
  @PrimaryGeneratedColumn()
  idAlmacen:number;
  @Column()
  nombre:string;
  @Column()
  tipo:string;
  @Column()
  cantidad:number;

  constructor(idAlmacen?:number,nombre?:string,tipo?:string,cantidad?:number){

    this.idAlmacen=this.idAlmacen;
    this.nombre=nombre;
    this.tipo=tipo;
    this.cantidad=cantidad;
  }
}


