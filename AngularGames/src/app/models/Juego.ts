export class Juego{

  nombre:string;
  tipo:string;
  jugadoresMin:string;
  jugadoresMax:string;
  dificultad:number;
  descripcion:string;
  precio:number;

constructor(nombre?:string,tipo?:string,jugadoresMin?:string,jugadoresMax?:string,dificultad?:number,descripcion?:string,precio?:number){

  this.nombre=nombre;
  this.tipo=tipo;
  this.jugadoresMin=jugadoresMin;
  this.jugadoresMax=jugadoresMax;
  this.dificultad=dificultad;
  this.descripcion=descripcion;
  this.precio=precio;

}

}