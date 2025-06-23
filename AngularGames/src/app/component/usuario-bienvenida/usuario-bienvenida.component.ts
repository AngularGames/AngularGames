import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuarios/usuario.service';
import { AlmacenService } from '../../services/almacen/almacen.service';

@Component({
  selector: 'app-usuario-bienvenida',
  imports: [],
  templateUrl: './usuario-bienvenida.component.html',
  styleUrl: './usuario-bienvenida.component.css'
})
export class UsuarioBienvenidaComponent {

constructor(private usuarioService:UsuarioService,
  private almacenService:AlmacenService,
){
  //solicita mirar el almacen con la cookie
  this.almacenService.mostrarAlmacen().subscribe(data=>this.verificacionAdmin=data)

}

nombreUsuario:string;
verificacionAdmin:boolean=false;

ngOnInit(){
  console.log(this.verificacionAdmin)
}

}
