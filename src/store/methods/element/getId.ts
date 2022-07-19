import { type StoreId } from '@src/store';
import { type IStore } from '@store/classes/Store';
import { some, validate } from '@src/validator';
import { id as randomId } from '@utils/random';

export type StoreGetElementIdMethod = (idOrElement: StoreId) => string;

export default (function (this: IStore, idOrElement) {
  if (
    some<Document | HTMLDocument>(idOrElement, 'document', 'documentElement')
  ) {
    return 'document';
  }

  if (validate<Window>(idOrElement, 'window')) {
    return 'window';
  }

  if (validate<HTMLElement>(idOrElement, 'htmlElement')) {
    if (!idOrElement._domElementId) {
      idOrElement._domElementId = randomId();
    }

    return idOrElement._domElementId;
  }

  return idOrElement;
} as StoreGetElementIdMethod);
