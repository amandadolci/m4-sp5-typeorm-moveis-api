import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

export const validateBody =
	(schema: z.ZodTypeAny) =>
	(request: Request, response: Response, next: NextFunction): void => {
		request.body = schema.parse(request.body);
		return next();
	};



// pure function
export function myFunc(myInput: string): string {
	return myInput;
};

// impure function
export function mySideEffectfulFunc(myInput: string): string {
	console.log("this is a side-effect!")
	return myInput;
};
