// import { verify} from 'jsonwebtoken';
// import 'dotenv/config';

// const decodeToken = async (req, res, next) => {
//   const token = req.headers.authorization;
//   const SECRET = process.env.SECRET_JWT;
//   if (!token) {
//     return res.status(401).json({ message: 'Token not found' });
//   }
//   console.log(process.env.SECRET_JWT);

//   try {
//     const data = verify(token, SECRET);
//   } catch (err) {
//     return res.status(401).json({ message: 'Expired or invalid token' });
//   }

//   next();
// };

// export default decodeToken;
