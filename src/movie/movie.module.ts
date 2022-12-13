import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';

@Module({
  imports: [],
  controllers: [MovieController],
  exports: [],
  providers: [],
})
export class MovieModule {}
