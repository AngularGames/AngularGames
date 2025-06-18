import { Query } from '@nestjs/common';
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

  respuesta:string[]=[]



  elegirJuego(nombre:string):Observable<any>{
    return this.http.get(`${this.url}/articulos/buscar/juego/${nombre}`);


  }

  filtrarTipo(tipo:string):Observable<any>{
    return this.http.get(`${this.url}/articulos/buscar/tipo/${tipo}`);
;

  }

  filtrarJugadores(jmin:number,jmax:number):Observable<Juego[]>{
    console.log("entran ",jmin," y ",jmax," en el service del front")
    return this.http.get<Juego[]>(`${this.url}/articulos/buscar/jugadores?jmin=${jmin}&jmax=${jmax}`);
  }

  filtrarDificultad(dificultad:number):Observable<any>{
    return this.http.get(`${this.url}/articulos/buscar/dificultad/${dificultad}`);
  }

  añadirArticulo(juego:Juego):Observable<any>{
    console.log("nuevo articulo que mandamos en body es ",juego);
    console.log("ha pasado por el post al alta");
    return this.http.post(`${this.url}/articulos/alta`,juego);

  }

  mostrarTodos():Observable<string[]>{
    return this.http.get<string[]>(`${this.url}/articulos/mostrar/todos`);

  }

  CargarListaJuegos():Observable<Juego[]>{
    return this.http.get<Juego[]>(`${this.url}/articulos/listaJuegos`)

  }
}
