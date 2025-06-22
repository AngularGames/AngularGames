import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { PaginapruebasComponent } from '../paginapruebas/paginapruebas.component';
import { UsuarioService } from '../../services/usuarios/usuario.service';

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
    private usuarioService:UsuarioService,

  ){

    // La idea es cargar el header pidiendo mostrar almacen.
    // No lo hace hasta que tengamos la cookie y entonces cambia la variable admin a true o a admin
    // y ya muestra el almacen.
    // Bueno, hay qeu cambiarlo para que haga eso

    }

  juegoBuscar:string
  admin:string="usuario"

  /*
  ngOnInit(){
    this.router.navigate(["todos"])
  }
*/
  buscarJuego(juego:string){

    this.articuloService.elegirJuego(juego);

  }

}
