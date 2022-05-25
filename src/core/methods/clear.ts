import { IDomElement } from '@core/classes/DomElement';

export type DomClearMethod = () => IDomElement;

export default (function (this: IDomElement) {
  return this.html('');
} as DomClearMethod);
