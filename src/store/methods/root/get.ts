import { type IStore } from '@store/classes/Store';
import { type IStorage } from '@src/store';

export type StoreGetMethod = <T extends keyof IStorage>(id: T) => IStorage[T];

export default (function (this: IStore, id) {
  if (!(id in window._domElementStore)) {
    return null;
  }

  return window._domElementStore[id];
} as StoreGetMethod);
