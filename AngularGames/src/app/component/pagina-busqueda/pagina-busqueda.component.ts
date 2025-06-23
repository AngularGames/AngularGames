import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticuloService } from '../../services/articulos/articulo.service';
import { Juego } from '../../models/Juego';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-pagina-busqueda',
  imports: [RouterModule,FormsModule,CommonModule,MatIconModule],
  templateUrl: './pagina-busqueda.component.html',
  styleUrl: './pagina-busqueda.component.css'
})
export class PaginaBusquedaComponent {
  constructor(private articulosService:ArticuloService){
    this.articulosService.CargarListaJuegos().subscribe(data=>this.juegosCargados=data)

  }

  filtro:string
  jugadoresMin:number=2;
  jugadoresMax:number=4;
  filtroJugadores:boolean=false
  juegosPorJugadores:Juego[]=[];
  showTopButton: any;
  juegosCargados:Juego[]=[];

  capitalizeFirstLetter(text: string): string {
    if (!text) return '';
    return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  }

  buscarJuego(nombre:string){
    const terminoFormateado = this.capitalizeFirstLetter(nombre);
    console.log(terminoFormateado); // Para probar que funciona
    this.juegosCargados.map(j=>j.nombre==terminoFormateado)
    }

  seleccion(seleccion:string){
    this.filtro=seleccion;
    console.log(this.filtro)
  }

  jugadores(){
    console.log("jugadores min ",this.jugadoresMin)
    console.log("jugadores max ",this.jugadoresMax)
    this.filtrar(this.jugadoresMin,this.jugadoresMax)

  }

  filtrar(jmin:number,jmax:number){
    this.filtroJugadores=true
    console.log("entra en filtrar",jmin," y ",jmax)
    this.articulosService.filtrarJugadores(jmin,jmax).subscribe(data=>this.juegosPorJugadores=data)

  }

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showTopButton = window.scrollY > 350;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }


}
