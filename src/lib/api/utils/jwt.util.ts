import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET ?? 'change_me';
const EXPIRES_IN = process.env.JWT_EXPIRES_IN ?? '7d';

export class Jwt {
  public signJwt(payload: object) {
    return jwt.sign(payload, SECRET, { expiresIn: EXPIRES_IN });
  }

  public verifyJwt(token: string) {
    return jwt.verify(token, SECRET) as any;
  }
}
