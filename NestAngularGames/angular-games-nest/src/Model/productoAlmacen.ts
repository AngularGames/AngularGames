import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

/// EL TYPEORM ES SOLAMENTE EN EL BACK? ///

@Entity("almacen")
export class productoAlmacen{
  @PrimaryGeneratedColumn()
  idArticulo:string;
  @Column()
  tipo:string;
  @Column()
  cantidad:number;

  constructor(idArticulo?:string,tipo?:string,cantidad?:number){

    this.idArticulo=idArticulo;
    this.tipo=tipo;
    this.cantidad=cantidad;
  }
}


