import { Component } from '@angular/core';
import { NuevoRegistroComponent } from "./nuevo-registro/nuevo-registro.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AlmacenService } from '../../services/almacen/almacen.service';

@Component({
  selector: 'app-pagina-almacen',
  imports: [NuevoRegistroComponent,CommonModule,FormsModule,RouterModule],
  templateUrl: './pagina-almacen.component.html',
  styleUrl: './pagina-almacen.component.css'
})
export class PaginaAlmacenComponent {

  constructor( private almacen:AlmacenService){
    
  }



}
