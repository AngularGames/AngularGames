import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarritoService } from '../../services/carrito/carrito.service';
import { Carrito } from '../../models/Carrito';
import { PaginaProductoComponent } from '../pagina-producto/pagina-producto.component';

@Component({
  selector: 'app-pagina-carrito',
  imports: [CommonModule,FormsModule],
  templateUrl: './pagina-carrito.component.html',
  styleUrl: './pagina-carrito.component.css'
})
export class PaginaCarritoComponent {

  constructor(private carritoService:CarritoService,
    private paginaProducto:PaginaProductoComponent,
  ){

  }

  pagado:boolean=false;
  importeTotal:number
  listaCompra:Carrito[];
  numpedido:number;

  ngOnInit(){
      console.log("se inicia y pedimos el numero de pedido")
      this.carritoService.numeroDeCarrito().subscribe(data=>{this.numpedido=data})
      setTimeout(()=>this.carritoService.mostrarCarrito(this.numpedido).subscribe(data=>this.listaCompra=data),500);
      setTimeout(()=>this.carritoService.mostrarCarrito(this.numpedido).subscribe(data=>this.importeTotal=(data.map(m=>m.precio)).reduce((a,b)=>a+b,0)),500)
      this.listaCompra=this.paginaProducto.listaCompra
      console.log(this.listaCompra)



  }

ConfirmarCarrito(){
  this.pagado=true
  let pedido:Carrito = new Carrito(this.numpedido+1,null,null,null)
  this.carritoService.agregarAlCarrito(pedido).subscribe();
  setTimeout(()=>this.pagado=false,3000)

}

borrarDeLista(nombre:string){
  this.carritoService.eliminarDelCarrito(nombre).subscribe()
}


}
