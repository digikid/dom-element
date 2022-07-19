import { type StoreId } from '@src/store';
import { type IStore } from '@store/classes/Store';

export type StoreSetupDataMethod = (
  idOrElement: StoreId
) => Record<string, any>;

export default (function (this: IStore, idOrElement) {
  const id = this.getElementId(idOrElement);

  const { data } = window._domElementStore;

  if (!(id in data)) {
    data[id] = {};
  }

  return data[id];
} as StoreSetupDataMethod);
