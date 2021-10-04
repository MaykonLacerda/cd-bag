import { Router } from 'express';
import { CreateCdController } from '../modules/useCases/createCd/CreateCdControler';
import { ListCdController } from '../modules/useCases/listCd/ListCdController';

const cdsRoutes = Router();

const createCdController = new CreateCdController;
const listCdController = new ListCdController();

cdsRoutes.post('/', createCdController.handle);
cdsRoutes.post('/list/:id', listCdController.handle);

export { cdsRoutes };