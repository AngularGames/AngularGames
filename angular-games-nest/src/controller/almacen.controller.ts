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
import { AlmacenService } from 'src/service/almacen.service';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService:AlmacenService) {}



  @Patch('stock')
  incrementarStock(@Query("articulo") articulo:string,@Query("cantidad") cantidad:string){
    this.almacenService.agregarStockDeProducto(articulo,cantidad)
  }

  @Get("articulo/:articulo")
  consultarStock(@Param("articulo") articulo:string){
    this.almacenService.consultarStockArticulo(articulo)
  }


  }

  


