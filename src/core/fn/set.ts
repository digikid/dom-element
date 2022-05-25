import { validate } from '@src/validator';
import { store } from '@src/store';

export default (target: Object, prop: string | symbol, value: any): boolean => {
  if (
    validate<string>(prop, 'string', 'truthy')
    && validate<Function>(value, 'function')
  ) {
    store.setFn(prop, value);
  }

  return true;
};
