import { Request, Response } from "express";
import { DeleteCdService } from "./DeleteCdService";


class DeleteCdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const deleteCdService = new DeleteCdService();

    await deleteCdService.execute(id);

    return res.status(204).send();
  }
}

export { DeleteCdController };