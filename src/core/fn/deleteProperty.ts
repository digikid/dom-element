import { validate } from '@src/validator';
import { store } from '@src/store';

export default (target: Object, prop: string | symbol): boolean => {
  if (validate<string>(prop, 'string', 'truthy')) {
    store.removeFn(prop);
  }

  return true;
};
