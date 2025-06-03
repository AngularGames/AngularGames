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


  cambiarStock(juego:string, cantidad:number){


  }

  listaAlmacen():Observable<productoAlmacen[]>{
    return this.http.get<productoAlmacen[]>(`${this.url}/almacen/lista`);

  }



}


