export class Carrito{

  numPedido?:number;
  nombreArticulo?:string;
  cantidad?:number;
  precio?:number;

  constructor(
      numPedido?:number,
      nombreArticulo?:string,
      cantidad?:number,
      precio?:number,
  ){

      this.numPedido=numPedido;
      this.nombreArticulo=nombreArticulo;
      this.cantidad=cantidad;
      this.precio=precio;


}
}