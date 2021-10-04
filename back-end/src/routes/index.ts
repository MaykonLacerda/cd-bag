import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { authRoutes } from './auth.routes';
import { cdRoutes } from './cd.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/login', authRoutes);
router.use('/cds', cdRoutes);

export { router };