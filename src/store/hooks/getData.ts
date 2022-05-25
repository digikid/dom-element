import { IDomStore } from '@store/classes/DomStore';

import getId from '@store/hooks/getId';

export type DomStoreGetDataHook = (
  idOrElement: string | HTMLElement
) => Record<string, any>;

export default (function (this: IDomStore, idOrElement) {
  const id = getId(idOrElement);

  const { data } = window._domElementStore;

  if (!(id in data)) {
    data[id] = {};
  }

  return data[id];
} as DomStoreGetDataHook);
