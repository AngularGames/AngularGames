import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Juego } from './Model/Juego';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
.setTitle('Articulos API')
.setDescription('Control de Artículos de Angular Games')
.setVersion('1.0')
.addTag("")
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('ayuda/api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
