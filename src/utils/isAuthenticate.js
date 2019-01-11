import models from '../models';
import jwt from 'jsonwebtoken';

const isAuthenticate = async (req, res, next) => {
  try {
    if (!req.headers.hasOwnProperty('authorization')) {
      const error = new Error('Usuário não autênticado');
      error.status = 404;
      return next(error);
    }
    const token = req.headers.authorization.split('Bearer')[1].replace(/ /g,'');
    jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
      const user = await models.Users.findOne({ where: { email: decoded.email } });
      if (!user) throw new Error('Usuário não encontrado');
      req.userId = user.id;
      return next();
    });
  } catch (error) {
    throw new Error(error);
  }
}

export default isAuthenticate;
