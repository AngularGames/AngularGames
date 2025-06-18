import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { productoAlmacen } from '../../models/productoAlmacen';
import { Stock } from '../../models/Stock';
import { AlmacenService } from '../../services/almacen/almacen.service';


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
    this.almacen.listaAlmacen().subscribe(data=>this.almacenDB=data);
    this.almacen.listaAlmacen().subscribe(data=>this.almacenDBBajo=data.filter(m=>m.cantidad<7&&m.cantidad>3));
    this.almacen.listaAlmacen().subscribe(data=>this.almacenDBBajo=data.filter(m=>m.cantidad<4));


    console.log(this.almacenDB);
    console.log(this.almacenDBBajo);
    console.log(this.almacenDBMedio);
  }

  almacenDB:productoAlmacen[];
  stock:boolean=false
  nombreJuego:string;
  cantidad:number;
  almacenDBBajo:productoAlmacen[];
  almacenDBMedio:productoAlmacen[];
  todos:boolean=true;
  filtroBajo:boolean=false;
  filtroMedio:boolean=false;
  filtroElegido:string;



  cambiarStock(){
    this.stock=!this.stock
    console.log(this.stock)
  }

  addStock(){
    let pedidostock:Stock= new Stock(this.nombreJuego,this.cantidad)
    console.log(this.nombreJuego)
    console.log(this.cantidad)
    this.almacen.agregarStock(pedidostock).subscribe()
  }

  filtro(){
    this.todos=false
    this.filtroBajo=true

  }



}
