import { Router } from 'express';
import { CreateCdController } from '../modules/useCases/createCd/CreateCdControler';

const cdRoutes = Router();

const createCdController = new CreateCdController;

cdRoutes.post('/', createCdController.handle);

export { cdRoutes };