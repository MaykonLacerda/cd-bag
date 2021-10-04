import { Router } from 'express';
import { CreateCdController } from '../modules/useCases/createCd/CreateCdControler';
import { DeleteCdController } from '../modules/useCases/deleteCd/DeleteCdController';
import { ListCdController } from '../modules/useCases/listCd/ListCdController';
import { UpdateCdController } from '../modules/useCases/updateCd/UpdateCdController';

const cdsRoutes = Router();

const createCdController = new CreateCdController;
const listCdController = new ListCdController();
const updateCdController = new UpdateCdController();
const deleteCdController = new DeleteCdController();

cdsRoutes.post('/', createCdController.handle);
cdsRoutes.post('/list/:id', listCdController.handle);
cdsRoutes.post('/update/:id', updateCdController.handle);
cdsRoutes.post('/delete/:id', deleteCdController.handle);

export { cdsRoutes };