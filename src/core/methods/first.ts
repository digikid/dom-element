import { IDomElement } from '@core/classes/DomElement';

export type DomFirstMethod = () => IDomElement;

export default (function (this: IDomElement) {
  return this.eq(0);
} as DomFirstMethod);
