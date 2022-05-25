import { IDomElement, DomSelector } from '@core/classes/DomElement';
import { move } from '@core/hooks';

export type DomBeforeMethod = (selector: DomSelector) => IDomElement;

export default (function (this: IDomElement, selector) {
  move.call(this, selector, 'before');

  return this;
} as DomBeforeMethod);
