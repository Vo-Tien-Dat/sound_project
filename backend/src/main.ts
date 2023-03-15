import { NestFactory } from '@nestjs/core';
import { AppModule } from './root/app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
async function bootstrap() {
    const app = await NestFactory.create(AppModule, {});

    /* understand body parser */
    app.use(bodyParser.json()).use(bodyParser.text());
    /* enalbe CORS for NestJS */
    app.enableCors();
    const config = new DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    await app.listen(4000);
}
bootstrap();
