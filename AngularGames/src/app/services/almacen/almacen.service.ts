import { Injectable } from '@angular/core';
import { productoAlmacen } from '../../models/productoAlmacen';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../../models/Stock';


@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000"



  listaAlmacen():Observable<productoAlmacen[]>{
    return this.http.get<productoAlmacen[]>(`${this.url}/almacen/lista`);

  }

  consultarStock(nombre:string):Observable<number>{
    console.log("stock service front "+ nombre)
    return this.http.get<number>(`${this.url}/almacen/articulo/${nombre}`)
  }

  agregarAlmacen(nuevoJuego:productoAlmacen):Observable<any>{
    console.log(`este juego ${nuevoJuego.nombre} entra en almacen service front`)
    console.log("enviamos ",nuevoJuego)
    return this.http.post<productoAlmacen>(`${this.url}/almacen/agregar`,nuevoJuego)

  }

  agregarStock(stock:Stock):Observable<any>{
    console.log("agregar stock ",stock)
    let heads = new HttpHeaders()
    heads=heads.set("Content-Type","application/json")
    return this.http.post<Stock>(`${this.url}/almacen/stock`,stock,{headers:heads})
    //this.http.patch(`${this.url}/almacen/stock?articulo=${stock.nombre}&cantidad=${stock.cantidad}`,stock)
  }

  mostrarAlmacen(){
    return this.http.get(`${this.url}/almacen/mostrar`)
  }
}


