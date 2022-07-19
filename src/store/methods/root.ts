import get, { type StoreGetMethod } from '@store/methods/root/get';
import init, { type StoreInitMethod } from '@store/methods/root/init';
import set, { type StoreSetMethod } from '@store/methods/root/set';
import remove, { type StoreRemoveMethod } from '@store/methods/root/remove';

export interface IStoreRootMethods {
  readonly get: StoreGetMethod;
  readonly init: StoreInitMethod;
  readonly set: StoreSetMethod;
  readonly remove: StoreRemoveMethod;
}

export default {
  get,
  init,
  set,
  remove,
} as IStoreRootMethods;
