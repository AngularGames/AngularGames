import { Injectable } from '@angular/core';
import { ArticuloService } from '../articulos/articulo.service';
import { Juego } from '../../models/Juego';
import { productoAlmacen } from '../../models/productoAlmacen';


@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor(private articuloService:ArticuloService){
  }


  cambiarStock(juego:string, cantidad:number){

    

  }



}


