import { CdRepository } from "../../repositories/CdRepository";

class DeleteCdService {
  async execute(id: string) {
    const cdRepository = new CdRepository();

    await cdRepository.delete(id);
  }
}

export { DeleteCdService };