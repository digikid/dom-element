import { type StoreId, type StoreHandlers } from '@src/store';
import { type IStore } from '@store/classes/Store';

export type StoreSetupHandlersMethod = (
  idOrElement: StoreId,
  name: string
) => Function[];

export default (field: StoreHandlers) => function (this: IStore, idOrElement, name) {
  const functions = window._domElementStore[field];
  const id = this.getElementId(idOrElement);

  if (!(name in functions)) {
    functions[name] = {};
  }

  if (!(id in functions[name])) {
    functions[name][id] = [];
  }

  return functions[name][id];
} as StoreSetupHandlersMethod;
