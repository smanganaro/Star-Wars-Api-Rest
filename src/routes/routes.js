import { Router } from 'express';
import peopleRoutes from './people.routes.js';
import planetsRoutes from './planets.routes.js';
const router = Router();

router.use('/people', peopleRoutes);
router.use('/planets', planetsRoutes);

export default router;