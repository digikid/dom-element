import { DomStoreId } from '@src/store';
import { IDomStore } from '@store/classes/DomStore';

export type DomStoreSetupDataMethod = (
  idOrElement: DomStoreId
) => Record<string, any>;

export default (function (this: IDomStore, idOrElement) {
  const id = this.getElementId(idOrElement);

  const { data } = window._domElementStore;

  if (!(id in data)) {
    data[id] = {};
  }

  return data[id];
} as DomStoreSetupDataMethod);
