import { IDomStore } from '@store/classes/DomStore';
import { validate } from '@src/validator';

export type DomStoreGetDataMethod = (
  idOrElement: string | HTMLElement,
  key?: string
) => any;

export default (function (this: IDomStore, idOrElement, key?) {
  const data = this.setupData(idOrElement);

  if (validate<string>(key, 'string', 'truthy')) {
    return key in data ? data[key] : undefined;
  }

  return data;
} as DomStoreGetDataMethod);
