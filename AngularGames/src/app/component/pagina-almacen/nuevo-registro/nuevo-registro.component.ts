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
  dificultad:number;
  descripcion:string;
  precio:number;

  juego:Juego;
  respuesta:string;


  guardarRegistro(){
    console.log("entramos en guardar registro")
    const nuevoJuego=new Juego(this.nombre,this.tipoDeJuego,this.jmin,this.jmax,this.dificultad,this.descripcion,this.precio)
    console.log(nuevoJuego)
    this.articuloService.añadirArticulo(nuevoJuego).subscribe(data=>this.respuesta=data)
    console.log("esta debería ser la respuesta "+this.respuesta)


  }

  buscar(juego:string){
    console.log("vamos a buscar ",juego)
    this.articuloService.elegirJuego(juego).subscribe({
      next: data=> this.respuesta="TODO OK",
      error: err=> this.respuesta="MALAMENTE TODO"
    })
    console.log("hemos mandado buscar el juego")

  }




}
