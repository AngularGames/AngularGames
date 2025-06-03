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
    this.almacenService.listaAlmacen().subscribe(data=>this.lista=data.map(m=>m.nombre))
  }

lista:string[];
articulo:Juego;
productoBuscar:string;


buscarProducto(productoBuscar:string):Juego{
  this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.articulo=data);
  return this.articulo;

}

}
