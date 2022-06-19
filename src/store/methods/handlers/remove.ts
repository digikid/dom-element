import { IDomStore } from '@store/classes/DomStore';
import {
  DomStoreId,
  DomStoreHandlers,
  DomStoreHandlersSetup,
} from '@src/store';
import { capitalize } from '@core/utils/string';

export type DomStoreRemoveHandlersMethod = (
  idOrElement: DomStoreId,
  name: string
) => void;

export default (field: DomStoreHandlers) => {
  const setupMethod = `setup${capitalize(field)}` as DomStoreHandlersSetup;

  return function (this: IDomStore, idOrElement, name) {
    // console.log(this.getElementId(idOrElement));

    this[setupMethod](idOrElement, name).length = 0;
  } as DomStoreRemoveHandlersMethod;
};
