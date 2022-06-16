import { IDomElement } from '@core/classes/DomElement';

export type DomEmptyMethod = () => IDomElement;

export default (function (this: IDomElement) {
  return this.each((el) => {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  });
} as DomEmptyMethod);
