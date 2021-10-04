import jwt from 'jsonwebtoken';

class TokenOptionsService {
  async generateToken(payload: Object, expiresIn: string) {
    return jwt.sign(payload, process.env.JWT_KEY, { expiresIn });
  };
}

export { TokenOptionsService };