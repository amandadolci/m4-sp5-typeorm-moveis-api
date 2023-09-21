import { Request, Response } from 'express';
import { Movie } from '../entities';
import { movieServices } from '../services';
import { Pagination, MovieList, MovieUpdate } from '../interfaces';

async function create(request: Request, response: Response): Promise<Response> {
	const movie: Movie = await movieServices.create(request.body);
	return response.status(201).json(movie);
}

async function list(request: Request, response: Response): Promise<Response> {
	const pagination: Pagination = await movieServices.list(response.locals.pagination);
	return response.status(200).json(pagination);
}

async function update(request: Request, response: Response): Promise<Response> {
	const payload: MovieUpdate = request.body;
	const foundMovie: Movie = response.locals.movie;

	const movie: Movie = await movieServices.update(foundMovie, payload);

	return response.status(200).json(movie);
}

async function destroy(request: Request, response: Response): Promise<Response> {
	await movieServices.destroy(response.locals.movie);
	return response.status(204).json();
}

export default { create, list, update, destroy };
