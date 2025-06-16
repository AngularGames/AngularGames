import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carrito } from '../../models/Carrito';
import { Observable } from 'rxjs';
import { CarritoDto } from '../../../../../angular-games-nest/src/Dtos/CarritoDto';

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
  this.http.post(`${this.url}/carrito/agregarCarrito`,pedido).subscribe();


}

mostrarCarrito(numpedido:number):Observable<Carrito[]>{
return this.http.get<Carrito[]>(`${this.url}/carrito/mostrar/${numpedido}`)
}

numeroDeCarrito():Observable<number>{
  return this.http.get<number>(`${this.url}/carrito/numeroPedido`);

}

eliminarDelCarrito(nombre:string):Observable<any>{
  console.log("este es el nombre para borrar del carrito "+nombre)
  return this.http.delete(`${this.url}/carrito/eliminarCarrito/${nombre}`)
  

}

}
