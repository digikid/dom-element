import { DomElement, type IDomElement } from '@core/classes/DomElement';
import { filter } from '@core/helpers/collection';
import { validate } from '@src/validator';

export type MapHookCallback = () => HTMLElement[] | IDomElement;

export type MapHook = (
  callback: MapHookCallback,
  selector?: string
) => DomElement;

export default (function (this: IDomElement, callback, selector?) {
  const result = callback();

  if (validate<HTMLElement[]>(result, 'htmlElementsArray')) {
    return new DomElement(filter(result, selector));
  }

  return new DomElement(result);
} as MapHook);
