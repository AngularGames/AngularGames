import { IsInt, IsString } from "class-validator";

export class UsuarioDto{
    @IsString()
    nombre:string;
    @IsString()
    apellido:string;
    @IsString()
    nombreUsuario:string;
    @IsString()
    password:string;
    @IsString()
    correo:string;
    @IsString()
    direccion:string;
    @IsInt()
    telefono:number;
    
    constructor(
      nombre?:string,
      apellido?:string,
      nombreUsuario?:string,
      password?:string,
      correo?:string,
      direccion?:string,
      telefono?:number,
    )
      {
        this.nombre=nombre;
        this.apellido=apellido;
        this.nombreUsuario=nombreUsuario;
        this.password=password;
        this.correo=correo;
        this.direccion=direccion;
        this.telefono=telefono;
      }
  }