import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'; //정적 Contents제공 Module
import { join } from 'path'; //경로설정

@Module({
  imports: [
   ServeStaticModule.forRoot({
     rootPath: join(__dirname, '..', '/client/dist'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
