import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ArticuloService } from '../../../services/articulos/articulo.service';
import { Juego } from '../../../models/Juego';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-lista-busqueda',
  imports: [FormsModule,CommonModule,MatIconModule, RouterModule],
  templateUrl: './lista-busqueda.component.html',
  styleUrl: './lista-busqueda.component.css'
})
export class ListaBusquedaComponent {
  showTopButton: any;



  constructor(
    private articulosService:ArticuloService,
    private route:ActivatedRoute,
    //private paginaProducto:PaginaProductoComponent,
  ){
    const nombreJuego:string = this.route.snapshot.paramMap.get('nombre');

    this.articulosService.CargarListaJuegos().subscribe(data=>{
      this.juegosFiltrados=data.filter(m=>m.nombre==nombreJuego);
      if(this.juegosFiltrados.length==0){
        this.error=true;
      }
    })

/*
    this.articulosService.CargarListaJuegos().subscribe(data=>{
      this.juegosCargados=data;
      this.juegosFiltrados = this.juegosCargados.filter(m=>m.nombre=nombreJuego)
    })

    */
  }

  juegoElegido:string;
  productoBuscar:string;
  resultado:Juego;
  visible:boolean=false;
  juegosCargados:Juego[]=[];
  juegosFiltrados:Juego[]=[];
  error:boolean;



  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 350;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}




