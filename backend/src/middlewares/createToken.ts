import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const createToken = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const payload = {
    email,
    password,
  };

  const SECRET = process.env.SECRET_JWT;

  if (SECRET === undefined) {
    return res.status(500).send({ error: 'Internal Server Eerror' });
  }

  const token = jwt.sign(payload, SECRET, jwtConfig);

  console.log(token);
  req.body.token = token;
  next();
};

export default createToken;
