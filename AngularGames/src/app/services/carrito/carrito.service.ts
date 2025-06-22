import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../../models/Carrito';
import { find, map, Observable } from 'rxjs';
import { CarritoDto } from '../../../../../angular-games-nest/src/Dtos/CarritoDto';
import { UpdateResult } from 'typeorm';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  constructor(
    private http:HttpClient

  ) { }

url="http://localhost:3000"
numeroPedido:any;

agregarAlCarrito(pedido:Carrito){
  return this.http.post(`${this.url}/carrito/agregarCarrito`,pedido)

}

mostrarCarrito(numpedido:number):Observable<Carrito[]>{
return this.http.get<Carrito[]>(`${this.url}/carrito/mostrar/${numpedido}`)
}

numeroDeCarrito():Observable<number>{
  console.log("pedido num carrito en service front")
  return this.http.get<number>(`${this.url}/carrito/numeroPedido`);

}

eliminarDelCarrito(nombre:string):Observable<any>{
  console.log("este es el nombre para borrar del carrito "+nombre)
  return this.http.delete(`${this.url}/carrito/eliminarCarrito/${nombre}`)

}

cambiarUnidades(pedido:Carrito):Observable<any>{
  console.log("ha entrado este pedido para actualizar ",pedido)
  return this.http.patch(`${this.url}/carrito/unidades/`,pedido)
}

}
