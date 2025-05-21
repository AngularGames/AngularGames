import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Juego } from '../../models/Juego';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina-principal',
  imports: [RouterModule,CommonModule,FormsModule],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.css'
})
export class PaginaPrincipalComponent {

constructor(private articuloService:ArticuloService){
  this.bdJuegos=this.articuloService.baseDatosJuegos
}
bdJuegos:Juego[];

juegoElegido(juego:string){
  console.log("ponemos el juego en la variable "+juego);
  this.articuloService.juegoPulsado=juego
  console.log(this.articuloService.juegoPulsado)

}

}
