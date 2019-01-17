import models from '../../../models';

export default async (_, args, context) => {
  try {
    console.log({ context: context.userId });
    return await models.Users.findById(context.userId);
  } catch(error) {
    throw new Error(error);
  }
};
