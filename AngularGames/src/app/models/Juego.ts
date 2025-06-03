export class Juego{

  idArticulo:number;
  nombre:string;
  tipo:string;
  jugadoresMin:string;
  jugadoresMax:string;
  dificultad:string;
  descripcion:string;
  precio:number;

constructor(idArticulo?:number,nombre?:string,tipo?:string,jugadoresMin?:string,jugadoresMax?:string,dificultad?:string,descripcion?:string,precio?:number){

  this.idArticulo=idArticulo
  this.nombre=nombre;
  this.tipo=tipo;
  this.jugadoresMin=jugadoresMin;
  this.jugadoresMax=jugadoresMax;
  this.dificultad=dificultad;
  this.descripcion=descripcion;
  this.precio=precio;

}

}