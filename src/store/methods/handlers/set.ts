import { IDomStore } from '@store/classes/DomStore';
import {
  DomStoreId,
  DomStoreHandlers,
  DomStoreHandlersSetup,
} from '@src/store';
import { capitalize } from '@core/utils/string';

export type DomStoreSetHandlersMethod = (
  idOrElement: DomStoreId,
  name: string,
  handler: Function
) => void;

export default (field: DomStoreHandlers) => {
  const setupMethod = `setup${capitalize(field)}` as DomStoreHandlersSetup;

  return function (this: IDomStore, idOrElement, name, handler) {
    if (typeof handler === 'function') {
      this[setupMethod](idOrElement, name).push(handler);
    }
  } as DomStoreSetHandlersMethod;
};
