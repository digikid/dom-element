import { DomElement, IDomElement } from '@core/classes/DomElement';

export type DomClearMethod = () => DomElement;

export default (function (this: IDomElement) {
  this.html('');

  return new DomElement(this);
} as DomClearMethod);
