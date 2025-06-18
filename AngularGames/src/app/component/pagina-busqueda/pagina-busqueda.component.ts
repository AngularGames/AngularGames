import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { Juego } from '../../models/Juego';

@Component({
  selector: 'app-pagina-busqueda',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './pagina-busqueda.component.html',
  styleUrl: './pagina-busqueda.component.css'
})
export class PaginaBusquedaComponent {
  constructor(private articulosService:ArticuloService){

  }

  filtro:string
  jugadoresMin:number=2;
  jugadoresMax:number=4;
  filtroJugadores:boolean=false
  juegosPorJugadores:Juego[]=[];

  seleccion(seleccion:string){
    this.filtro=seleccion;
    console.log(this.filtro)
  }

  jugadores(){
    console.log("jugadores min ",this.jugadoresMin)
    console.log("jugadores max ",this.jugadoresMax)
    this.filtrar(this.jugadoresMin,this.jugadoresMax)

  }

  filtrar(jmin:number,jmax:number){
    this.filtroJugadores=true
    console.log("entra en filtrar",jmin," y ",jmax)
    this.articulosService.filtrarJugadores(jmin,jmax).subscribe(data=>this.juegosPorJugadores=data)

  }

}
