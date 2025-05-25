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
    //crear un array almacen al que, a cada juego, le añaden el idarticulo
    //mirar como añadir una propiedad si es con foreach o con map
    juego:{idArticulo}

    )
  });

  }
}


