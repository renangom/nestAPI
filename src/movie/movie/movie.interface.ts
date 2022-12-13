export interface Movie {
  id: number;
  title: string;
  year: number;
}

// aqui estamos definindo outra interface de input, contudo, omitindo o id
export type InputMovie = Omit<Movie, 'id'>;
