import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PaginapruebasComponent } from './app/component/paginapruebas/paginapruebas.component';
import { HeaderComponent } from './app/component/header/header.component';

bootstrapApplication(HeaderComponent, appConfig)
  .catch((err) => console.error(err));
