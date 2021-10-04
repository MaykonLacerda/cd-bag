import { getRepository, Repository } from 'typeorm';
import { Cd } from '../entities/Cd';
import { ICreateCdDTO } from '../dtos/ICreateCdDTO';

class CdRepository {
  private repository: Repository<Cd>;

  constructor() {
    this.repository = getRepository(Cd);
  }

  async create({ user_id, name, artist, release_year, genre, duration }: ICreateCdDTO): Promise<void> {
    const cd = this.repository.create({
      user_id,
      name,
      artist,
      release_year,
      genre,
      duration
    });

    await this.repository.save(cd);
  }
}

export { CdRepository };