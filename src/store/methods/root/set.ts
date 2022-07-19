import { type IStore } from '@store/classes/Store';
import { type IStorage } from '@src/store';

export type StoreSetMethod = <T extends keyof IStorage>(
  id: T,
  value: IStorage[T]
) => void;

export default (function (this: IStore, id, value) {
  window._domElementStore[id] = value;
} as StoreSetMethod);
