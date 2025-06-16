import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { productoAlmacen } from 'src/Model/productoAlmacen';
import { AlmacenService } from 'src/service/almacen.service';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService:AlmacenService) {}


// Funciona. sube el stock X
  @Patch('stock')
  incrementarStock(@Query("articulo") articulo:string,@Query("cantidad") cantidad:string){
    this.almacenService.agregarStockDeProducto(articulo,cantidad)
  }

  

  //Devuelve el Stock
  @Get("articulo/:articulo")
   async consultarStock(@Param("articulo") articulo:string):Promise<number>{
    const stock:number=await this.almacenService.consultarStockArticulo(articulo)
    console.log("stock controller "+stock)
   return stock
    
  }
@Get("lista")
    consultarAlmacen():Promise<productoAlmacen[]>{
      return this.almacenService.mostrarInventario();
    }

  }

  


