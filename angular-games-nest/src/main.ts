import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
.setTitle('Angular Games')
.setDescription('Documentación de Angular Games')
.setVersion('1.0')
.addTag("")
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('libros/api', app, document);
  app.enableCors()
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
