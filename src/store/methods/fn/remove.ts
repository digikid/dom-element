import { IDomStore } from '@store/classes/DomStore';

export type DomStoreRemoveFnMethod = (id: string) => void;

export default (function (this: IDomStore, id) {
  if (id in window._domElementStore.fn) {
    delete window._domElementStore.fn[id];
  }
} as DomStoreRemoveFnMethod);
