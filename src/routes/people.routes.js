import { Router } from 'express';
import { getPeopleController } from '../controllers/people.controller.js';
import { validateRequestSchema } from '../middlewares/validate.request.schema.js';
import { peopleSchema } from '../schema/people.validation.schemas.js';
const router = Router();

router.get('/', peopleSchema, validateRequestSchema, getPeopleController);

export default router;