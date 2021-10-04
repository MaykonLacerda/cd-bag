import { ICreateCdDTO } from "../../dtos/ICreateCdDTO";
import { CdRepository } from "../../repositories/CdRepository";



class UpdateCdService {
  async execute({ id, name, artist, release_year, genre, duration }: ICreateCdDTO) {
    const cdRepository = new CdRepository();

    await cdRepository.updateCd({ id, name, artist, release_year, genre, duration });
  }
}

export { UpdateCdService };