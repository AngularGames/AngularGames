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

    @OneToMany(()=>productoAlmacen, (p)=>p.carrito)
    productos:productoAlmacen[];
    


    constructor(idCarrito?:number,numPedido?:number,nombreArticulo?:string,cantidad?:number,idUsuario?:number,precio?:number,productos?:productoAlmacen[]){

    this.idCarrito=idCarrito;
    this.numPedido =numPedido;
    this.nombreArticulo=nombreArticulo;
    this.cantidad =cantidad;
    this.idUsuario=idUsuario;
    this.precio=precio;
    this.productos=productos

    }
}