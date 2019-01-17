import models from '../../../models';

export default async(_, { economy }, context) => {
  let transaction;
  try {
    transaction = await models.sequelize.transaction();

    const newEconomy = await models.Economies.create(economy);

    if (!newEconomy) throw new Error('Error ao registrar o novo modo de economia.');

    return newEconomy;
  } catch(error) {
    transaction.rollback();
    throw new Error(error);
  }
}
