import { Request, Response } from "express";
import { AuthenticateUserService } from "./AuthenticateUserService";

class AuthenticateUserController {

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { username, password } = req.body;

      const authenticateUserService = new AuthenticateUserService();

      const result = await authenticateUserService.execute({ username, password });

      return res.status(200).json(result);
    } catch (err) {
      return res.status(401).json({ "Error": err.message });
    }


  }
}
export { AuthenticateUserController }