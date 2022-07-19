import { type IStore } from '@store/classes/Store';
import { validate } from '@src/validator';

export type StoreInitMethod = (callback: Function) => void;

export default (function (this: IStore, callback) {
  if (!this.get('initialized')) {
    if (validate<Function>(callback, 'function')) {
      callback.call(this);
    }

    this.set('initialized', true);
  }
} as StoreInitMethod);
