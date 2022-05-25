import { IDomStore } from '@store/classes/DomStore';
import { validate } from '@src/validator';
import { id as randomId } from '@utils/random';

export type DomStoreGetIdHook = (idOrElement: string | HTMLElement) => string;

export default (function (this: IDomStore, idOrElement) {
  if (validate<HTMLElement>(idOrElement, 'htmlElement')) {
    if (!idOrElement._domElementId) {
      idOrElement._domElementId = randomId();
    }

    return idOrElement._domElementId;
  }

  return idOrElement;
} as DomStoreGetIdHook);
