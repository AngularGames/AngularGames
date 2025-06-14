import { Injectable } from '@nestjs/common';
import { Carrito } from 'src/Model/Carrito';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarritoDto } from 'src/Dtos/CarritoDto';

@Injectable()
export class CarritoService {
  constructor(
    @InjectRepository(Carrito) private carritoRepository:Repository<Carrito>
  )
  {}


async agregarAlCarrito(pedido:CarritoDto):Promise<CarritoDto>{
  return await this.carritoRepository.save(pedido)

}

eliminarDelCarrito(nombreArticulo:string){
  // Deberia de borrar el articulo en el que hace clicl
  this.carritoRepository.delete(nombreArticulo);

}

mostrarCarrito(numPedido:number):Promise<CarritoDto[]>{
  return this.carritoRepository.findBy({numPedido:numPedido});
}

numeroDeCarrito():Promise<CarritoDto[]>{
  return this.carritoRepository.find();
}



}
