import { PaginapruebasComponent } from './../paginapruebas/paginapruebas.component';
import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { AlmacenService } from '../../services/almacen/almacen.service';
import { Carrito } from '../../models/Carrito';
import { CarritoService } from '../../services/carrito/carrito.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map } from 'rxjs';

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
added:boolean=false;
mensaje:string

ngOnInit(){
  const nombreJuego:string = this.route.snapshot.paramMap.get('nombre');
this.buscarProducto(nombreJuego);
this.stockProducto(nombreJuego);
this.numeroPedido();

}


buscarProducto(productoBuscar:string){
  this.articuloService.elegirJuego(productoBuscar).subscribe(data=>this.articulo=data);
}

numeroPedido(){
  this.carritoService.numeroDeCarrito().subscribe(data=>{
    console.log("este es el numero de pedido de service front "+data);
    this.numpedido=data})
}
stockProducto(nombre:string){
  this.almacenService.consultarStock(nombre).subscribe(data=>{
    this.stockArticulo=data}
  )
}


 agregarAlCarrito(){

  let total:number=this.unidades*this.articulo.precio
  let pedido:Carrito = new Carrito(this.numpedido,this.articulo.nombre,this.unidades,total)
  this.carritoService.mostrarCarrito(this.numpedido).subscribe(data=>{
    if (data.find(m=>m.nombreArticulo==pedido.nombreArticulo)){
      this.carritoService.cambiarUnidades(pedido).subscribe(data=>{this.addedCarrito(),this.ngOnInit(),this.mensaje=data,alert(this.mensaje)});
    }else{
      this.carritoService.agregarAlCarrito(pedido).subscribe(data=>{this.addedCarrito(),this.ngOnInit(),(this.mensaje="añadido",data),alert(this.mensaje)});
    }
  }

  )
 }
/*
mostrarCarrito(){
  console.log("MOSTRAR CARRITO MUESTRA CARRITO")
  this.carrito=true
  this.carritoService.mostrarCarrito(this.numpedido).subscribe(data=>this.listaCompra=data)
  this.carritoService.mostrarCarrito(this.numpedido).subscribe(data=>this.importeTotal=(data.map(m=>m.precio)).reduce((a,b)=>a+b,0))
  this.almacenService.consultarStock(this.articulo.nombre).subscribe(data=>this.stockArticulo=data)
}
  */

addedCarrito(){
  this.added=true
  setTimeout(()=>this.added=false,2000)

}

borrarDeLista(nombre:string){
  this.carritoService.eliminarDelCarrito(nombre).subscribe()
}

}


