import { PrimaryGeneratedColumn, Entity, Column, ManyToMany, ManyToOne } from 'typeorm';
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
  @ManyToOne(()=>Carrito, (carrito)=>carrito.articulos)
  @JoinColumn({name:"numPedido", referencedColumnName:"numPedido"  }) //no me queda muy claro si está bien. creo que sí pero...
  carrito:Carrito

  constructor(idAlmacen?:number,nombre?:string,tipo?:string,cantidad?:number){

    this.idAlmacen=idAlmacen;
    this.nombre=nombre;
    this.tipo=tipo;
    this.cantidad=cantidad;
  }
}


