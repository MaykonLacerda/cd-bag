import { ICreateCdDTO } from "../../dtos/ICreateCdDTO";
import { CdRepository } from "../../repositories/CdRepository";
import { UsersRepository } from "../../repositories/UsersRepository";


class CreateCdService {
  async execute({ user_id, name, artist, release_year, genre, duration }: ICreateCdDTO): Promise<void> {
    const cdRepository = new CdRepository();

    await cdRepository.create({
      user_id,
      name,
      artist,
      release_year,
      genre,
      duration
    });
  }
}

export { CreateCdService };