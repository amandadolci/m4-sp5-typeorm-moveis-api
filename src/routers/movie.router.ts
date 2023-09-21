import { Router } from 'express';
import middlewares from '../middlewares';
import { movieCreateSchema, movieUpdateSchema } from '../schemas';
import { movieControllers } from '../controllers';

const movieRouter: Router = Router();

movieRouter.post(
	'',
	middlewares.validateBody(movieCreateSchema),
	middlewares.validateMovieName,
	movieControllers.create
);
movieRouter.get('', middlewares.pagination, movieControllers.list);

movieRouter.use('/:id', middlewares.verifyId);

movieRouter.patch(
	'/:id',
	middlewares.validateBody(movieUpdateSchema),
	middlewares.validateMovieName,
	movieControllers.update
);
movieRouter.delete('/:id', movieControllers.destroy);

export default movieRouter;
