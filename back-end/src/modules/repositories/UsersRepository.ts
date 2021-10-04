import { getRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

class UsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, username, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      password
    });

    await this.repository.save(user);
  }

  async findByUsername(username: string): Promise<User> {
    const user = await this.repository.findOne({ username });
    return user;
  }
}

export { UsersRepository };