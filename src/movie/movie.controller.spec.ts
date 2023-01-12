import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

describe('MovieController', () => {
  let controller: MovieController;
  let service: MovieService;

  const movie = [
    {
      id: 1,
      title: 'Iron Man',
      year: 2008,
    },
  ];

  const movies = [
    {
      id: 1,
      title: 'Iron Man',
      year: 2008,
    },
    {
      id: 2,
      title: 'Thor',
      year: 2011,
    },
    {
      id: 3,
      title: 'Captain America',
      year: 2011,
    },
    {
      id: 4,
      title: 'Shrek',
      year: 2001,
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovieController],
      providers: [
        {
          provide: MovieService,
          useValue: {
            async getOneMovie() {
              return movie;
            },
            async getAllMovies() {
              return movies;
            },
          },
        },
      ],
    }).compile();

    controller = module.get<MovieController>(MovieController);
    service = module.get<MovieService>(MovieService);
  });

  it('should return one movie', async () => {
    const result = await controller.getOneMovie('1');

    expect(result).toStrictEqual([
      {
        id: 1,
        title: 'Iron Man',
        year: 2008,
      },
    ]);
  });

  it('shoul return all movies', async () => {
    const result = await controller.getAllMovies();
    expect(result).toStrictEqual([
      {
        id: 1,
        title: 'Iron Man',
        year: 2008,
      },
      {
        id: 2,
        title: 'Thor',
        year: 2011,
      },
      {
        id: 3,
        title: 'Captain America',
        year: 2011,
      },
      {
        id: 4,
        title: 'Shrek',
        year: 2001,
      },
    ]);
  });
});
