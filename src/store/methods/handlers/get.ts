import {
  type StoreId,
  type StoreHandlers,
  type StoreHandlersSetup,
} from '@src/store';
import { type IStore } from '@store/classes/Store';
import { capitalize } from '@utils/string';

export type StoreGetHandlersMethod = (
  idOrElement: StoreId,
  name: string
) => Function[];

export default (field: StoreHandlers) => {
  const setupMethod = `setup${capitalize(field)}` as StoreHandlersSetup;

  return function (this: IStore, idOrElement, name) {
    return this[setupMethod](idOrElement, name);
  } as StoreGetHandlersMethod;
};
