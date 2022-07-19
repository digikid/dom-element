import { type IStore } from '@store/classes/Store';
import {
  type StoreId,
  type StoreHandlers,
  type StoreHandlersSetup,
} from '@src/store';
import { capitalize } from '@utils/string';

export type StoreRemoveHandlersMethod = (
  idOrElement: StoreId,
  name: string
) => void;

export default (field: StoreHandlers) => {
  const setupMethod = `setup${capitalize(field)}` as StoreHandlersSetup;

  return function (this: IStore, idOrElement, name) {
    // console.log(this.getElementId(idOrElement));

    this[setupMethod](idOrElement, name).length = 0;
  } as StoreRemoveHandlersMethod;
};
