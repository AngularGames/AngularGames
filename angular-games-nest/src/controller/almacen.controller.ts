import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { AlmacenService } from '../../../angular-games-nest/src/service/almacen.service';

@Controller('almacen')
export class AlmacenController {
  constructor(private readonly almacenService:AlmacenService) {}



  agregarProducto(){

  }

  @Patch('stock')
  incrementarStock(articulo:string, cantidad:string){
    this.almacenService.agregarStockDeProducto(articulo,cantidad)
  }

  consultarStock(articulo:string){
    this.almacenService.consultarStockArticulo(articulo)

  }


  }

  


