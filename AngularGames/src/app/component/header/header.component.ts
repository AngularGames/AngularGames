import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { PaginapruebasComponent } from '../paginapruebas/paginapruebas.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(
    private router:Router,
    private articuloService:ArticuloService,

  ){}

  juegoBuscar:string

  /*
  ngOnInit(){
    this.router.navigate(["todos"])
  }
*/
  buscarJuego(juego:string){
    this.articuloService.elegirJuego(juego);

  }

}
