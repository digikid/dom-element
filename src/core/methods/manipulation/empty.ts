import { DomElement, IDomElement } from '@core/classes/DomElement';

export type DomEmptyMethod = () => DomElement;

export default (function (this: IDomElement) {
  this.collection.forEach((el) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  });

  return new DomElement(this);
} as DomEmptyMethod);
