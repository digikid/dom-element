import { IDomElement, DomSelector } from '@core/classes/DomElement';
import { parse } from '@core/helpers/selector';
import { validate } from '@src/validator';

export type DomAddMethod = (selector: DomSelector) => IDomElement;

export default (function (this: IDomElement, selector) {
  if (validate(selector)) {
    this.items = [...this.items, ...parse(selector)];
  }

  return this;
} as DomAddMethod);
