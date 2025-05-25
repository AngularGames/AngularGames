import { Injectable } from '@angular/core';
import { ArticuloService } from '../articulos/articulo.service';
import { Juego } from '../../models/Juego';
import { productoAlmacen } from '../../models/productoAlmacen';


@Injectable({
  providedIn: 'root'
})
export class AlmacenService {

  constructor(private articuloService:ArticuloService){
    this.baseDatosAlmacen()
  }

  bdAlmacen:productoAlmacen[]


  baseDatosAlmacen(){
    var nart:number=0;
    var idArticulo:string=`Jue${nart+1}`
    nart++;
  this.articuloService.baseDatosJuegos.forEach(juego =>{
    this.bdAlmacen.push(new productoAlmacen(idArticulo,juego.tipo,juego,1))
  });

  console.log(this.bdAlmacen);
  }


}


