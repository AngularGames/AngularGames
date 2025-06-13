import { Component } from '@angular/core';
import { Juego } from '../../models/Juego';

@Component({
  selector: 'app-filtro',
  imports: [],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {

  listaFiltrada:Juego[]=[];

  filtrarPorDificultad(){



  }


}
