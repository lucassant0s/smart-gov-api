import models from '../../../models';
import { generateToken } from '../../../utils';

export default async (root, args) => {
  try {
    console.log('args', args);
    const user = await models.Users.findOne({ where: { email: args.email } });
    if (!user) throw new Error('No user with that email');
    return await generateToken(user, args);
  } catch(error) {
    throw new Error(error.message);
  }
}
