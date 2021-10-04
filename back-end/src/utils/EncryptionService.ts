import bcrypt from 'bcryptjs';

class EcryptionService {
  encryptionString = async (string: string) => {
    return await bcrypt.hash(string, 8);
  }

  compare = async (password: string, userPassword: string) => {
    const comp = await bcrypt.compare(password, userPassword).then((result) => {
      return result;
    });

    return comp;
  }
}

export { EcryptionService }