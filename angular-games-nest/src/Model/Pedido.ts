import { Juego } from "./Juego";

export class Pedido {

    idPedido:number;
    usuario:number;
    articulo:Juego[];
     // esta está relacionada con un filtro por pedido en la tabla historico pedidos

    constructor(idPedido:number,usuario:number,articulo:Juego[]){

        this.idPedido=idPedido;
        this.usuario=usuario;
        this.articulo=articulo;

    }
}