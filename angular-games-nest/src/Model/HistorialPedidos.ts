import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Carrito } from "./Carrito";

@Entity("historialpedidos")
export class HistorialPedidos {
    @PrimaryGeneratedColumn()
    idPedido:number;
    @Column()
    numPedido:number;
    @Column()
    fecha:Date;

     // esta está relacionada con un filtro por pedido en la tabla historico pedidos

    constructor(idPedido:number,numPedido:number,fecha:Date){

        this.idPedido=idPedido;
        this.numPedido=numPedido;
        this.fecha=fecha;

    }
}