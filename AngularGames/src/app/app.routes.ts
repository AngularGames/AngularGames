import { Routes } from '@angular/router';
import { PaginaAlmacenComponent } from './component/pagina-almacen/pagina-almacen.component';
import { NuevoRegistroComponent } from './component/pagina-almacen/nuevo-registro/nuevo-registro.component';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';

export const routes: Routes = [
  {path:"almacen", component:PaginaAlmacenComponent},
  {path:"nuevoProducto", component:NuevoRegistroComponent},
  {path:"producto", component:PaginaProductoComponent},



];
