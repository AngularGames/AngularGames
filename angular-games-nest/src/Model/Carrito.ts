import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { productoAlmacen } from "./productoAlmacen";

@Entity("carrito")
export class Carrito {
    
    @PrimaryGeneratedColumn()
    idCarrito:number;
    @Column()
    numPedido:number;
    @Column()
    idArticulo:number;
    @Column()
    cantidad:number;
    @Column()
    idUsuario:number;
    

    //@OneToMany(()=>productoAlmacen, (articulos)=>articulos.carrito) // llamamos a entidad productoAlmacen (que es con la que lo relacionaremos)
                                                                    // definimos articulos para ver a qué carrito pertenecen los articulos
    //articulos:productoAlmacen[];

 // esta está relacionada con un filtro por pedido en la tabla historico pedidos

    constructor(idCarrito:number,numPedido:number,idArticulo:number,cantidad:number,idUsuario:number){

    this.idCarrito=idCarrito;
    this.numPedido =numPedido;
    this.idArticulo=idArticulo;
    this.cantidad =cantidad;
    this.idUsuario=idUsuario;

    }
}