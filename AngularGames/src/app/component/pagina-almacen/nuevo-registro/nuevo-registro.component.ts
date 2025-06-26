import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Juego } from '../../../models/Juego';
import { AlmacenService } from '../../../services/almacen/almacen.service';
import { ArticuloService } from '../../../services/articulos/articulo.service';
import { productoAlmacen } from '../../../models/productoAlmacen';

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

  idAlmacen:number;
  nombre:string;
  tipoDeJuego:string;
  jmin:number;
  jmax:number;
  dificultad:number;
  descripcion:string;
  precio:number;
  imagen:string;

  juego:Juego;
  respuesta:string;
  confirmar:boolean=false;


  guardarRegistro(){
    const nuevoJuego=new Juego(this.nombre,this.tipoDeJuego,this.jmin,this.jmax,this.dificultad,this.descripcion,this.precio,this.imagen)
    this.articuloService.añadirArticulo(nuevoJuego).subscribe(data=>this.respuesta=data)
    const nuevoAlmacen= new productoAlmacen(this.nombre,"juego",5);
    this.almacenService.agregarAlmacen(nuevoAlmacen).subscribe(data=>{
      this.respuesta=data;
      this.confirmar=true;
      setTimeout(()=>this.confirmar=false,2000)
    })

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
