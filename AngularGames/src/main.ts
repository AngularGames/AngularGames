import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { PaginaPrincipalComponent } from './app/component/pagina-principal/pagina-principal.component';

bootstrapApplication(PaginaPrincipalComponent, appConfig)
  .catch((err) => console.error(err));
