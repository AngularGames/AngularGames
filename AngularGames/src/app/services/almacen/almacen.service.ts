import { Injectable } from '@angular/core';
import { ArticuloService } from '../articulos/articulo.service';
import { Juego } from '../../models/Juego';
import { productoAlmacen } from '../../models/productoAlmacen';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


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
    return this.http.post<productoAlmacen>(`${this.url}/almacen/agregar`,nuevoJuego)

  }


}


