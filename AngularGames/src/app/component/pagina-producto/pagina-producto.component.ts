import { PaginapruebasComponent } from './../paginapruebas/paginapruebas.component';
import { Component, Input } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { AlmacenService } from '../../services/almacen/almacen.service';
import { Carrito } from '../../models/Carrito';
import { CarritoService } from '../../services/carrito/carrito.service';
import { routes } from '../../app.routes';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pagina-producto',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './pagina-producto.component.html',
  styleUrl: './pagina-producto.component.css'
})
export class PaginaProductoComponent {
  constructor(
    private articuloService:ArticuloService,
    private almacenService:AlmacenService,
    private carritoService:CarritoService,
    private paginaPruebas:PaginapruebasComponent,
    private route:ActivatedRoute,
  ){

  }

listaCargada:string[];
select:string;
articulo:Juego;
productoBuscar:string;
unidades:number;
numpedido:number;
listaCompra:Carrito[];
importeTotal:number
carrito:boolean=false
stockArticulo:number;
pagado:boolean=false;

ngOnInit(){
  const nombreJuego:string = this.route.snapshot.paramMap.get('nombre');
  console.log("el nombre del juego es "+nombreJuego)
this.buscarProducto(nombreJuego);
this.stockProducto(nombreJuego);
this.numpedido=this.carritoService.numeroDeCarrito();

}

buscarProducto(productoBuscar:string):Juego{
  console.log(productoBuscar)
  this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.articulo=data);
  return this.articulo;
}

// PREGUNTAR A ANTONIO

stockProducto(nombre:string):number{
  console.log("este es el nombre del juego para stock "+nombre)
//  this.almacenService.consultarStock(nombre).subscribe(data=>this.stockArticulo=data)
  this.almacenService.consultarStock(nombre).subscribe(data=>this.stockArticulo=data)
  console.log(this.stockArticulo)
  return this.stockArticulo

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
  console.log(this.numpedido)
  this.pagado=true


}


}
