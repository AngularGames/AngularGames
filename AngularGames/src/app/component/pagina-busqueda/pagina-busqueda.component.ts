import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticuloService } from '../../services/articulos/articulo.service';

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
  jugadoresMin:number=2
  jugadoresMax:number=4

  seleccion(seleccion:string){
    this.filtro=seleccion;
    console.log(this.filtro)
  }

}
