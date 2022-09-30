import { Router } from 'express';
import { getPlanetsController } from '../controllers/planets.controller.js';
const router = Router();

router.get('/', getPlanetsController);

export default router;