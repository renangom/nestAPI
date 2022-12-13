import {
  Controller,
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { InputMovie, Movie } from './movie/movie.interface';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.movieService.getAllMovies();
  }

  @Get(':id')
  getOneMovie(@Param('id') id: string): Movie {
    return this.movieService.getOneMovie(parseInt(id, 10));
  }

  @Post()
  createNewMovie(@Body() movie: InputMovie) {
    return this.movieService.createNewMovie(movie);
  }

  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() movie: Movie): Movie {
    return this.movieService.updateMovie(parseInt(id, 10), movie);
  }

  @Delete(':id')
  @HttpCode(204)
  removeMovie(@Param('id') id: string): void {
    this.movieService.removeMovie(parseInt(id, 10));
  }
}
