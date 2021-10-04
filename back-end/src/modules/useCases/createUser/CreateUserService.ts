import { EcryptionService } from '../../../utils/EncryptionService';
import { UsersRepository } from '../../repositories/UsersRepository';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';

class CreateUserService {

  async execute({ name, username, password }: ICreateUserDTO): Promise<void> {
    const encryptionService = new EcryptionService();
    const usersRepository = new UsersRepository();

    const passwordHash = await encryptionService.encryptionString(password);

    await usersRepository.create({
      name,
      username,
      password: passwordHash
    })
  }
}

export { CreateUserService };