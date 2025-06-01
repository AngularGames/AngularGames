import { Routes } from '@angular/router';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';
import { NuevoRegistroComponent } from './component/pagina-almacen/nuevo-registro/nuevo-registro.component';

export const routes: Routes = [
  {path:"articulo", component:NuevoRegistroComponent}

];
