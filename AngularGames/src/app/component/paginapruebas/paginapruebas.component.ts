import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PaginaProductoComponent } from '../pagina-producto/pagina-producto.component';
import { Juego } from '../../models/Juego';
import { ArticuloService } from '../../services/articulos/articulo.service';

@Component({
  selector: 'app-paginapruebas',
  imports: [RouterModule,CommonModule,FormsModule,PaginaProductoComponent],
  templateUrl: './paginapruebas.component.html',
  styleUrl: './paginapruebas.component.css'
})
export class PaginapruebasComponent {

  constructor(private articuloService:ArticuloService){
    this.bdJuegos=this.articuloService.baseDatosJuegos
  }
  bdJuegos:Juego[];
  

  @Input() juegoSeleccionado:Juego;
  seleccion:string;

  juegoElegido(nombre:string){
  console.log("el juego elegido es "+nombre)
    //llamada al servicio para devolver el juego del filtro y mandarlo al componente.
    this.juegoSeleccionado=this.articuloService.elegirJuego(nombre);
  console.log("el juego que hemos guardado es "+this.juegoSeleccionado);


  }

}


