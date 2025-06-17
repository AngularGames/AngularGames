import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Juego } from '../../models/Juego';
import { ArticuloService } from '../../services/articulos/articulo.service';

@Component({
  selector: 'app-pagina-filtro',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './pagina-filtro.component.html',
  styleUrl: './pagina-filtro.component.css'
})
export class PaginaFiltroComponent {

    constructor(
      private articuloService:ArticuloService,
      private route:ActivatedRoute,

    ){}


  juegoElegido:string;
  productoBuscar:string;
  resultado:Juego;
  visible:boolean=false;
  juegosCargados:Juego[]=[];
  dificultad:string;

  ngOnInit(){
    this.dificultad = this.route.snapshot.paramMap.get('dificultad');
    console.log("el nombre del juego es "+this.dificultad)
  this.filtrarDificultad(this.dificultad);
  }

  filtrarDificultad(dificultad:string):Juego[]{
    this.juegosCargados=[]
    this.articuloService.filtrarDificultad(parseInt(dificultad)).subscribe(data=>this.juegosCargados=data)
    console.log(this.juegosCargados)

    return this.juegosCargados;
  }

}
