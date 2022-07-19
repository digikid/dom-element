import { type IStore } from '@store/classes/Store';
import { type IStorage } from '@src/store';

export type StoreRemoveMethod = <T extends keyof IStorage>(id: T) => void;

export default (function (this: IStore, id) {
  if (!(id in window._domElementStore)) {
    return;
  }

  delete window._domElementStore[id];
} as StoreRemoveMethod);
