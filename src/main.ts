import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar ValidationPipe con opciones
  app.setGlobalPrefix("api");
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, 
      whitelist: true, 
      forbidNonWhitelisted: true,
      validationError: { target: false, value: false }, 
    }),
  );

  // Configurar Swagger
  const config = new DocumentBuilder()
    .setTitle('Nombre de tu API')
    .setDescription('Descripción de tu API')
    .setVersion('1.0')
    .addTag('etiqueta') // Puedes agregar etiquetas para organizar tus rutas
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
}
bootstrap();


// import { ValidationPipe } from '@nestjs/common';
// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);

//   // Configurar ValidationPipe con opciones
//   app.setGlobalPrefix("api");
//   app.useGlobalPipes(
//     new ValidationPipe({
//       transform: true, 
//       whitelist: true, 
//       forbidNonWhitelisted: true,
//       validationError: { target: false, value: false }, 
//     }),
//   );

//   await app.listen(3000);
// }
//bootstrap();

