import { ICreateCdDTO } from "../../dtos/ICreateCdDTO";
import { CdRepository } from "../../repositories/CdRepository";

interface IResponse {
  name: string;
  artist: string;
  release_year: string;
  genre: string;
  duration: string;
}

class ListCdService {
  async execute(user_id: string) {
    const cdRepository = new CdRepository();

    const cds = await cdRepository.listByUser(user_id);

    return cds;
  }
}

export { ListCdService };