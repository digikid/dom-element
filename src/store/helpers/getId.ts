import { validate } from '@src/validator';
import { id as randomId } from '@core/utils/random';

export default (
  idOrElement: string | HTMLElement | Window | Document,
): string => {
  if (validate<HTMLElement>(idOrElement, 'htmlElement')) {
    if (!idOrElement._domElementId) {
      idOrElement._domElementId = randomId();
    }

    return idOrElement._domElementId;
  }

  if (validate<Window>(idOrElement, 'window')) {
    return 'window';
  }

  if (validate<Document>(idOrElement, 'document')) {
    return 'document';
  }

  return idOrElement;
};
