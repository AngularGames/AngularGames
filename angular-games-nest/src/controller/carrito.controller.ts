import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CarritoDto } from 'src/Dtos/CarritoDto';
import { CarritoService } from 'src/service/carrito.service';

@Controller('carrito')
export class CarritoController {
  constructor(private readonly carritoService: CarritoService) {}

@Post("agregarCarrito")
agregarAlCarrito(@Body() pedido:CarritoDto){
  this.carritoService.agregarAlCarrito(pedido);
}

@Get("mostrar")
async mostrarCarrito():Promise<CarritoDto[]>{
  return await this.carritoService.mostrarCarrito()
}


}
