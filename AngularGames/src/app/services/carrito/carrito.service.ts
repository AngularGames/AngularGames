import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../../models/Carrito';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(
    private http:HttpClient

  ) { }

url="http://localhost:3000"
listaCarrito:Carrito[]=[];

agregarAlCarrito(pedido:Carrito){
  console.log("desglose de pedido")
  console.log(pedido.nombreArticulo+pedido.cantidad+pedido.precio);
  this.http.post(`${this.url}/carrito/agregarCarrito`,pedido).subscribe();

}

mostrarCarrito(numpedido:number):Carrito[]{
  this.http.get<Carrito[]>(`${this.url}/carrito/mostrar`).subscribe(data=>this.listaCarrito=data)
  return this.listaCarrito.filter(m=>m.numPedido==numpedido)
}

aceptarCarrito(){


}

}
