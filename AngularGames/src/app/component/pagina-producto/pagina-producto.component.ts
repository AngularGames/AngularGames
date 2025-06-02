import { Component, Input } from '@angular/core';
import { Juego } from '../../models/Juego';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-producto',
  imports: [FormsModule, CommonModule],
  templateUrl: './pagina-producto.component.html',
  styleUrl: './pagina-producto.component.css'
})
export class PaginaProductoComponent {


//preguntar a antonio como hacer que al hacer click se ponga el juego
@Input() articulo:Juego



}
