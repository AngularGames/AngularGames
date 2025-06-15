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
listaCarrito:Carrito[];
numeroPedido:number;

agregarAlCarrito(pedido:Carrito){
  this.http.post(`${this.url}/carrito/agregarCarrito`,pedido).subscribe();


}

   mostrarCarrito(numpedido:number):Carrito[]{
   this.http.get<any>(`${this.url}/carrito/mostrar/${numpedido}`).subscribe(data=>this.listaCarrito=data)
   return this.listaCarrito;
}

numeroDeCarrito():number{
  this.http.get<any>(`${this.url}/carrito/numeroPedido`).subscribe(data=>this.numeroPedido=data);
  console.log(this.numeroPedido)
  return this.numeroPedido;

}

}
