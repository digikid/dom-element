import { IDomElement } from '@core/classes/DomElement';

export type DomLastMethod = () => IDomElement;

export default (function (this: IDomElement) {
  return this.eq(this.length - 1);
} as DomLastMethod);
