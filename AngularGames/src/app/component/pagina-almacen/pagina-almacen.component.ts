import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { productoAlmacen } from '../../models/productoAlmacen';
import { Stock } from '../../models/Stock';
import { AlmacenService } from '../../services/almacen/almacen.service';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-pagina-almacen',
  imports: [CommonModule,FormsModule,RouterModule, MatIconModule],
  templateUrl: './pagina-almacen.component.html',
  styleUrl: './pagina-almacen.component.css'
})
export class PaginaAlmacenComponent {
  showTopButton: boolean;

  constructor( private almacen:AlmacenService){
  }

  ngOnInit(){

    this.almacen.listaAlmacen().subscribe(data=>this.almacenDB=data);
    this.almacen.listaAlmacen().subscribe(data=>this.almacenDBBajo=data.filter(m=>m.cantidad<4));
    this.almacen.listaAlmacen().subscribe(data=>this.almacenDBMedio=data.filter(m=>m.cantidad<7&&m.cantidad>3));

  }

  almacenDB:productoAlmacen[];
  almacenDBBajo:productoAlmacen[];
  almacenDBMedio:productoAlmacen[];

  stock:boolean=false
  nombreJuego:string;
  cantidad:number;
  todos:boolean=true;
  filtroBajo:boolean=false;
  filtroMedio:boolean=false;
  filtroElegido:string;
  mensaje:string;
  almacenFiltro:productoAlmacen[];


  cambiarStock(){
    this.stock=!this.stock
    console.log(this.stock)
  }

  /*
  addStock(){
    let pedidostock:Stock= new Stock(this.nombreJuego,this.cantidad)
    console.log(this.nombreJuego)
    console.log(this.cantidad)
    this.almacen.agregarStock(pedidostock).subscribe()
    this.mensaje="Stock fijado. Pulsa ACTUALIZAR"
    console.log(this.mensaje)
    setTimeout(() => {this.ngOnInit()},250);
  }
    */

  guardarStock(nombre:string,cantidad:number){
    let pedidostock:Stock= new Stock(nombre,cantidad)
    console.log(nombre)
    console.log(cantidad)
    this.almacen.agregarStock(pedidostock).subscribe()
    this.mensaje="Stock fijado. Pulsa ACTUALIZAR"
    console.log(this.mensaje)
  }

  cambioAlmacen(almacen:string){
    console.log(almacen)
    if (almacen=="todos"){
      this.almacenFiltro=this.almacenDB;
    };
    if (almacen=="filtroBajo"){
      this.almacenFiltro=this.almacenDBBajo;
    };
    if (almacen=="filtroMedio"){
      this.almacenFiltro=this.almacenDBMedio;
    };
    console.log(this.almacenFiltro)
  }

  actualizar(){
    this.ngOnInit()
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 350;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
