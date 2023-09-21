import { handleError } from './handleError.middleware';
import { validateBody } from './validateBody.middleware';
import { verifyId } from './verifyId.middleware';
import { validateMovieName } from './validateMovieName.middleware';
import { pagination } from './pagination.middleware';

export default { handleError, validateBody, verifyId, validateMovieName, pagination };
