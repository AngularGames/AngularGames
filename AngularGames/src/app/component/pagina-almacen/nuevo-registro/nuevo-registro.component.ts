import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Juego } from '../../../models/Juego';
import { AlmacenService } from '../../../services/almacen/almacen.service';
import { ArticuloService } from '../../../services/articulos/articulo.service';

@Component({
  selector: 'app-nuevo-registro',
  imports: [CommonModule,FormsModule],
  templateUrl: './nuevo-registro.component.html',
  styleUrl: './nuevo-registro.component.css'
})
export class NuevoRegistroComponent {
  constructor(private almacenService:AlmacenService,
    private articuloService:ArticuloService)

  {}

  nombre:string;
  tipoDeJuego:string;
  jmin:string;
  jmax:string;
  dificultad:string;
  descripcion:string;


  guardarRegistro(){

    let nuevoRegistro=new Juego(this.nombre,this.tipoDeJuego,this.jmin,this.jmax,this.dificultad,this.descripcion)
    this.articuloService.añadirArticulo(nuevoRegistro);
    console.log()

  }




}
