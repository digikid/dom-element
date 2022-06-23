import { DomElement, IDomElement } from '@core/classes/DomElement';
import { filter } from '@core/helpers/collection';
import { validate } from '@src/validator';

export type DomMapHookCallback = () => HTMLElement[] | IDomElement;

export type DomMapHook = (
  callback: DomMapHookCallback,
  selector?: string
) => DomElement;

export default (function (this: IDomElement, callback, selector?) {
  const result = callback();

  if (validate<HTMLElement[]>(result, 'htmlElementsArray')) {
    return new DomElement(filter(result, selector));
  }

  return new DomElement(result);
} as DomMapHook);
