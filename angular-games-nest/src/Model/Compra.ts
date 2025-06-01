import { Juego } from "./Juego";

export class Compra {

    idCompra:number;
    idPedido:number;
    fecha:Date;
     // esta está relacionada con un filtro por pedido en la tabla historico pedidos

    constructor(idPedido:number,idCompra:number,fecha:Date){

        this.idPedido=idPedido;
        this.idCompra=idCompra;
        this.fecha=fecha;

    }
}