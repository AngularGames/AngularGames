import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { productoAlmacen } from "./productoAlmacen";
import { Juego } from "./Juego";

@Entity("carrito")
export class Carrito {
    
    @PrimaryGeneratedColumn()
    idCarrito:number;
    @Column()
    numPedido:number;
    @Column()
    nombreArticulo:string;
    @Column()
    cantidad:number;
    @Column()
    idUsuario:number;
    @Column()
    precio:number;
    

    //@OneToMany(()=>productoAlmacen, (articulos)=>articulos.carrito) // llamamos a entidad productoAlmacen (que es con la que lo relacionaremos)
                                                                    // definimos articulos para ver a qué carrito pertenecen los articulos
    //articulos:productoAlmacen[];

 // esta está relacionada con un filtro por pedido en la tabla historico pedidos

    constructor(idCarrito?:number,numPedido?:number,nombreArticulo?:string,cantidad?:number,idUsuario?:number,precio?:number){

    this.idCarrito=idCarrito;
    this.numPedido =numPedido;
    this.nombreArticulo=nombreArticulo;
    this.cantidad =cantidad;
    this.idUsuario=idUsuario;
    this.precio=precio;

    }
}