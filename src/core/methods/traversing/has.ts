import { DomElement, IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';
import { map } from '@core/hooks';

export type DomHasMethod = (selector: string) => DomElement;

export default (function (this: IDomElement, selector) {
  return map.call(this, () => (validate<string>(selector, 'selectorString')
    ? this.collection.filter((el) => el.querySelector(selector))
    : []));
} as DomHasMethod);
