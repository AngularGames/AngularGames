import { Injectable } from '@angular/core';
import { Juego } from '../../models/Juego';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
//llamadas al controller
  constructor(private http:HttpClient) { }

  url="http://localhost:3000"


  elegirJuego(nombre:string):Observable<any>{
    return this.http.get(`${this.url}/articulos/buscar/juego/${nombre}`)


  }
/*
  filtrarTipo(tipo:string):Juego[]{
    return this.baseDatosJuegos.filter(juego=>juego.tipo==tipo);

  }

  filtrarJugadores(jmin:string,jmax:string):Juego[]{
    return this.baseDatosJuegos.filter(juego=>(juego.jugadoresMin>=jmin&&juego.jugadoresMax<=jmax));

  }

  filtrarDificultad(dificultad:number):Juego[]{
    return this.baseDatosJuegos.filter(juegos=>(+juegos.dificultad >= dificultad))
  }
*/
  añadirArticulo(nuevoJuego:Juego){
    console.log("nuevo articulo que mandamos en body es ",nuevoJuego)
    this.http.post(`${this.url}/articulos/alta`,nuevoJuego);
    console.log("ha pasado por el post al alta")
  }


}
