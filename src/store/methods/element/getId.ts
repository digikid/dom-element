import { DomStoreId } from '@src/store';
import { IDomStore } from '@store/classes/DomStore';
import { some, validate } from '@src/validator';
import { id as randomId } from '@core/utils/random';

export type DomStoreGetElementIdMethod = (idOrElement: DomStoreId) => string;

export default (function (this: IDomStore, idOrElement) {
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
} as DomStoreGetElementIdMethod);
