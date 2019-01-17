import models from '../../../models';
import {
  generateToken
} from '../../../utils';

export default async (root, { user }) => {
  let transaction = null;
    try {
      transaction = await models.sequelize.transaction();
      console.log('user', user);

      const isUser = await models.Users.findOne({ where: { email: user.email }});
      if (isUser) throw new Error('Email registered on the platform');

      let newUser = await models.Users.create(user);

      if (!newUser) throw new Error('Not created new user');
      return await generateToken(newUser, user);
      transaction.commit();
    } catch (error) {
      console.log('error', error);
      await transaction.rollback();
      throw new Error(error.message);
    }
}
