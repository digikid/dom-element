import { IDomStore } from '@store/classes/DomStore';
import { validate } from '@src/validator';

export type DomStoreGetFnMethod = (
  id?: string
) => Record<string, Function> | Function | undefined;

export default (function (this: IDomStore, id?) {
  const { fn } = window._domElementStore;

  if (validate<string>(id, 'string', 'truthy')) {
    return id in fn ? fn[id] : undefined;
  }

  return fn;
} as DomStoreGetFnMethod);
