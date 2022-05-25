import { IDomStore } from '@store/classes/DomStore';
import { validate } from '@src/validator';

export type DomStoreSetFnMethod = (id: string, fn: Function) => void;

export default (function (this: IDomStore, id, fn) {
  if (validate<Function>(fn, 'function')) {
    window._domElementStore.fn[id] = fn;
  }
} as DomStoreSetFnMethod);
