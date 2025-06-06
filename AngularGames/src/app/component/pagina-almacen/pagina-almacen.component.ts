import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { productoAlmacen } from '../../models/productoAlmacen';
import { AlmacenService } from '../../services/almacen/almacen.service';

@Component({
  selector: 'app-pagina-almacen',
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './pagina-almacen.component.html',
  styleUrl: './pagina-almacen.component.css'
})
export class PaginaAlmacenComponent {

  constructor( private almacen:AlmacenService){
    this.almacen.listaAlmacen().subscribe(data=>this.almacenDB=data)
    console.log(this.almacenDB);
  }

  almacenDB:productoAlmacen[];



}
