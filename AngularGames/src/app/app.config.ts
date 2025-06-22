import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { PaginaProductoComponent } from './component/pagina-producto/pagina-producto.component';
import { PaginapruebasComponent } from './component/paginapruebas/paginapruebas.component';
import { PaginaUsuarioComponent } from './component/pagina-usuario/pagina-usuario.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(),PaginaProductoComponent, PaginapruebasComponent, PaginaUsuarioComponent]
};
