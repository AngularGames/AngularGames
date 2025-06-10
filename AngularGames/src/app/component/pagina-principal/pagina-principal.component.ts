import { Component, Input } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Juego } from '../../models/Juego';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaginaProductoComponent } from '../pagina-producto/pagina-producto.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-pagina-principal',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class PaginaPrincipalComponent {

constructor(private articuloService:ArticuloService){
  //this.bdJuegos=this.articuloService.baseDatosJuegos
}
bdJuegos:Juego[];

@Input() juegoSeleccionado:Juego;
seleccion:string;
/*
juegoElegido(nombre:string){
console.log("el juego elegido es "+nombre)
  //llamada al servicio para devolver el juego del filtro y mandarlo al componente.
  this.juegoSeleccionado=this.articuloService.elegirJuego(nombre);
console.log("el juego que hemos guardado es "+this.juegoSeleccionado);


}
*/
}
