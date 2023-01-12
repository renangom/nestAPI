import {
  Controller,
  Body,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger/dist/decorators';
import { JwtAuthGuard } from '../auth/jwt.guard/jwt.guard';
import { InputMovie } from './movie/movie.interface';
import { MovieService } from './movie.service';
import { Movie } from './movie.entity/movie.entity';

@ApiTags('movies')
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @ApiOkResponse({
    description: 'All available movies',
  })
  @Get()
  getAllMovies(): Promise<Movie[]> {
    return this.movieService.getAllMovies();
  }

  @ApiOkResponse({
    description: 'The movie matching the given id',
  })
  @Get(':id')
  getOneMovie(@Param('id') id: string): Promise<Movie> {
    return this.movieService.getOneMovie(parseInt(id, 10));
  }

  @ApiOkResponse({
    description: 'The newly created movie',
  })
  @Post()
  createNewMovie(@Body() movie: InputMovie) {
    return this.movieService.createNewMovie(movie);
  }

  @ApiOkResponse({
    description: 'The updated movie',
  })
  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() movie: Movie): Promise<Movie> {
    return this.movieService.updateMovie(parseInt(id, 10), movie);
  }

  @ApiOkResponse({
    description: 'Nothing',
  })
  @Delete(':id')
  @HttpCode(204)
  removeMovie(@Param('id') id: string): void {
    this.movieService.removeMovie(parseInt(id, 10));
  }
}
