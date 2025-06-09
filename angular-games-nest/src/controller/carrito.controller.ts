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
  console.log("este pedido ha entrado"+pedido);
  console.log(pedido.cantidad,pedido.nombreArticulo,pedido.precio)
  this.carritoService.agregarAlCarrito(pedido);
}

@Get("mostrar/:pedido")
async mostrarCarrito(@Param("pedido") pedido:number):Promise<CarritoDto[]>{
  return await this.carritoService.mostrarCarrito(pedido)
}


}
