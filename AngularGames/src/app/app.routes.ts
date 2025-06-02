import { Routes } from '@angular/router';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';
import { NuevoRegistroComponent } from './component/pagina-almacen/nuevo-registro/nuevo-registro.component';
import { PaginaAlmacenComponent } from './component/pagina-almacen/pagina-almacen.component';

export const routes: Routes = [
  {path:"articulo", component:PaginaAlmacenComponent},
  {path:"nuevoProducto", component:NuevoRegistroComponent}


];
