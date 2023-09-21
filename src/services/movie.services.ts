import { Movie } from '../entities';
import { AppDataSource } from '../data-source';
import {
	Pagination,
	PaginationParams,
	MovieCreate,
	MovieList,
	MovieRepo,
	MovieUpdate,
} from '../interfaces';

const repo: MovieRepo = AppDataSource.getRepository(Movie);

async function create(payload: MovieCreate): Promise<Movie> {
	const repo: MovieRepo = AppDataSource.getRepository(Movie);
	const movie: Movie = await repo.save(payload);

	return movie;
}

async function list({
	page,
	perPage,
	order,
	sort,
	prevPage,
	nextPage,
}: PaginationParams): Promise<Pagination> {
	const repo: MovieRepo = AppDataSource.getRepository(Movie);

	const [movies, count]: [Movie[], number] = await repo.findAndCount({
		order: { [sort]: order },
		skip: page, // offset
		take: perPage, // limit
	});

	return {
		prevPage: page <= 1 ? null : prevPage,
		nextPage: count - page <= perPage ? null : nextPage,
		count,
		data: movies,
	};
}

async function update(movie: Movie, payload: MovieUpdate): Promise<Movie> {
	const repo: MovieRepo = AppDataSource.getRepository(Movie);
	return await repo.save({ ...movie, ...payload });
}

async function destroy(movie: Movie): Promise<void> {
	const repo: MovieRepo = AppDataSource.getRepository(Movie);
	await repo.remove(movie);
}

export default { create, list, update, destroy };
