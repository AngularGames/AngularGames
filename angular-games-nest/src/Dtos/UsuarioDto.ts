import { IsInt, IsString } from "class-validator";

export class UsuarioDto{
    @IsString()
    nombreUsuario:string;
    @IsString()
    roles:string;

    
    constructor(
      nombreUsuario?:string,
      roles?:string,
    )
      {
        this.nombreUsuario=nombreUsuario;
        this.roles=roles;
      }
  }