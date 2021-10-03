import bcrypt from 'bcryptjs';

class EcryptionService {

  encryptionString = (string) => {
    return bcrypt.hash(string, 8);
  }
}

export { EcryptionService }