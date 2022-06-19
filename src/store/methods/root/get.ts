import { IDomStore } from '@store/classes/DomStore';
import { IDomStorage } from '@src/store';

export type DomStoreGetMethod = <T extends keyof IDomStorage>(
  id: T
) => IDomStorage[T];

export default (function (this: IDomStore, id) {
  if (!(id in window._domElementStore)) {
    return null;
  }

  return window._domElementStore[id];
} as DomStoreGetMethod);
