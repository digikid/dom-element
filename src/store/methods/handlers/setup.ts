import { DomStoreId, DomStoreHandlers } from '@src/store';
import { IDomStore } from '@store/classes/DomStore';

export type DomStoreSetupHandlersMethod = (
  idOrElement: DomStoreId,
  name: string
) => Function[];

export default (field: DomStoreHandlers) => function (this: IDomStore, idOrElement, name) {
  const functions = window._domElementStore[field];
  const id = this.getElementId(idOrElement);

  if (!(name in functions)) {
    functions[name] = {};
  }

  if (!(id in functions[name])) {
    functions[name][id] = [];
  }

  return functions[name][id];
} as DomStoreSetupHandlersMethod;
