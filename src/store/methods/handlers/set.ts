import { type IStore } from '@store/classes/Store';
import {
  type StoreId,
  type StoreHandlers,
  type StoreHandlersSetup,
} from '@src/store';
import { capitalize } from '@utils/string';

export type StoreSetHandlersMethod = (
  idOrElement: StoreId,
  name: string,
  handler: Function
) => void;

export default (field: StoreHandlers) => {
  const setupMethod = `setup${capitalize(field)}` as StoreHandlersSetup;

  return function (this: IStore, idOrElement, name, handler) {
    if (typeof handler === 'function') {
      this[setupMethod](idOrElement, name)
        .push(handler);
    }
  } as StoreSetHandlersMethod;
};
