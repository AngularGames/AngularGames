import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { productoAlmacen } from "./productoAlmacen";

@Entity("carrito")
export class Carrito {
    
    @PrimaryGeneratedColumn()
    idCarrito:number;
    @Column()
    numPedido:number;
    @Column()
   // @OneToMany(()=>productoAlmacen, (articulos)=>articulos.carrito) // llamamos a entidad productoAlmacen (que es con la que lo relacionaremos)
                                                                    // definimos articulos para ver a qué carrito pertenecen los articulos
    articulos:productoAlmacen[];
    @Column()
    cantidad:number;
    @Column()
    usuario:number;
    
     // esta está relacionada con un filtro por pedido en la tabla historico pedidos

    constructor(idCarrito:number,numPedido:number,articulos:productoAlmacen[],cantidad:number,usuario:number){

    this.idCarrito=idCarrito;
    this.numPedido =numPedido;
    this.articulos =articulos;
    this.cantidad =cantidad;
    this.usuario =usuario;

    }
}