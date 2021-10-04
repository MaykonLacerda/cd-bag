import { Request, Response } from "express";
import { CreateCdService } from './CreateCdService';


class CreateCdController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { user_id, name, artist, release_year, genre, duration } = req.body;

    const createCdService = new CreateCdService();

    await createCdService.execute({ user_id, name, artist, release_year, genre, duration });

    return res.status(201).send();
  }
}

export { CreateCdController };