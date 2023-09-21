import { z } from 'zod';
import { Movie } from '../entities';
import { movieCreateSchema } from '../schemas';
import { DeepPartial, Repository } from 'typeorm';

type MovieCreate = z.infer<typeof movieCreateSchema>;
type MovieList = Array<Movie>;
type MovieUpdate = DeepPartial<MovieCreate>;

type MovieRepo = Repository<Movie>;

export { MovieCreate, MovieList, MovieUpdate, MovieRepo };
