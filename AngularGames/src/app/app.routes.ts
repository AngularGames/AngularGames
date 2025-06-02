import { Routes } from '@angular/router';
import { NuevoRegistroComponent } from './component/pagina-almacen/nuevo-registro/nuevo-registro.component';
import { PaginaAlmacenComponent } from './component/pagina-almacen/pagina-almacen.component';

export const routes: Routes = [
  {path:"almacen", component:PaginaAlmacenComponent},
  {path:"nuevoProducto", component:NuevoRegistroComponent},


];
