import { IDomElement, DomSelector } from '@core/classes/DomElement';
import { move } from '@core/hooks';

export type DomPrependToMethod = (selector: DomSelector) => IDomElement;

export default (function (this: IDomElement, selector) {
  move.call(this, selector, 'prepend', true);

  return this;
} as DomPrependToMethod);
