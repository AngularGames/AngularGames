import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Juego } from '../../models/Juego';
import { ArticuloService } from '../../services/articulos/articulo.service';
import {MatIconModule} from '@angular/material/icon'
@Component({
  selector: 'app-paginapruebas',
  imports: [RouterModule, CommonModule, FormsModule, MatIconModule],
  templateUrl: './paginapruebas.component.html',
  styleUrl: './paginapruebas.component.css'
})
export class PaginapruebasComponent {
showTopButton: any;



  constructor(
    private articulosService:ArticuloService,
    //private paginaProducto:PaginaProductoComponent,
  ){
    this.articulosService.CargarListaJuegos().subscribe(data=>this.juegosCargados=data)
  }

  botonArriba
  juegoElegido:string;
  productoBuscar:string;
  resultado:Juego;
  visible:boolean=false;
  juegosCargados:Juego[]=[];


  buscarProducto(productoBuscar:string):Juego{
     this.articulosService.elegirJuego(productoBuscar).subscribe(data=>this.resultado=data);
     this.visible=true;
     return this.resultado;
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 350;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}




