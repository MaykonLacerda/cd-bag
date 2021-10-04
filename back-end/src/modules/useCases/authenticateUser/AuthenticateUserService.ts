import { UsersRepository } from '../../repositories/UsersRepository'
import { TokenOptionsService } from '../../../utils/TokenOptionsService';
import { EcryptionService } from '../../../utils/EncryptionService';

interface IRequest {
  username: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    username: string;
  };
  token: string;
}

class AuthenticateUserService {
  async execute({ username, password }: IRequest): Promise<IResponse> {
    const usersRepository = new UsersRepository();
    const tokenOptionsService = new TokenOptionsService();
    const ecryptionService = new EcryptionService();

    const user = await usersRepository.findByUsername(username);

    if (!user) {
      throw new Error("Email or password incorrect!");
    }

    const passwordMatch = await ecryptionService.compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("Email or password incorrect!");
    }

    const token = await tokenOptionsService.generateToken({}, "5h");

    const tokenReturn: IResponse = {
      user: {
        name: user.name,
        username: user.username
      },
      token
    };

    return tokenReturn;
  }
}

export { AuthenticateUserService };