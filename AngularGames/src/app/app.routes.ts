import { Routes } from '@angular/router';
import { PaginaAlmacenComponent } from './component/pagina-almacen/pagina-almacen.component';
import { NuevoRegistroComponent } from './component/pagina-almacen/nuevo-registro/nuevo-registro.component';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';
<<<<<<< HEAD
import { PaginaUsuarioComponent } from './component/pagina-usuario/pagina-usuario.component';
=======
import { HeaderComponent } from './component/header/header.component';
import { PaginapruebasComponent } from './component/paginapruebas/paginapruebas.component';
>>>>>>> 135017e043dcdcb20866b22667dd47ceabe56aaf

export const routes: Routes = [
  {path:"almacen", component:PaginaAlmacenComponent},
  {path:"nuevoProducto", component:NuevoRegistroComponent},
  {path:"producto", component:PaginaProductoComponent},
<<<<<<< HEAD
  {path:"usuario",component:PaginaUsuarioComponent}
=======
  {path:"header", component:HeaderComponent},
  {path:"todos", component:PaginapruebasComponent}


>>>>>>> 135017e043dcdcb20866b22667dd47ceabe56aaf


];
