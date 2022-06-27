import { verify } from 'jsonwebtoken';
import 'dotenv/config';
import { NextFunction, Request, Response } from 'express';

const decodeToken = async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const SECRET = process.env.SECRET_JWT;
  if (SECRET === undefined) {
    return res.status(500).send({ error: 'Internal Server Error' });
  }
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  console.log(process.env.SECRET_JWT);

  try {
    const data = verify(token, SECRET);
    req.body.user = data;
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }

  next();
};

export default decodeToken;
