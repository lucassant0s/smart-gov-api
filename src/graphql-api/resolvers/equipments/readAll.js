import models from '../../../models';
import { getNestedChildren } from '../../../utils';

export default async (_, args, context) => {
  try {
    let secretaries = await models.Secretaries.findAll({ raw: true });
    let edifices = await models.Edifices.findAll({
      secretary_id: secretaries[0].id,
      raw: true
    });
    let sensors = await models.Sensors.findAll({
      edifice_id: edifices[0].id,
      raw: true
    });
    edifices[0].children = sensors;
    secretaries[0].children = edifices;
    console.log({ secretaries });
    return secretaries;
  } catch(error) {
    throw new Error(error);
  }
};
