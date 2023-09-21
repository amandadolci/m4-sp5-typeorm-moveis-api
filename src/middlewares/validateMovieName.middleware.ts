import { NextFunction, Request, Response } from 'express';
import { Movie } from '../entities/index';
import { AppError } from '../errors/index';
import { AppDataSource } from '../data-source';
import { MovieRepo } from '../interfaces';

export async function validateMovieName(
	request: Request,
	response: Response,
	next: NextFunction
): Promise<void> {
	const repo: MovieRepo = AppDataSource.getRepository(Movie);
	const { name } = request.body;

	if (!name) return next();

	const movieExists: boolean = await repo.exist({ where: { name } });

	if (movieExists) throw new AppError('Movie already exists.', 409);

	return next();
}
