import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Juego } from 'src/Model/Juego';
import { LessThan, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';

@Injectable()
export class ArticulosService {
constructor(@InjectRepository(Juego) private juegoRepository:Repository<Juego>){}
}