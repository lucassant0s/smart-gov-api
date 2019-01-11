import models from '../../../models';

export default async (rule_id) => {
  try {
    console.log('rule_id', rule_id);
    return await models.Rules.findById(rule_id);
  } catch(error) {
    throw new Error(error);
  }
}
