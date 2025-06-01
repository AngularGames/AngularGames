import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, RouterOutlet } from '@angular/router';
import { PaginaProductoComponent } from '../pagina-producto/pagina-producto.component';
import { Juego } from '../../models/Juego';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { PaginaAlmacenComponent } from "../pagina-almacen/pagina-almacen.component";

@Component({
  selector: 'app-paginapruebas',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './paginapruebas.component.html',
  styleUrl: './paginapruebas.component.css'
})
export class PaginapruebasComponent {

  constructor(private articuloService:ArticuloService){
  }




  }




