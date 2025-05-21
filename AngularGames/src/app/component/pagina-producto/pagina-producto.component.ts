import { Component } from '@angular/core';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-producto',
  imports: [FormsModule,CommonModule],
  templateUrl: './pagina-producto.component.html',
  styleUrl: './pagina-producto.component.css'
})
export class PaginaProductoComponent {

  constructor(private articuloService:ArticuloService){
    console.log("creamos el articulo "+this.articuloService.juegoPulsado);
    this.articulo=this.articuloService.mostrarJuego();
  }
//preguntar a antonio como hacer que al hacer click se ponga el juego
  articulo:Juego=new Juego();
  // si dejo articulo sin inicializar no funciona
  // Si no tengo ? en el constructor, tengo que tenerlo en el html para que funcione
  // Si no tengo ? en articulo.nombre tengo que tenerlos en el contructor.
  // ¿Por qué?


  //articuloElegido(){
   // console.log("traemos un jueguito "+this.articuloService.juegoPulsado)
    //this.articuloService.mostrarJuego();
    //console.log(this.articulo);
  //}

}
