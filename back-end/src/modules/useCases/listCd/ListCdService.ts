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
  async execute() {
    const cdRepository = new CdRepository();

    const cds = await cdRepository.list();

    return cds;
  }
}

export { ListCdService };