import { PaginapruebasComponent } from './../paginapruebas/paginapruebas.component';
import { Component, Input } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { AlmacenService } from '../../services/almacen/almacen.service';
import { Carrito } from '../../models/Carrito';
import { CarritoService } from '../../services/carrito/carrito.service';
import { PaginaPrincipalComponent } from '../pagina-principal/pagina-principal.component';

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
    private carritoService:CarritoService,
    private paginaPrueba:PaginapruebasComponent,
    //inyectar paginaprueba
  ){
    this.articuloService.mostrarTodos().subscribe(data=>this.listaCargada=data);
    
  //this.buscarproducto=nombreitem de pagina prueba (o asignar eso a productobuscar y llamar a la funcion)
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
  console.log(productoBuscar)
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
