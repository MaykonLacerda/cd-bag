import { Request, Response } from "express";

import { CreateUserService } from './CreateUserService';


class CreateUserController {
  async handle(req: Request, res: Response): Promise<Response> {
    const { name, username, password } = req.body;

    const createUserService = new CreateUserService();

    await createUserService.execute({
      name,
      username,
      password
    });

    return res.status(201).send();

  }
}

export { CreateUserController };