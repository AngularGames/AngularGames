import { Component, Input } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../services/articulos/articulo.service';

@Component({
  selector: 'app-pagina-producto',
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina-producto.component.html',
  styleUrl: './pagina-producto.component.css'
})
export class PaginaProductoComponent {
  constructor(private articuloService:ArticuloService){
      this.listaJuegos=this.articuloService.listaJuegos;
      console.log(this.listaJuegos)
  }

listaJuegos:string[]=[];
articulo:Juego;
productoBuscar:string;


buscarProducto(productoBuscar:string):Juego{
  this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.articulo=data);
  return this.articulo;

}

}
