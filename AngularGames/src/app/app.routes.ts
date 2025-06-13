import { Routes } from '@angular/router';
import { PaginaAlmacenComponent } from './component/pagina-almacen/pagina-almacen.component';
import { NuevoRegistroComponent } from './component/pagina-almacen/nuevo-registro/nuevo-registro.component';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';
import { PaginaUsuarioComponent } from './component/pagina-usuario/pagina-usuario.component';
import { HeaderComponent } from './component/header/header.component';
import { PaginapruebasComponent } from './component/paginapruebas/paginapruebas.component'
import { PaginaFiltroComponent } from './component/pagina-filtro/pagina-filtro.component';
import { PaginaFiltroTipoComponent } from './component/pagina-filtro-tipo/pagina-filtro-tipo.component';

export const routes: Routes = [
  {path:"almacen", component:PaginaAlmacenComponent},
  {path:"nuevoProducto", component:NuevoRegistroComponent},
  {path:"producto/:nombre", component:PaginaProductoComponent},
  {path:"usuario",component:PaginaUsuarioComponent},
  {path:"usuarios",component:PaginaUsuarioComponent},
  {path:"header", component:HeaderComponent},
  {path:"todos", component:PaginapruebasComponent},
  {path:"filtro/:dificultad", component:PaginaFiltroComponent},
  {path:"filtro/:tipo", component:PaginaFiltroTipoComponent},
  {path:"filtro/jugadores", component:PaginaFiltroComponent},




];
