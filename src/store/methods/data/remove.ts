import { type IStore } from '@store/classes/Store';
import { validate } from '@src/validator';

export type StoreRemoveDataMethod = (
  idOrElement: string | HTMLElement,
  key?: string
) => void;

export default (function (this: IStore, idOrElement, key?) {
  const data = this.setupData(idOrElement);

  if (validate<string>(key, 'string', 'truthy') && key in data) {
    delete data[key];
  }
} as StoreRemoveDataMethod);
