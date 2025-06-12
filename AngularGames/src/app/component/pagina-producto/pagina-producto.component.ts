import { PaginapruebasComponent } from './../paginapruebas/paginapruebas.component';
import { Component, Input } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { AlmacenService } from '../../services/almacen/almacen.service';
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
    private carritoService:CarritoService,
    private paginaPruebas:PaginapruebasComponent
    //inyectar paginaprueba
  ){
    this.articuloService.mostrarTodos().subscribe(data=>this.listaCargada=data);
    console.log("este es el juego elegido en todos "+this.paginaPruebas.juegoElegido)
    console.log(this.productoBuscar)
    this.buscarProducto(this.productoBuscar)

  }

listaCargada:string[];
select:string;
articulo:Juego;
productoBuscar:string;
unidades:number;
numpedido:number=1
listaCompra:Carrito[];
importeTotal:number
carrito:boolean=false


buscarProducto(productoBuscar:string):Juego{
  console.log(productoBuscar)
  this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.articulo=data);
  return this.articulo;

}

agregarAlCarrito(){

  let total:number=this.unidades*this.articulo.precio
  let pedido:Carrito = new Carrito(this.numpedido,this.articulo.nombre,this.unidades,total)
  this.carritoService.agregarAlCarrito(pedido);

}

mostrarCarrito(){
  this.carrito=true
  this.listaCompra= this.carritoService.mostrarCarrito(this.numpedido);
  console.log(this.listaCompra)
  let dinero:number[]=this.listaCompra.map(m=>m.precio)
  console.log(dinero)
  this.importeTotal=dinero.reduce((a,b)=>a+b,0)
  console.log(this.importeTotal)
}

ConfirmarCarrito(){

  this.numpedido=this.numpedido+1;

}


}
