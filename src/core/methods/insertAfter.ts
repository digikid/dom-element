import { IDomElement, DomSelector } from '@core/classes/DomElement';
import { move } from '@core/hooks';

export type DomInsertAfterMethod = (selector: DomSelector) => IDomElement;

export default (function (this: IDomElement, selector) {
  move.call(this, selector, 'after', true);

  return this;
} as DomInsertAfterMethod);
