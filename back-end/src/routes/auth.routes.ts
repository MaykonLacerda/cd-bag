import { Router } from 'express';
import { AuthenticateUserController } from '../modules/useCases/authenticateUser/AuthenticateUserController';

const authRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authRoutes.post('/', authenticateUserController.handle);

export { authRoutes };