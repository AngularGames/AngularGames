import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticuloService } from '../../services/articulos/articulo.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule,FormsModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private articuloService:ArticuloService){}

  juegoBuscar:string


  buscarJuego(juego:string){
    this.articuloService.elegirJuego(juego);
    
  }

}
