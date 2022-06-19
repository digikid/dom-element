import { IDomStore } from '@store/classes/DomStore';
import { IDomStorage } from '@src/store';

export type DomStoreRemoveMethod = <T extends keyof IDomStorage>(id: T) => void;

export default (function (this: IDomStore, id) {
  if (!(id in window._domElementStore)) {
    return;
  }

  delete window._domElementStore[id];
} as DomStoreRemoveMethod);
