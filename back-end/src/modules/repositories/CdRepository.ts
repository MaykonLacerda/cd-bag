import { getRepository, Repository, UpdateResult } from 'typeorm';
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

  async listByUser(user_id: string): Promise<Array<Cd>> {
    return await this.repository.find({
      where: { user_id }
    });
  }

  async updateCd({ id, name, artist, release_year, genre, duration }: ICreateCdDTO): Promise<UpdateResult> {
    return await this.repository.update({ id }, { name, artist, release_year, genre, duration });
  }
}

export { CdRepository };