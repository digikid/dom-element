import { IDomStore } from '@store/classes/DomStore';
import { IDomStorage } from '@store/index';

export type DomStoreSetMethod = <T extends keyof IDomStorage>(
  id: T,
  value: IDomStorage[T]
) => void;

export default (function (this: IDomStore, id, value) {
  window._domElementStore[id] = value;
} as DomStoreSetMethod);
