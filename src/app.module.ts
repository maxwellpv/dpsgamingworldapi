import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Publication } from "./publications/publication.entity";
import { PublicationsModule } from "./publications/publications.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'lc2',
      entities: [Publication],
      synchronize: true,
      dropSchema: false,
    }),
    PublicationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
