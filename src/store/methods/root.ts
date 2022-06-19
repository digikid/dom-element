import get, { DomStoreGetMethod } from '@store/methods/root/get';
import set, { DomStoreSetMethod } from '@store/methods/root/set';
import remove, { DomStoreRemoveMethod } from '@store/methods/root/remove';

export interface IDomStoreRootMethods {
  readonly get: DomStoreGetMethod;
  readonly set: DomStoreSetMethod;
  readonly remove: DomStoreRemoveMethod;
}

export default {
  get,
  set,
  remove,
} as IDomStoreRootMethods;
