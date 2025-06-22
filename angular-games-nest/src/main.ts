import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
.setTitle('Angular Games')
.setDescription('Documentación de Angular Games')
.setVersion('1.0')
.addTag("")
.build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('ayuda/api', app, document);
  app.enableCors({
    origin: 'http://localhost:4200',
    credentials: true
  })

  new ValidationPipe({
    whitelist: false, // Si lo ponemos a true, SOLO LOS CAMPOS CONDECORADOR SE TIENEN EN CUENTA. El resto son OBVIADOS
    transform: true,
    transformOptions: {
      enableImplicitConversion: true,
    },
  }), 
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
