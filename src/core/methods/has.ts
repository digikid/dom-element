import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomHasMethod = (selector: string) => IDomElement;

export default (function (this: IDomElement, selector) {
  this.items = validate<string>(selector, 'selectorString')
    ? this.items.filter((el) => el.querySelector(selector))
    : [];

  return this;
} as DomHasMethod);
