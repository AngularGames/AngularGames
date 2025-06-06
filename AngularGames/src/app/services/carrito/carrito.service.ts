import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../../models/Carrito';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(
    private http:HttpClient

  ) { }

url="http://localhost:3000"

agregarAlCarrito(pedido:Carrito){
  this.http.post(`${this.url}/carrito/agregarCarrito`,pedido).subscribe();

}

mostrarCarrito(){
  this.http.get<Carrito[]>(`${this.url}/carrito/mostrar`).subscribe()
}

}
