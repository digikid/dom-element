import { IDomStore } from '@store/classes/DomStore';
import { validate } from '@src/validator';
import { getData } from '@store/helpers';

export type DomStoreRemoveDataMethod = (
  idOrElement: string | HTMLElement,
  key?: string
) => void;

export default (function (this: IDomStore, idOrElement, key?) {
  const data = getData(idOrElement);

  if (validate<string>(key, 'string', 'truthy') && key in data) {
    delete data[key];
  }
} as DomStoreRemoveDataMethod);
