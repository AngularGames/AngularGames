export class Juego{
  idJuego:string;
  nombre:string;
  tipo:string;
  jugadoresMin:string;
  jugadoresMax:string;
  dificultad:string;

constructor(idJuego:string,nombre:string,tipo:string,jugadoresMin:string,jugadoresMax:string,dificultad:string){

  this.idJuego=idJuego;
  this.nombre=nombre;
  this.tipo=tipo;
  this.jugadoresMin=jugadoresMin;
  this.jugadoresMax=jugadoresMax;
  this.dificultad=dificultad;

}

}