import { PrimaryGeneratedColumn, Entity, Column, ManyToMany, ManyToOne, JoinColumn } from 'typeorm';
import { Carrito } from './Carrito';

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
  
  @ManyToOne(()=>Carrito, (carrito)=>carrito.productos)
  @JoinColumn({name:"nombre", referencedColumnName:"nombreArticulo"  }) 
  carrito:Carrito

  constructor(idAlmacen?:number,nombre?:string,tipo?:string,cantidad?:number,carrito?:Carrito){

    this.idAlmacen=idAlmacen;
    this.nombre=nombre;
    this.tipo=tipo;
    this.cantidad=cantidad;
    this.carrito=carrito;
  }
}


