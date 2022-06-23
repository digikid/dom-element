import { isMatches } from '@core/helpers/element';
import { validate } from '@src/validator';

export default (
  collection: HTMLElement[],
  selector?: string,
): HTMLElement[] => {
  if (validate<string>(selector, 'selectorString')) {
    return collection.filter((el) => isMatches(el, selector));
  }

  return collection;
};
