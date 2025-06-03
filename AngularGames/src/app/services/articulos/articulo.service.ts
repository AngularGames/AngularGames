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

  listaJuegos:any=[]


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
  añadirArticulo(juego:Juego){
    console.log("nuevo articulo que mandamos en body es ",juego)
    this.http.post<Juego>(`${this.url}/articulos/alta`,juego);
    console.log("ha pasado por el post al alta")
  }

  mostrarTodos(){
    this.http.get(`${this.url}/articulos/mostrar/todos`).subscribe(data=>this.listaJuegos=data);
    console.log(this.listaJuegos)
    return this.listaJuegos

  }
}
