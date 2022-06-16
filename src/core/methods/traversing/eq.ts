import { IDomElement } from '@core/classes/DomElement';
import { validate } from '@src/validator';

export type DomEqMethod = (i?: number) => IDomElement;

export default (function (this: IDomElement, i?) {
  const el = this.get(i);

  this.items = validate<HTMLElement>(el, 'htmlElement') ? [el] : [];

  return this;
} as DomEqMethod);
