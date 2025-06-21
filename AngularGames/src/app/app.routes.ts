import { Routes } from '@angular/router';
import { PaginaAlmacenComponent } from './component/pagina-almacen/pagina-almacen.component';
import { NuevoRegistroComponent } from './component/pagina-almacen/nuevo-registro/nuevo-registro.component';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';
import { PaginaUsuarioComponent } from './component/pagina-usuario/pagina-usuario.component';
import { HeaderComponent } from './component/header/header.component';
import { PaginapruebasComponent } from './component/paginapruebas/paginapruebas.component'
import { PaginaFiltroComponent } from './component/pagina-filtro/pagina-filtro.component';
import { PaginaFiltroTipoComponent } from './component/pagina-filtro-tipo/pagina-filtro-tipo.component';
import { PaginaBusquedaComponent } from './component/pagina-busqueda/pagina-busqueda.component';
import { PaginaCarritoComponent } from './component/pagina-carrito/pagina-carrito.component';
import { PaginaErrorComponent } from './component/pagina-error/pagina-error.component';

export const routes: Routes = [
  {path:"almacen", component:PaginaAlmacenComponent},
  {path:"nuevoProducto", component:NuevoRegistroComponent},
  {path:"producto/:nombre", component:PaginaProductoComponent},
  {path:"usuario",component:PaginaUsuarioComponent},
  {path:"usuarios",component:PaginaUsuarioComponent},
  {path:"header", component:HeaderComponent},
  {path:"todos", component:PaginapruebasComponent},
  {path:"filtro/dificultad/:dificultad", component:PaginaFiltroComponent},
  {path:"filtro/tipo/:tipo", component:PaginaFiltroTipoComponent},
  {path:"filtro/jugadores", component:PaginaFiltroComponent},
  {path:"busqueda", component:PaginaBusquedaComponent},
  {path:"carrito", component:PaginaCarritoComponent},
  {path:"error", component:PaginaErrorComponent},

];
