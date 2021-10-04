import { Request, Response } from "express";
import { AuthenticateUserService } from "./AuthenticateUserService";

class AuthenticateUserController {

  async handle(req: Request, res: Response): Promise<Response> {
    const { username, password } = req.body;

    const authenticateUserService = new AuthenticateUserService();

    const token = await authenticateUserService.execute({ username, password });

    return res.status(200).json(token);
  }
}
export { AuthenticateUserController }