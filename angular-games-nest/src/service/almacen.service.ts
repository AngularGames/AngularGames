import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Juego } from 'src/Model/Juego';
import { productoAlmacen } from 'src/Model/productoAlmacen';
import { LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class ArticulosService {
constructor(@InjectRepository(Juego) private juegoRepository:Repository<Juego>){}



async agregarProducto(producto:productoAlmacen):Promise<boolean>{
    
    const resultado = await this.juegoRepository.save(producto);
    if(resultado) return true

}

}