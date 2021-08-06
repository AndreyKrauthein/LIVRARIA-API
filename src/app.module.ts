import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookController } from './book.controller';
import { Book } from './book.model';
import { BookService } from './book.service';

@Module({
  imports: [
      ConfigModule.forRoot(),
      SequelizeModule.forRoot({
        dialect: 'mysql',
        host: 'localhost',
        port: 3306,
        username: process.env.USUARIO_BANCO_DADOS,
        password: process.env.SENHA_BANCO_DADOS,
        database: 'livraria',
        autoLoadModels: true,
        synchronize: true
      }),
      //modelo de banco de dados
      SequelizeModule.forFeature([Book])
  ],
  controllers: [AppController, BookController],
  providers: [AppService, BookService],
})
export class AppModule {}
