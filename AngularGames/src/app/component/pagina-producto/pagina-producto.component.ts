import { Component, Input } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { AlmacenService } from '../../services/almacen/almacen.service';
import { productoAlmacen } from '../../models/productoAlmacen';
import { Carrito } from '../../models/Carrito';
import { CarritoService } from '../../services/carrito/carrito.service';

@Component({
  selector: 'app-pagina-producto',
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina-producto.component.html',
  styleUrl: './pagina-producto.component.css'
})
export class PaginaProductoComponent {
  constructor(
    private articuloService:ArticuloService,
    private almacenService:AlmacenService,
    private carritoService:CarritoService
  ){
    this.articuloService.mostrarTodos().subscribe(data=>this.listaCargada=data);

  }

listaCargada:string[];
select:string;
articulo:Juego;
productoBuscar:string;
select2:string;
unidades:number


buscarProducto(productoBuscar:string):Juego{
  this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.articulo=data);
  return this.articulo;

}

agregarAlCarrito(){
  let pedido:Carrito = new Carrito(this.articulo.nombre,this.unidades)
  console.log("el pedido es este" + pedido.cantidad+pedido.nombre)
  this.carritoService.agregarAlCarrito(pedido)
}


}
