import { IDomElement, DomSelector } from '@core/classes/DomElement';
import { move } from '@core/hooks';

export type DomAppendToMethod = (selector: DomSelector) => IDomElement;

export default (function (this: IDomElement, selector) {
  move.call(this, selector, 'append', true);

  return this;
} as DomAppendToMethod);
