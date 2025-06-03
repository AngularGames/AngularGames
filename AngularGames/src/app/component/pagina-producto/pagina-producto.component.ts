import { Component, Input } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { AlmacenService } from '../../services/almacen/almacen.service';
import { productoAlmacen } from '../../models/productoAlmacen';

@Component({
  selector: 'app-pagina-producto',
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina-producto.component.html',
  styleUrl: './pagina-producto.component.css'
})
export class PaginaProductoComponent {
  constructor(
    private articuloService:ArticuloService,
    private almacenService:AlmacenService
  ){
    this.articuloService.mostrarTodos().subscribe(data=>this.lista=data)
    console.log(this.lista)
  }

lista:string[];
select:string;
articulo:Juego;
productoBuscar:string;


buscarProducto(productoBuscar:string):Juego{
  console.log(this.lista)
  this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.articulo=data);
  return this.articulo;

}

}
