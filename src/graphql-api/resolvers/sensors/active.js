import models from '../../../models';

export default async (_, { name, active }, context) => {
  let transaction;
  try {
    transaction = await models.sequelize.transaction();

    const sensor = await models.Sensors.update({ active }, {
      where: {
        name
      }
    })
    if (!sensor) throw new Error('Não foi possível ligar/desligar o dispositivo');

    transaction.commit();
    return sensor;
  } catch(error) {
    transaction.rollback();
    throw new Error(error);
  }
}
