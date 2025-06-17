import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { productoAlmacen } from '../../models/productoAlmacen';
import { AlmacenService } from '../../services/almacen/almacen.service';
import { Stock } from '../../models/stock';

@Component({
  selector: 'app-pagina-almacen',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './pagina-almacen.component.html',
  styleUrl: './pagina-almacen.component.css'
})
export class PaginaAlmacenComponent {

  constructor( private almacen:AlmacenService){
  }

  ngOnInit(){
    this.almacen.listaAlmacen().subscribe(data=>this.almacenDB=data)
    console.log(this.almacenDB);
  }

  almacenDB:productoAlmacen[];
  stock:boolean=false
  nombreJuego:string;
  cantidad:number;

  cambiarStock(){
    this.stock=!this.stock
    console.log(this.stock)
  }

  addStock(){
    let pedidostock:Stock= new Stock(this.nombreJuego,this.cantidad)
    console.log(this.nombreJuego)
    console.log(this.cantidad)
    this.almacen.agregarStock(pedidostock)
  }



}
