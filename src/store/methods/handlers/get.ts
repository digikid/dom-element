import {
  DomStoreId,
  DomStoreHandlers,
  DomStoreHandlersSetup,
} from '@src/store';
import { IDomStore } from '@store/classes/DomStore';
import { capitalize } from '@core/utils/string';

export type DomStoreGetHandlersMethod = (
  idOrElement: DomStoreId,
  name: string
) => Function[];

export default (field: DomStoreHandlers) => {
  const setupMethod = `setup${capitalize(field)}` as DomStoreHandlersSetup;

  return function (this: IDomStore, idOrElement, name) {
    return this[setupMethod](idOrElement, name);
  } as DomStoreGetHandlersMethod;
};
