import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function start() {
    const app = await NestFactory.create(AppModule);
    app.enableCors();

    const config = new DocumentBuilder()
      .setTitle('Guided Tours API')
      .setDescription('The excursions.ts API description')
      .setVersion('1.0')
      .addApiKey({
        type: "apiKey",
        name: "X-API-KEY",
        in: "header",
        description: "Enter your API key"
      }, "X-API-KEY")
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('/api/docs', app, document);

    const PORT = process.env.PORT || 3000
    await app.listen(PORT, () => console.log(`Port start on server ${PORT}`));
}

start();
