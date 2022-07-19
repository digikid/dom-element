import { type IStore } from '@store/classes/Store';
import { validate } from '@src/validator';

export type StoreGetDataMethod = (
  idOrElement: string | HTMLElement,
  key?: string
) => any;

export default (function (this: IStore, idOrElement, key?) {
  const data = this.setupData(idOrElement);

  if (validate<string>(key, 'string', 'truthy')) {
    return key in data ? data[key] : undefined;
  }

  return data;
} as StoreGetDataMethod);
