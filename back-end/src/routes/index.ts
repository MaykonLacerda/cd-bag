import { Router } from 'express';

import { usersRoutes } from './users.routes';
import { authRoutes } from './auth.routes';
import { cdsRoutes } from './cds.routes';

const router = Router();

router.use('/users', usersRoutes);
router.use('/login', authRoutes);

router.use('/cds', cdsRoutes);

export { router };