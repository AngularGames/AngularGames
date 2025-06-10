import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PaginaProductoComponent } from '../pagina-producto/pagina-producto.component';
import { Juego } from '../../models/Juego';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { PaginaAlmacenComponent } from "../pagina-almacen/pagina-almacen.component";

@Component({
  selector: 'app-paginapruebas',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './paginapruebas.component.html',
  styleUrl: './paginapruebas.component.css'
})
export class PaginapruebasComponent {

  constructor(
    private articuloService:ArticuloService,
    private paginaProducto:PaginaProductoComponent,
  ){
    this.articuloService.CargarListaJuegos().subscribe(data=>this.juegosCargados=data)
  }

  juegoElegido:string;
  productoBuscar:string;
  resultado:Juego;
  visible:boolean=false;
  juegosCargados:Juego[]=[];


  buscarProducto(productoBuscar:string):Juego{
     this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.resultado=data);
     this.visible=true;
     return this.resultado;

  }

}




