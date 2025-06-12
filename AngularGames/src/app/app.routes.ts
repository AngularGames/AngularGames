import { Routes } from '@angular/router';
import { PaginaAlmacenComponent } from './component/pagina-almacen/pagina-almacen.component';
import { NuevoRegistroComponent } from './component/pagina-almacen/nuevo-registro/nuevo-registro.component';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';
import { PaginaUsuarioComponent } from './component/pagina-usuario/pagina-usuario.component';
import { HeaderComponent } from './component/header/header.component';
<<<<<<< HEAD
import { PaginapruebasComponent } from './component/paginapruebas/paginapruebas.component'
=======
import { PaginapruebasComponent } from './component/paginapruebas/paginapruebas.component';
>>>>>>> e38a2bc1d2dbb4a96a8500379286f5c7d2512a91

export const routes: Routes = [
  {path:"almacen", component:PaginaAlmacenComponent},
  {path:"nuevoProducto", component:NuevoRegistroComponent},
  {path:"producto", component:PaginaProductoComponent},
<<<<<<< HEAD
  {path:"usuario",component:PaginaUsuarioComponent},
=======
  {path:"usuarios",component:PaginaUsuarioComponent},
>>>>>>> e38a2bc1d2dbb4a96a8500379286f5c7d2512a91
  {path:"header", component:HeaderComponent},
  {path:"todos", component:PaginapruebasComponent}


<<<<<<< HEAD
=======


>>>>>>> e38a2bc1d2dbb4a96a8500379286f5c7d2512a91
];
