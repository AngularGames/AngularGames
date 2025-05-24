import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PaginapruebasComponent } from './app/component/paginapruebas/paginapruebas.component';

bootstrapApplication(PaginapruebasComponent, appConfig)
  .catch((err) => console.error(err));
