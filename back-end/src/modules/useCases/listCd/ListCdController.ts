import { Request, Response } from "express";
import { ListCdService } from "./ListCdService";



class ListCdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCdService = new ListCdService();

    const cds = await listCdService.execute();

    return res.status(200).json(cds);
  }
}

export { ListCdController };
