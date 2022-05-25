import { validate } from '@src/validator';
import { store } from '@src/store';

export default (target: Object, prop: string | symbol): any => {
  if (validate<string>(prop, 'string', 'truthy')) {
    return store.getFn(prop);
  }

  return undefined;
};
