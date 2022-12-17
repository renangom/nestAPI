import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movie } from './movie/movie.entity/movie.entity';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    MovieModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'topSecret',
      database: 'Movie',
      entities: [Movie],
      synchronize: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
