import { Request, Response } from "express";
import { UpdateCdService } from "./UpdateCdService";


class UpdateCdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, artist, release_year, genre, duration } = req.body;

    const updateCdService = new UpdateCdService();

    await updateCdService.execute({ id, name, artist, release_year, genre, duration });

    return res.status(200).send();
  }
}

export { UpdateCdController };