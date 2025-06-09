import { Component, Input } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { AlmacenService } from '../../services/almacen/almacen.service';
import { productoAlmacen } from '../../models/productoAlmacen';
import { Carrito } from '../../models/Carrito';
import { CarritoService } from '../../services/carrito/carrito.service';
import {MatTableModule} from '@angular/material/table';

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
unidades:number;
numpedido:number=1
listaCompra:Carrito[]=[];
importeTotal:number=0;


buscarProducto(productoBuscar:string):Juego{
  this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.articulo=data);
  return this.articulo;

}

agregarAlCarrito(){
  let total:number=this.unidades*this.articulo.precio
  console.log("el total es "+total);

  let pedido:Carrito = new Carrito(this.numpedido,this.articulo.nombre,this.unidades,total)
  console.log("el pedido es este" + pedido.cantidad+pedido.nombreArticulo+total)
  console.log(pedido)

  this.carritoService.agregarAlCarrito(pedido)
  this.listaCompra=this.carritoService.mostrarCarrito(this.numpedido);
  this.importeTotal=this.carritoService.totalCarrito
  console.log("este es la variable importetotal "+this.importeTotal)
}

ConfirmarCarrito(){
  console.log("mando este número de pedido "+this.numpedido)

  this.numpedido=this.numpedido+1;

}

}
