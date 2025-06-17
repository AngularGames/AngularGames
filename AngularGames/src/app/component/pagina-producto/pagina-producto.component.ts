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
numpedido:number=1
listaCompra:Carrito[];
importeTotal:number
carrito:boolean=false
stockArticulo:number;
pagado:boolean=false;

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
// Antonio. Todo lo hace UN CLICK POR DETRÁS. No sé cómo hacerlo. timer? meter todo en una función y cuando esté entonces que haga el resto? no sé
  let total:number=this.unidades*this.articulo.precio
  let pedido:Carrito = new Carrito(this.numpedido,this.articulo.nombre,this.unidades,total)
  this.carritoService.agregarAlCarrito(pedido).subscribe();
  this.almacenService.consultarStock(this.articulo.nombre).subscribe(data=>
  this.stockArticulo=data)
  this.mostrarCarrito()

}

mostrarCarrito(){
  console.log("MOSTRAR CARRITO MUESTRA CARRITO")
  this.carrito=true
  this.carritoService.mostrarCarrito(this.numpedido).subscribe(data=>this.listaCompra=data)
  this.carritoService.mostrarCarrito(this.numpedido).subscribe(data=>this.importeTotal=(data.map(m=>m.precio)).reduce((a,b)=>a+b,0))
}

ConfirmarCarrito(){

  this.pagado=true

}

borrarDeLista(nombre:string){
  this.carritoService.eliminarDelCarrito(nombre).subscribe()
  this.mostrarCarrito();
}

}


