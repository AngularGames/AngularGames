import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Juego } from '../../models/Juego';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina-filtro-tipo',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './pagina-filtro-tipo.component.html',
  styleUrl: './pagina-filtro-tipo.component.css'
})
export class PaginaFiltroTipoComponent {

  constructor(
    private articuloService:ArticuloService,
    private route:ActivatedRoute,

  ){}


juegoElegido:string;
productoBuscar:string;
resultado:Juego;
visible:boolean=false;
juegosCargados:Juego[]=[];
tipo:string;

ngOnInit(){
  this.tipo = this.route.snapshot.paramMap.get('tipo');
  console.log("el tipo del juego es "+this.tipo)
this.filtrarTipo(this.tipo);
}

filtrarTipo(tipo:string):Juego[]{
  this.articuloService.filtrarTipo(tipo).subscribe(data=>this.juegosCargados=data)
  console.log("juegos cargados")

  return this.juegosCargados;
}

}

