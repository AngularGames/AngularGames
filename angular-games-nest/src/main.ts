import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
<<<<<<< HEAD:NestAngularGames/angular-games-nest/src/main.ts
 /* const config = new DocumentBuilder()
.setTitle('Articulos API')
.setDescription('Control de Artículos de Angular Games')
=======
  const config = new DocumentBuilder()
.setTitle('Angular Games')
.setDescription('Documentación de Angular Games')
>>>>>>> ab339076687d54b5e06c967eff2219582e0545f2:angular-games-nest/src/main.ts
.setVersion('1.0')
.addTag("")
.build();
const document = SwaggerModule.createDocument(app, config);
<<<<<<< HEAD:NestAngularGames/angular-games-nest/src/main.ts
SwaggerModule.setup('ayuda/api', app, document);*/
=======
SwaggerModule.setup('ayuda/api', app, document);
  app.enableCors()
>>>>>>> ab339076687d54b5e06c967eff2219582e0545f2:angular-games-nest/src/main.ts
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
